const News = require('../../models/news');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().getMilliseconds() + file.originalname);
	}
});
const upload = multer({ storage: storage }).single('image');

let routes = (app) => {
	app.post('/news', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.image = '/' + req.file.path;
					try {
						let news = new News(req.body);
						await news.save()
						res.json(news)
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	app.get("/news", async (req, res) => {
		try {
			let newss = await News.find();
			res.json(newss)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.put("/news/:id", async (req, res) => {
		try {
			let news = await News.updateOne({ _id: req.params.id }, req.body);
			return res.json(news)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	app.delete("/news/:id", async (req, res) => {
		try {
			let news = await News.deleteOne({ _id: req.params.id });
			res.json(news)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.get("/news/:id", async (req, res) => {
		try {
			let newss = await News.findOne({ _id: req.params.id }, req.body);
			res.json(newss)
		}
		catch (err) {
			res.status(500).send(err);
		};
	})
}
module.exports = routes;
