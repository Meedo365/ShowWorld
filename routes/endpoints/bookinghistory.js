const Bookinghistory = require('../../models/bookinghistory');

let routes = (app) =>{

app.post("/bookinghistory",async(req, res)=>{
	try{
		let bookinghistory = new Bookinghistory(req.body)
		await bookinghistory.save();
		res.json(bookinghistory)
	}
	catch(err){
		res.status(500).send(err);
	}

})

app.get("/bookinghistorys/:id",async(req, res)=>{
	try{
		let bookinghistorys = await Bookinghistory.findOne({booking_id:req.params.id});
		res.json(bookinghistorys)
	}
	catch(err){
		console.log(err)
		res.status(500).send(err);
	}

})
}




module.exports = routes;
