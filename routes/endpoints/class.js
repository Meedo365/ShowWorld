const TicketClass = require('../../models/class');

let routes = (app) =>{
app.all('/classes', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.post("/class",async(req, res)=>{
	try {
		// if (req.body == null || " ") return res.json({ status: "error", error: "Pls fill out the required inputs" });
		let ticketclass = new TicketClass(req.body)
		await ticketclass.save();
		res.json({ status: "ok", data: ticketclass });
	}
	catch(err){
		res.status(500).send(err);
	}

});

app.get("/classes",async(req,res)=>{
	try{
		let ticketclasses = await TicketClass.find();
		res.json(ticketclasses);
}
	catch(err){
		res.status(500).send(err);
	}

});

app.put("/class/:id",async(req, res)=>{
	try{
		let ticketclasses = await TicketClass.updateOne({ _id: req.params.id }, req.body);
		res.json(ticketclasses)
	}
	catch(err){
		res.status(500).send(err);
	}

});

	// delete a class
app.delete("/class/:id",async(req,res)=>{
	try{
	let ticketclasses = await TicketClass.deleteOne({_id:req.params.id},req.body);
	res.json(ticketclasses);
	
	}
	catch(err){
		res.status(500).send(err)
	}
});

}

module.exports = routes;
