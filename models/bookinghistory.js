const mongoose = require('mongoose')
const BookinghistorySchema = new mongoose.Schema({
	booking_id:{type:String, required:true}
})

const Bookinghistory = mongoose.model("bookinghistorys",BookinghistorySchema);
module.exports= Bookinghistory;