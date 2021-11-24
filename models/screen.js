const mongoose = require('mongoose');

const ScreenSchema = new mongoose.Schema({

	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	screen: {
		type: String,
		required: true
	},
	theater_id: {
		type: mongoose.Types.ObjectId,
		ref: "theaters"
	},
	no_of_seats: {
		type: Number,
		required: true
	},
	vvip: {
		type: Number,
		required: true
	},
	vip: {
		type: Number,
		required: true
	},
	regular: {
		type: Number,
		required: true
	},
}, {
	timestamps: true
})

const Screen = mongoose.model("screens", ScreenSchema);

module.exports = Screen;