const Ticketbooking = require('../../models/ticketbooking');
const UserBooked = require('../../models/userbooked');


let routes = (app) => {

	app.post("/ticketbooking", async (req, res) => {
		let { userbooked_id } = req.body;
		try {
			let userbooked = await UserBooked.findById(userbooked_id)
			let ticketbooking = new Ticketbooking(req.body)
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
	app.post("/ticketbook", async (req, res) => {
		try {
			let ticketbooking = new Ticketbooking(req.body)
			ticketbooking.populate("user_id time_id movie_id");
			await ticketbooking.save();
			res.json(ticketbooking);
		}
		catch (err) {
			console.log(err.message);
			res.status(500).send(err);
		}
	});


	app.get("/ticketbookings", async (req, res) => {
		// let { userbooked_id, user_id } = req.body
		// console.log(userbooked_id)
		try {
			let ticketbookings = await Ticketbooking.find().populate('userbooked_id user_id')
			res.json(ticketbookings)
		}
		catch (err) {
			console.log(err)
			res.status(500).send(err)
		}

	});
	// get by userBooked id
	app.get("/ticketbooking/:id", async (req, res) => {
		try {
			let tickets = await Ticketbooking.find({ userbooked_id: req.params.id });
			res.json(tickets)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	// delete a ticket
	app.delete("/ticketbooking/:id", async (req, res) => {
		try {
			let ticketbooking = await Ticketbooking.deleteOne({ _id: req.params.id });
			res.json(ticketbooking);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});



}

module.exports = routes;
