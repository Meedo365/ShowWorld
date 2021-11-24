const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
	company: {
		type: String,
		
		required: false
	},
	created_by: {
		type: String,
		
		required: false
	},
	userbooked_id: {
		type: mongoose.Types.ObjectId,

	ref:"userbookeds"},
	user_id: {
		type: mongoose.Types.ObjectId,
		
		ref: "users"
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
}, {
	timestamps: true
})

const Booking = mongoose.model("bookings",BookingSchema);
module.exports= Booking;