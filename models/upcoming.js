const mongoose = require('mongoose')
const UpcomingSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	title: { type: String, required: true },
	logo: { type: String, required: true },
	showing_time: { type: String, required: true },
	release_date: { type: Date, required: true },
	synopsis: { type: String, required: true }
});
const Upcoming = mongoose.model("upcomings", UpcomingSchema);
module.exports = Upcoming;