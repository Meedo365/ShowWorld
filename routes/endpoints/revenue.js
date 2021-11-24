const Revenue = require('../../models/revenue');
const UserBooked = require('../../models/userbooked');

let routes = (app) => {

	app.post("/revenues", async (req, res) => {

		let { userbooked_id } = req.body;
		try {
			let userbooked = await UserBooked.findById(userbooked_id)
			let ticketbooking = new Revenue(req.body)
			userbooked.paidseat = true
			ticketbooking.populate("user_id ")//movie_id//time_id
			await userbooked.save();
			await ticketbooking.save();
			console.log(userbooked)
			res.json(ticketbooking);
		}
		catch (err) {
			console.log(err.message);
			res.status(500).send(err);
		}
	});

	app.get("/revenues", async (req, res) => {
		try {

			let userbooked = await UserBooked.find({})
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
	app.get("/revenues/:id", async (req, res) => {
		try {
			let revenues = await Revenue.find({ userbooked_id: req.params.id });
			res.json(revenues)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

}



module.exports = routes;
