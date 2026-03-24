const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    course:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model("Batch34FSDStunents", studentSchema)