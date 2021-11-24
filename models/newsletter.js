const mongoose = require('mongoose')
const NewsletterSchema = new mongoose.Schema({
	company:{type:String, required:false},
	created_by:{type:String, required:false},
	user_id:{type:Number, required:true},
	news_body:{type:String, required:true},

	
})

const Newsletter = mongoose.model("newsletters",NewsletterSchema);
module.exports= Newsletter;