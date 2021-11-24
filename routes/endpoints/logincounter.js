const Counter = require('../../models/counter');

let routes = (app) =>{

app.post("/logincounter",async(req,res)=>{
	try{
		let {passwd,username,email} = req.body
		let counters = await Counter.findOne({username,email,passwd});
		if(counters){
			res.send(counters)
		}
		else{
			res.send("invalid name or password")
		}
}
	catch(err){
		res.status(500).send(err)
	}

});

}

module.exports = routes;
