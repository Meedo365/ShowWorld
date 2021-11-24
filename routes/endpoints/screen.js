const Screen = require('../../models/screen');

let routes = (app) => {

	app.post("/screen", async (req, res) => {
		try {
			// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let screen = new Screen(req.body)
			await screen.save();
			res.json({ status: "ok", data: screen });
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.get("/screens", async (req, res) => {
		try {
			let screens = await Screen.find()
			.populate("theater_id")
			res.json(screens)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.get("/screen/:id", async (req, res) => {
		try {
			let screen = await Screen.findOne({ _id: req.params.id })
				.populate({ path: location_id, select: location_id })
		}
		catch (err) {
			console.log(err.massage)
			res.status(500).send(err);
		}

	})
	app.put("/screen/:id", async (req, res) => {
		try {
			let screens = await Screen.updateOne({ _id: req.params.id }, req.body);
			res.json(screens)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	// delete a Screen
	app.delete("/screen/:id", async (req, res) => {
		try {
			let screen = await Screen.findOneAndRemove({ _id: req.params.id });
			return res.json(screen)
		}
		catch (err) {
			res.status(500).send(err)
		}
		
	});

}



module.exports = routes;
