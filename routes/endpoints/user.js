const User = require('../../models/user');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().getMilliseconds() + file.originalname);
	}
});
const upload = multer({ storage: storage }).single('image');

let routes = (app) => {


	// create a developer account
	app.post('/developer_admin', async (req, res) => {
		// upload(req, res, async (err) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		if (req.file) {
		// 			req.body.image = '/' + req.file.path;
		try {
			let { name, email, passwd } = new User(req.body);
			let user = new User(req.body);
			let check = await User.findOne({ email });
			if (check == null) {
				user.is_dev_admin = "true";
				await user.save();
				res.json({ status: "ok", data: user });
			} else {
				return res.json({ msg: "Email already Registered" })
			}
		}
		catch (err) {
			console.log(err.message)
			res.status(500).send(err);
		}
		// 		}
		// 	}
		// });

	});
	
	// create a website admin account
	app.post('/website_admin', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.image = '/' + req.file.path;
					try {
						let { name, email, passwd } = new User(req.body);
						let user = new User(req.body);
						let check = await User.findOne({ email });
						if (check == null) {
							user.is_web_admin = "true";
							await user.save();
							res.json({ status: "ok", data: user });
						} else {
							return res.json({ msg: "Email already Registered" })
						}
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});
	
	app.get("/admin", async (req, res) => {
		try {
			let users = await User.find()
			res.json(users)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});
	// updateAdmin
	app.put("/admin/:id", async (req, res) => {
		try {
			let user = await User.updateOne({ _id: req.params.id }, req.body);
			return res.json(user)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// delete admin
	app.delete("/admin/:id", async (req, res) => {
		try {
			let user = await User.findOneAndRemove({ _id: req.params.id });
			return res.json(user)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

	// create theater admin 
	app.post('/theater_admin', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.image = '/' + req.file.path;
					try {
						let { name, email, passwd } = new User(req.body);
						let user = new User(req.body);
						let check = await User.findOne({ email });
						if (check == null) {
							user.is_theater_admin = "true";
							await user.save();
							res.json({ status: "ok", data: user });
						} else {
							return res.json({ msg: "Email already Registered" })
						}
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	// create counter
	app.post('/counter_admin', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.image = '/' + req.file.path;
					try {
						let { name, email, passwd } = new User(req.body);
						let user = new User(req.body);
						let check = await User.findOne({ email });
						if (check == null) {
							user.is_counter_admin = "true";
							await user.save();
							res.json({ status: "ok", data: user });
						} else {
							return res.json({ msg: "Email already Registered" })
						}
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});
	

	// get single admin
	app.get("/admin/:id", async (req, res) => {
		try {
			let user = await User.findOne({ _id: req.params.id });
			return res.json(user)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

	// login
	app.post("/login", async (req, res) => {
		try {
			let { email, passwd } = req.body;
			let user = await User.findOne({ email, passwd });
			if (user == null) {
				return res.json({ msg: "Invalid Email or Password" })
			} else {
				user.active = true;
				await user.save()
				res.json(user)
			}
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

	app.post("/user", async (req, res) => {
		let { username, passwd, email } = req.body;
		try {
			let { name, email, passwd } = new User(req.body);
			let user = new User(req.body)
			let check = await User.findOne({ email });
			if (check == null) {
				user.is_user = "true";
				await user.save();
				res.json({ status: "ok", data: user });
			} else {
				return res.json({ msg: "Email already Registered" })
			}
		}
		catch (error) {
			if (error.code == 11000) {
				return res.json({ status: "error", error: "Username or Email  already in use" })
			}
			throw error
		}
	});
	// get users
	app.get("/users", async (req, res) => {
		try {
			let users = await User.find()
			res.json(users)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});
	// update user for logout
	app.put("/user/:id", async (req, res) => {
		try {
			let user = await User.updateOne({ _id: req.params.id }, req.body);
			return res.json(user)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// delete user 
	app.delete("/user/:id", async (req, res) => {
		try {
			let user = await User.findOneAndRemove({ _id: req.params.id });
			return res.json(user)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});







}

module.exports = routes;
