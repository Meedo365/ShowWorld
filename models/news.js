const mongoose = require('mongoose')
const NewsSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	headline: { type: String, required: true },
	body: { type: String, required: true },
	image: { type: String, required: false },
	cinema_id: { type: String, required: false }
	
});
const News = mongoose.model("news",NewsSchema);
module.exports=  News;