const mongoose = require('mongoose')
const CounterSchema = new mongoose.Schema({
	company:{type:String, required:false},
	created_by:{type:String, required:false},
	username:{type:String, required:true},
	name:{type:String, required:true},
	passwd:{type:String, required:true},
	email:{type:String, required:true},
	image:{type:String, required:true},
	color:{type:String, default:()=> color="yellow", required:true}
	
})

const Counter = mongoose.model("counters", CounterSchema);
module.exports= Counter;