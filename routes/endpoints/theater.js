const Theater = require('../../models/theater');

let routes = (app) => {
app.all('/theater', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

	app.post("/theater", async (req, res) => {
		try {
			// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let theater = new Theater(req.body);
			await theater.save();
			res.json({ status: "ok", data: theater });
		}
		catch (err) {
			console.log(err.message)
			res.status(500).send(err);
		}

	});

	app.get("/theaters", async (req, res) => {
		try {
			let theaters = await Theater.find();
			res.json(theaters)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});

	app.get("/theater/:id", async (req, res) => {
		try {
			let theater = await Theater.find({ movie_id: req.params.id }).populate("location_id")
			res.json(theater);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

	app.put("/theater/:id", async (req, res) => {
		try {
			let theater = await Theater.updateOne({ _id: req.params.id }, req.body);
			res.json(theater);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});
	// delete a theater
	app.delete("/theater/:id", async (req, res) => {
		try {
			let theater = await Theater.deleteOne({ _id: req.params.id }, req.body);
			res.json(theater);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});

}

module.exports = routes;
