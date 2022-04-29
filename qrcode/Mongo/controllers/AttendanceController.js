const {Attendance} = require("../Model/model");
const AttendanceHelper = require("../helpers/Attendance.helper");

const AttendanceController = {
    addstudent: async(req,res)=> {
        try {
            const newAttendance = new Attendance(req.body);
            
            const saveAttendance = await newAttendance.save();
            
            res.status(500).json(saveAttendance);
        }catch(err){
            console.log(err)
            res.status(500).json(err);
        }

    },
   getallAttendance: async(req, res) => {
       try {
           const allAttendance = await Attendance.find();
           res.status(200).json(allAttendance);

       }catch(err) {
           res.status(500).json(err);
       }
   },

   Attendance: async (req, res) => {
       try{
        const data = {
            date: req.body.date,
            userID: req.body.userID
        }
        await AttendanceHelper(data).then(result => {
            return res.status(200).json({message: result.message, data: result.data});
        }).catch(error => {
            return res.status(500).json(error);
        })

       }catch(error){
        res.status(500).json(error);

       }
   }

};


module.exports = AttendanceController;
