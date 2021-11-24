const Cinema = require('../../models/cinema');

let routes = (app) => {


	app.post("/cinema", async (req, res) => {
		try {
			if (req.body == '' || null) return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let cinema = new Cinema(req.body);
			await cinema.save();
			res.json({ status: "ok", data: cinema });
		}
		catch (err) {
			console.log(err.message);
			res.status(500).send(err);
		}

	});

	app.get("/cinemas", async (req, res) => {
		try {
			let cinemas = await Cinema.find();
			res.json(cinemas);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.put("/cinema/:id", async (req, res) => {
		try {
			let cinema = await Cinema.updateOne({ _id: req.params.id }, req.body);
			res.json(cinema);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

	app.delete("/cinema/:id", async (req, res) => {
		try {
			let cinema = await Cinema.deleteOne({ _id: req.params.id });
			res.json(cinema);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});

}

module.exports = routes;
