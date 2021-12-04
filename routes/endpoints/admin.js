const Admin = require('../../models/admin');

let routes = (app) => {
	app.all('/admins', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
	app.post('/admins', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					req.body.url = '/' + req.file.path;
					try {
						let admin = new Admin(req.body)
						await admin.save()
						res.json(admin)
					}
					catch (err) {
						res.status(500).send(err);
					}
				}
			}
		});

	});

	// app.post("/admins", async (req, res) => {
	// 	try {
	// 		let admin = new Admin(req.body)
	// 		await admin.save()
	// 		res.json(admin)
	// 	}
	// 	catch (err) {
	// 		res.status(500).send(err);
	// 	}

	// });

	app.get("/admins/:id", async (req, res) => {
		try {
			let admins = await Admin.findOne({ _id: req.params.id })
			res.json(admins)
		}
		catch (err) {
			res.status(500).send(err)
		}

	})
	app.get("/admins", async (req, res) => {
		try {
			let adminss = await Admin.find()
			res.json(adminss)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});

}

module.exports = routes;
