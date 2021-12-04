const Contact = require('../../models/contact');

let routes = (app) => {
app.all('/contacts', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

	app.post("/contacts", async (req, res) => {
		try {
			let contact = new Contact(req.body)
			await contact.save()
			res.json(contact)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});

	app.get("/contacts", async (req, res) => {
		try {
			let contacts = await Contact.find()
			res.json(contacts)
		}
		catch (err) {
			res.status(500).send(err)
		}

	});

	app.put("/contact/:id", async (req, res) => {
		try {
			let contact = await Contact.updateOne({ _id: req.params.id }, req.body);
			return res.json(contact)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

	app.delete("/contact/:id", async (req, res) => {
		try {
			let contact = await Contact.findOneAndRemove({ _id: req.params.id });
			return res.json(contact)
		}
		catch (err) {
			res.status(500).send(err)
		}
	});



}

module.exports = routes;
