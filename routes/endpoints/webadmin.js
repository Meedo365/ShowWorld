const Webadmin = require('../../models/webadmin');

let routes = (app) =>{

app.post("/webadmins",async(req, res)=>{
	try{
		let webadmin = new Webadmin(req.body)
		await webadmin.save()
		res.json(webadmin)
	}
	catch(err){
		res.status(500).send(err);
	}

})
app.get("/webadmins/:id",async(req,res)=>{
	try{
		let webadmins = await Webadmin.findOne({_id:req.params.id})
		res.json(webadmins)
}
	catch(err){
		res.status(500).send(err)
	}

})
app.get("/webadmins",async(req,res)=>{
	try{
		let webadminss = await Webadmin.find()
		res.json(webadminss)
}
	catch(err){
		res.status(500).send(err)
	}

});

}

module.exports = routes;
