const Admin = require('../../models/admin');

let routes = (app) =>{

app.post("/loginadmin",async(req,res)=>{
	try{
		let {passwd,username,email} = req.body
		let admins = await Admin.findOne({username,email,passwd});
		if(admins){
			res.send(admins)
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
