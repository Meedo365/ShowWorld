const Booking = require('../../models/booking');
const Screen = require('../../models/screen');


let routes = (app) =>{
app.all('/bookings', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
	app.post("/booking", async (req, res) => {
		try {
			// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
			let booking = new Booking(req.body);
			booking.bookedseat = "true"
			booking.blockedseat = "true"
			await booking.save();
			res.json(booking);
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	// get booking history
	app.get("/bookings", async (req, res) => {
		try {
			
			let bookings = await Booking.find();
			res.json(bookings);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

	app.get("/booking/:id", async (req, res) => {
		try {
			let bookings = await Booking.find({ movies_schedule_id: req.params.id })
				.populate("movies_schedule_id");
			res.json(bookings);
		}
		catch (err) {
			res.status(500).send(err);
		}
	});

// delete a booking
app.delete("/booking/:id",async(req,res)=>{
	try{
	let booking = await Booking.deleteOne({_id:req.params.id});
	res.json(booking);
	
	}
	catch(err){
		res.status(500).send(err)
	}
});
	


	
}





module.exports = routes;
