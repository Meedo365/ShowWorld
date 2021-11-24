const Time = require('../../models/time');

let routes = (app) => {


	app.post("/time", async (req, res) => {
		try {
			let time = new Time(req.body)
			await time.save();
			res.json(time);
			// res.redirect("/abouts");

		}
		catch (err) {
			console.log(err.message);
			res.status(500).send(err);
		}

	});

	app.get("/times", async (req, res) => {
		try {
			let time = await Time.find();
			res.json(time);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.get("/time/:id", async (req, res) => {
		try {
			let time = await Time.find({ movie_id: req.params.id });
			res.json(time);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.put("/time/:id", async (req, res) => {
		try {
			let time = await Time.updateOne({ _id: req.params.id }, req.body);
			res.json(time);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.delete("/time/:id", async (req, res) => {
		try {
			let time = await Time.deleteOne({ _id: req.params.id });
			res.json(time);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});



}

module.exports = routes;
