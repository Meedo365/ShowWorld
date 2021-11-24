const mongoose = require('mongoose')
const CinemaSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	name: { type: String, required: true },
	no_of_theater: { type: Number, required: true }

})

const Cinema = mongoose.model("cinemas", CinemaSchema);
module.exports = Cinema;