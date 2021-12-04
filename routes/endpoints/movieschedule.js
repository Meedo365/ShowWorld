const Movieschedule = require('../../models/movieschedule');
const Movie = require('../../models/movie');
const Location = require('../../models/location');
const Screen = require('../../models/screen');



let routes = (app) => {
app.all('/movieschedules', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.all('/movieschedule/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
	app.post("/movieschedule", async (req, res) => {
		try {
			// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let movieschedule = new Movieschedule(req.body)
			await movieschedule.save()
			res.json(movieschedule)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.get("/movieschedules", async (req, res) => {
		try {
			let movieschedules = await Movieschedule.find()
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedules);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});
	app.get("/movieschedule/:id", async (req, res) => {
		try {
			let movieschedulescreen = await Movieschedule.find({ movie_id: req.params.id })
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedulescreen)

		} catch (err) {
			console.log(err.message, "err")
			res.status(500).send(err);
		}
	});

	app.get("/movieschedule-booking/:id", async (req, res) => {
		try {
			let movieschedulescreen = await Movieschedule.find({ movie_id: req.params.id })
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedulescreen)

		} catch (err) {
			console.log(err.message, "err")
			res.status(500).send(err);
		}
	});

	app.get("/movieschedule/theater/:id", async (req, res) => {
		try {
			let movieschedulescreen = await Movieschedule.find({ theater_id: req.params.id })
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedulescreen)

		} catch (err) {
			console.log(err.message, "err")
			res.status(500).send(err);
		}
	});

	app.get("/movieschedule-one/:id", async (req, res) => {
		try {
			let movieschedulescreen = await Movieschedule.find({ _id: req.params.id })
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedulescreen)

		} catch (err) {
			console.log(err.message, "err")
			res.status(500).send(err);
		}
	});

	app.get("/movieschedule-theaters/:id", async (req, res) => {
		try {
			let movieschedulescreen = await Movieschedule.find({ movie_id_id: req.params.id })
				.populate("screen_id")
				.populate("location_id")
				.populate("time_id")
				.populate("theater_id")
				.populate("movie_id")
			res.json(movieschedulescreen)

		} catch (err) {
			console.log(err.message, "err")
			res.status(500).send(err);
		}
	});

	app.put("/movieschedule/:id", async (req, res) => {
		try {
			let movieschedule = await Movieschedule.updateOne({ _id: req.params.id }, req.body);
			res.json(movieschedule)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	// delete a movieschedule
	app.delete("/movieschedule/:id", async (req, res) => {
		try {
			let movieschedule = await Movieschedule.deleteOne({ _id: req.params.id });
			res.json(movieschedule);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});

}




module.exports = routes;
