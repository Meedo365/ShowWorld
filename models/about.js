const mongoose = require('mongoose')
const AboutSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	name: { type: String, required: true },
	description: { type: String, required: true },
	logo: { type: String, required: false }

})

const About = mongoose.model("abouts", AboutSchema);
module.exports = About;