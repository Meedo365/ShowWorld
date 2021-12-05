const Terms = require('../../models/termsandcondition');

let routes = (app) =>{

app.all('/terms', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.post("/terms",async(req, res)=>{
	try{
		let terms = new Terms(req.body)
		await terms.save()
		res.json(terms)
	}
	catch(err){
		res.status(500).send(err);
	}

});

app.get("/terms",async(req,res)=>{
	try{
		let termss = await Terms.find()
		res.json(termss)
}
	catch(err){
		res.status(500).send(err)
	}

});



}

module.exports = routes;
