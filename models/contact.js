const mongoose = require('mongoose')
const ContactSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	address: { type: String, required: true },
	cinema_id: { type: String, required: false }

})

const Contact = mongoose.model("contacts", ContactSchema);
module.exports = Contact;