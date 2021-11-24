const Mainsite = require('../../models/mainsite');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().getMilliseconds() + file.originalname);
	}
});
const upload = multer({ storage: storage }).single('logo');

let routes = (app) => {
	app.post('/mainsites', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.logo = '/' + req.file.path;
					try {
						let settings = new Mainsite(req.body);
						await settings.save()
						res.json(settings)
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	app.get("/mainsites", async (req, res) => {
		try {
			let mainsites = await Mainsite.find()
			res.json(mainsites)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});



}

module.exports = routes;
