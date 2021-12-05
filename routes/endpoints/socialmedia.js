const Socialmedia = require('../../models/socialmedia');

let routes = (app) => {
app.all('/socialmedias', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

	app.post("/socialmedias", async (req, res) => {
		try {
			let socialmedia = new Socialmedia(req.body)
			await socialmedia.save()
			res.json(socialmedia)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.get("/socialmedias", async (req, res) => {
		try {
			let socialmedias = await Socialmedia.find()
			res.json(socialmedias)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});

	app.put("/socialmedia/:id", async (req, res) => {
		try {
			let social = await Socialmedia.updateOne({ _id: req.params.id }, req.body);
			res.json(social)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.delete("/socialmedia/:id", async (req, res) => {
		try {
			let social = await Socialmedia.deleteOne({ _id: req.params.id }, req.body);
			res.json(social);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});


}

module.exports = routes;
