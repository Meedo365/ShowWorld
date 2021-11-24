const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	country: {
		type: String,
		required: true
	},
	state: {
		type: String,
		required: true
	},
	movies: {
		type: mongoose.Types.ObjectId,
		ref: "movies",
	},
	city:{type:String, required:true}	
})

const Location = mongoose.model("locations", LocationSchema);

module.exports= Location;