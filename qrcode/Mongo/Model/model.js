const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    IDStudent: {
        type:String,
    },
    IDClass: {
        type: String,
    },

}); 

let Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = {Attendance};