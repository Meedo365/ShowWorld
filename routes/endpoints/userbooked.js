const UserBooked = require('../../models/userbooked');
const Screen = require('../../models/screen');


let routes = (app) => {

	app.post("/userbooked", async (req, res) => {
		try {
			// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let userbooked = new UserBooked(req.body);
			userbooked.bookedseat = true
			await userbooked.save();
			res.json(userbooked);
		}
		catch (err) {
			console.log(err)
			res.status(500).send(err);
		}
	});
	// get all userbooked  history
	app.get("/userbookeds", async (req, res) => {
		try {

			let userbooked = await UserBooked.find()
				.populate("movies_schedule_id")
				.populate("movie_id")
				.populate("theater_id")
				.populate("user_id")
				.populate("screen_id")
				.populate("time_id")
			res.json(userbooked);
		}
		catch (err) {
			console.log(err.massage)
			res.status(500).send(err);
		}
	});
	// get  a particular user booked history
	app.get("/userbooked/:id", async (req, res) => {
		try {
			let userbooked = await UserBooked.find({ user_id: req.params.id })
				.populate("movies_schedule_id")
				.populate("movie_id")
				.populate("class_id")
				.populate("location_id")
				.populate("theater_id")
				.populate("user_id")
				.populate("screen_id")
				.populate("time_id")
			res.json(userbooked);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

	// update a userbooked
	app.put("/userbooked/:id", async (req, res) => {
		try {
			let userbooked = await UserBooked.findOne({ _id: req.params.id });
			userbooked.paidseat = true
			await userbooked.save()
			res.json(userbooked);
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// delete a booking
	app.delete("/userbooked/:id", async (req, res) => {
		try {
			let userbooked = await UserBooked.deleteOne({ _id: req.params.id });
			res.json(userbooked);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});




}





module.exports = routes;
