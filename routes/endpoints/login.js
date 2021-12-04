const Account = require('../../models/user');

let routes = (app) => {
	
app.all('/login', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
app.all('/logout/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
		
// login a user
app.post("/login",async(req,res)=>{
	try{
		let { email, passwd} = req.body;
		let account = await Account.findOne({ email, passwd });
		if (!account) return res.json({ status: "error", error: "Invalid username or password" });
			account.active= "true"
		await account.save();
		res.json({ status: "ok", data: account });

}
	catch(err){
		res.status(500).send(err);
	}
	// res.json({status:"ok"})
});
// login a user
app.post("/user_login",async(req,res)=>{
	try{
		let { email, passwd,is_user} = req.body;
		let account = await Account.findOne({ email, passwd,is_user });
		if (!account) return res.json({ status: "error", error: "Invalid username or password" });
		if (is_user !== 'true') return res.json({ status: "error", error:"Must create an account before you can login" });
			account.active= "true"
		await account.save();
		res.json({status:"ok", data:account})

}
	catch(err){
		res.status(500).send(err);
	}
	// res.json({status:"ok"})
});
	
	// login a dev admin
app.post("/dev_login",async(req,res)=>{
	try{
		let { email, passwd,is_dev_admin} = req.body;
		let account = await Account.findOne({ email, passwd,is_dev_admin });
		if (!account) return res.json({ status: "error", error: "Invalid username or password" });
		if (is_dev_admin !== 'true') return res.json({ status: "error", error:"Must create an account before you can login" });
			account.active= "true"
		await account.save();
		res.json({status:"ok", data:account})

}
	catch(err){
		res.status(500).send(err);
	}
	// res.json({status:"ok"})
});
	
	// login a web admin
app.post("/web_login",async(req,res)=>{
	try{
		let { email, passwd} = req.body;
		let account = await Account.findOne({ email, passwd });
		if (!account) return res.json({ status: "error", error: "Invalid username or password" });
		if (account.is_web_admin == 'false') return res.json({ status: "error", error:"Must create an account before you can login" });
		account.active = "true";
		await account.save();
		res.json({status:"ok", data:account})

}
	catch (err) {
		console.log(err.message)
		res.status(500).send(err);
	}
});
	
		
	// login a theater admin
app.post("/theater_login",async(req,res)=>{
	try{
		let { email, passwd,is_theater_admin} = req.body;
		let account = await Account.findOne({ email, passwd,is_theater_admin });
		if (!account) return res.json({ status: "error", error: "Invalid username or password" });
		if (is_theater_admin !== 'true') return res.json({ status: "error", error:"Must create an account before you can login" });
		account.active = "true";
		await account.save();
		res.json({status:"ok", data:account})

}
	catch(err){
		res.status(500).send(err);
	}
	// res.json({status:"ok"})
});

	// logout a anyone
app.put("/logout/:id",async(req,res)=>{
	try {
		let { active } = req.body;
	let account = await Account.updateOne({_id:req.params.id},req.body);
		if(!account) return res.json({ status: "error", error: "You can not logout twice" });
		account.active = 'false';
		console.log("successfully logged out");
		await account.save();
		res.json({ status: "ok", data: account });

	}
	catch (err) {
		console.log("operation was not successful")
		res.status(500).send(err);
		throw error
	}
	// res.json({ status: "ok" });
});

}

module.exports = routes;
