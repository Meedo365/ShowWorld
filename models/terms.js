const mongoose = require('mongoose');

const TermsSchema = new mongoose.Schema({
    company:{type:String, required:false},
    created_by:{type:String, required:false},
    cinemaID: { type: String, required: false },
    description: { type: String, required: true }
})

const Terms = mongoose.model('terms', TermsSchema);

module.exports = Terms;