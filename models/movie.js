const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
	company: {
		type: String,
		required: false
	},
	created_by: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: true
	},
	synopsis: {
		type: String,
		required: true
	},
	casts: {
		type: String,
		required: true
	},
	running_time: {
		type: Number,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	release_date: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	trailer_link: {
		type: String,
		required: true
	},
	created_at: {
		type: Number,
		default: () => Date.now(), required: true
	},
	active: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
});
const Movie = mongoose.model("movies", MovieSchema);
module.exports = Movie;