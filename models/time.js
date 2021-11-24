const mongoose = require('mongoose')

const TimeSchema = new mongoose.Schema({
	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	time: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
},
	{
		timestamps: true
	});

const Time = mongoose.model("times", TimeSchema);

module.exports = Time;