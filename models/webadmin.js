const mongoose = require('mongoose')
const WebadminSchema = new mongoose.Schema({
	username:{type:String, required:true},
	passwd:{type:String, required:true},
	email:{type:String, required:true},
	image:{type:String, required:false},
	color:{type:String, default:() => color="blue", required:true}
	
})

const Webadmin = mongoose.model("webadmins",WebadminSchema);
module.exports= Webadmin;