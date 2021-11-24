const mongoose = require('mongoose')

const TicketbookingSchema = new mongoose.Schema({

	company: {
		type: String,
		
		required: false
	},
	created_by: {
		type: String,
		
		required: false
	},
	user_id: {
		type: mongoose.Types.ObjectId,

		ref: "users"
	},
	time_id: {
		type: mongoose.Types.ObjectId,

		ref: "times"
	},
	movie_id: {
		type: mongoose.Types.ObjectId,

		ref: "movies"
	},
	location_id: {
		type: mongoose.Types.ObjectId,

		ref: "locations"
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

const Ticketbooking = mongoose.model("ticketbooking", TicketbookingSchema);
module.exports= Ticketbooking;