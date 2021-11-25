let Banner = require("../../models/banners");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().getMilliseconds() + file.originalname);
    }
});
const upload = multer({ storage: storage }).single('url');

let routes = (app) => {
    app.post('/banner', async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err);
            } else {
                if (req.file) {
                    req.body.url = '/' + req.file.path;
                    try {
                        let newbanner = new Banner(req.body);
                        await newbanner.save()
                        res.json(newbanner)
                    }
                    catch (err) {
                        res.status(500).send(err);
                    }
                }
            }
        });

    });

    app.get('/banner', async (req, res) => {
        try {
            let banner = await Banner.find();
            res.json(banner)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/banner/:id", async (req, res) => {
        try {
            let banner = await Banner.updateOne({ _id: req.params.id }, req.body);
            return res.json(banner)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.delete("/banner/:id", async (req, res) => {
        try {
            let banner = await Banner.findOneAndRemove({ _id: req.params.id });
            return res.json(banner)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

};

module.exports = routes;
