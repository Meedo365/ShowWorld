const mongoose = require('mongoose')

const TheaterSchema = new mongoose.Schema({

	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	cinema_id: {
		type: mongoose.Types.ObjectId,
		
		ref: "cinemas"},
	location_id: {
		type: mongoose.Types.ObjectId,
		
		ref: "locations"},
	movie_id: {
		type: mongoose.Types.ObjectId,
		
		ref: "movies"},
	// no_of_screen: {
	// 	type: Number,

	// 	required: true
	// },
}, {
	timestamps: true
})

const Theater = mongoose.model("theaters", TheaterSchema);

module.exports= Theater;