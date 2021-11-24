const mongoose = require('mongoose')
const MainsiteSchema = new mongoose.Schema({
	company: { type: String, required: false },
	created_by: { type: String, required: false },
	siteName: { type: String, required: true },
	webadmin_id: { type: String, required: true },
	// site_url: { type: String, required: true },
	logo: { type: String, required: true },
	keywords: { type: String, required: true },
	service_fee: { type: String, required: true }

})

const Mainsite = mongoose.model("mainsites", MainsiteSchema);
module.exports = Mainsite;