const mongoose = require('mongoose')
const BannerSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	url: { type: String, required: true },
	active: { type: Boolean, default: true }


})

const Banner = mongoose.model("banners", BannerSchema);
module.exports = Banner;