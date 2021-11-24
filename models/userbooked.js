const mongoose = require('mongoose')
const UserBookedSchema = new mongoose.Schema({

	company: {
		type: String,

		required: false
	},
	created_by: {
		type: mongoose.Types.ObjectId,

		ref: "users"
	},
	movies_schedule_id: {
		type: mongoose.Types.ObjectId,

		ref: "movieschedules"
	},
	movie_id: {
		type: mongoose.Types.ObjectId,

		ref: "movies"
	},
	user_id: {
		type: mongoose.Types.ObjectId,

		ref: "users"
	},
	class_id: {
		type: mongoose.Types.ObjectId,

		ref: "class"
	},
	screen_id: {
		type: mongoose.Types.ObjectId,

		ref: "screens"
	},
	location_id: {
		type: mongoose.Types.ObjectId,

		ref: "locations"
	},
	theater_id: {
		type: mongoose.Types.ObjectId,

		ref: "theaters"
	},
	time_id: {
		type: mongoose.Types.ObjectId,

		ref: "times"
	},
	prices: {
		type: Number,

		required: false
	},
	blockedseat: {
		type: Boolean,

		default: false
	},
	paidseat: {
		type: Boolean,

		default: false
	},
	bookedseat: {
		type: Boolean,

		default: false
	},
	seatNo: {
		type: Number,
		required: false
	},
	email: { type: String, required: false },
	name: { type: String, required: false },
	close: { type: String, default: 'view' }
}, {
	timestamps: true
})

const UserBooked = mongoose.model("userbookeds", UserBookedSchema);
module.exports = UserBooked;