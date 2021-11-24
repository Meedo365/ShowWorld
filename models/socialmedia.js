const mongoose = require('mongoose')
const SocialmediaSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	igUrl: { type: String, required: false },
	fbUrl: { type: String, required: false },
	twitterUrl: { type: String, required: false }





})

const Socialmedia = mongoose.model("socialmedias", SocialmediaSchema);
module.exports = Socialmedia;