const mongoose = require('mongoose')
const RevenueSchema = new mongoose.Schema({

	company: {
		type: String,

		required: false
	},
	created_by: {
		type: String,

		required: false
	},
	time: {
		type: mongoose.Types.ObjectId,

		ref: "times"
	},
	movie: {
		type: mongoose.Types.ObjectId,

		ref: "movies"
	},
	theater_id: {
		type: mongoose.Types.ObjectId,

		ref: "theaters"
	},
	screen_id: {
		type: mongoose.Types.ObjectId,

		ref: "screens"
	},
	class_id: {
		type: mongoose.Types.ObjectId,

		ref: "class"
	},
	userbooked_id: {
		type: mongoose.Types.ObjectId,

		ref: "userbookeds"
	},
	name: {
		type: String,

		required: false
	},

	paidseat: {
		type: Boolean,

		default: true
	},
},
	{
		timestamps: true
	})

const Revenue = mongoose.model("revenues", RevenueSchema);
module.exports = Revenue;