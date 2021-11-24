const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
	username:{type:String, required:true},
	name:{type:String, required:true},
	passwd:{type:String, required:true},
	email:{type:String, required:true},
	image:{type:String, required:true},
	color:{type:String, 
default:()=> color="red", required:true}
	
})

const Admin = mongoose.model("admins",AdminSchema);
module.exports=  Admin;