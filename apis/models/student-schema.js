const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    branch: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true}
})

module.exports = mongoose.model('Student', studentSchema)
