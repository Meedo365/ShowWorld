const mongoose = require('mongoose');
const NewsletterSchema = new mongoose.Schema({
	company:{type:String, required:false},
	created_by:{type:String, required:false},
    cinemaId: { type: String, required: false},
    news_body: { type: String, required: true }
})

const Newsletter = mongoose.model('newsletter', NewsletterSchema);

module.exports = Newsletter;