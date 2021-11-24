const About = require('../../models/about');
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
	app.post('/about', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.logo = '/' + req.file.path;
					try {
						let about = new About(req.body)
						await about.save();
						res.json(about);
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	// app.post("/about", async (req, res) => {
	// 	try {
	// 		let about = new About(req.body)
	// 		await about.save();
	// 		console.log(about);
	// 	}
	// 	catch (err) {
	// 		console.log(err.message);
	// 		res.status(500).send(err);
	// 	}

	// });

	app.get("/abouts", async (req, res) => {
		try {
			let abouts = await About.find();
			res.json(abouts);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.put("/about/:id", async (req, res) => {
		try {
			let abouts = await About.updateOne({ _id: req.params.id }, req.body);
			res.json(abouts);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.delete("/about/:id", async (req, res) => {
		try {
			let abouts = await About.deleteOne({ _id: req.params.id });
			res.json(abouts);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});



}

module.exports = routes;
