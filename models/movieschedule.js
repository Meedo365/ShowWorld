const mongoose = require('mongoose')

const MoviescheduleSchema = new mongoose.Schema({
	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	date: {
		type: Date,
		required: true
	},
	screen_id: {
		type: mongoose.Types.ObjectId,
		ref: "screens"
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
	time_id: {
		// type: mongoose.Types.String,
		// type: mongoose.Types.Array,
		type: Array,
		default: [],
		ref: "times"
	}
}, {
	timestamps: true
});

const Movieschedule = mongoose.model("movieschedules", MoviescheduleSchema);

module.exports = Movieschedule;