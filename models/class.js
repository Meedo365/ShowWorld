const mongoose = require('mongoose')
const ClassSchema = new mongoose.Schema({
	name: {
		type: String,

		required: true
	},
	company: {
		type: String,

		required: false
	},
	price: {
		type: Number,

		required: false
	},

	created_by: { type: String, required: false },

}, {
	timestamps: true
})

const TicketClass = mongoose.model("class", ClassSchema);
module.exports = TicketClass;