const Upcoming = require('../../models/upcoming');
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
	app.post('/upcoming', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.logo = '/' + req.file.path;
					try {
						let upcoming = new Upcoming(req.body);
						await upcoming.save();
						res.json(upcoming);
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	app.get("/upcomings", async (req, res) => {
		try {
			let upcomings = await Upcoming.find();
			res.json(upcomings)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});

	app.get("/upcoming/:id", async (req, res) => {
		try {
			let upcoming = await Upcoming.findOne({ _id: req.params.id });
			res.json(upcoming);
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

	app.put("/upcoming/:id", async (req, res) => {
		try {
			let upcomings = await Upcoming.updateOne({ _id: req.params.id }, req.body);
			res.json(upcomings)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.delete("/upcoming/:id", async (req, res) => {
		try {
			let banner = await Upcoming.findOneAndRemove({ _id: req.params.id });
			return res.json(banner)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

}

module.exports = routes;
