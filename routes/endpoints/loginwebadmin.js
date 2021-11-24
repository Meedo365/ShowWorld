const Webadmin = require('../../models/webadmin');

let routes = (app) =>{

app.post("/loginwebadmin",async(req,res)=>{
	try{
		let {passwd,username,email} = req.body
		let webadmins = await Webadmin.findOne({username,email,passwd});
		if(webadmins){
			res.send(webadmins)
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
