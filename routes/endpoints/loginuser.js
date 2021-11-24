const User = require('../../models/user');

let routes = (app) =>{

app.post("/login",async(req,res)=>{
	try{
		let {passwd,username,email} = req.body
		let users = await User.findOne({username,email,passwd});
		if(users){
			res.send(users)
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
