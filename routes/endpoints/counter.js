const Counter = require('../../models/counter');

let routes = (app) =>{
	app.all('/counters', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.post("/counters",async(req, res)=>{
	try{
		let counter = new Counter(req.body)
		await counter.save()
		res.json(counter)
	}
	catch(err){
		res.status(500).send(err);
	}

})
app.get("/counters/:id",async(req,res)=>{
	try{
		let counters = await Counter.findOne({_id:req.params.id})
		res.json(counters)
}
	catch(err){
		res.status(500).send(err)
	}

})
app.get("/counters",async(req,res)=>{
	try{
		let counterss = await Counter.find()
		res.json(counterss)
}
	catch(err){
		res.status(500).send(err)
	}

});

}

module.exports = routes;
