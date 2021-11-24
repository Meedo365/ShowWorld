const Location = require('../../models/location');

let routes = (app) => {


	app.post("/location", async (req, res) => {
		try {
			if (req.body === " ") return res.json({ status: "error", error: "Please fill the required inputs" });
			let location = new Location(req.body);
			await location.save();
			res.json({ status: "ok", data: location });
		}
		catch (err) {
			console.log(err.message)
			res.status(500).send(err);
		}
	});

	app.get("/locations", async (req, res) => {
		try {
			let locations = await Location.find()
			res.json(locations)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});
	app.get("/location/:id", async (req, res) => {
		try {
			let location = await Location.findOne({_id:req.params.id})
			res.json(location)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});
	app.put("/location/:id", async (req, res) => {
		try {
			let location = await Location.updateOne({ _id: req.params.id }, req.body);
			res.json(location);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

	// delete a location
	app.delete("/location/:id", async (req, res) => {
		try {
			let location = await Location.deleteOne({ _id: req.params.id }, req.body);
			res.json(location);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});


}

module.exports = routes;
