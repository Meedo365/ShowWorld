const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	username: { type: String, required: false, unique: true },
	name: { type: String, required: false },
	company:{type:String, required:false},
	created_by:{type:String, required:false},
	passwd: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	image: { type: String, required: false },
	is_dev_admin: { type: Boolean, default: false },
	is_web_admin: { type: Boolean, default: false },
	is_theater_admin: { type: Boolean, default: false },
	is_counter_admin: { type: Boolean, default: false },
	is_user: { type: Boolean, default: false },
	active: { type: Boolean, default: false }

})
const User = mongoose.model("users", UserSchema);
module.exports = User;