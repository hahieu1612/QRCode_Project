
const attendanceModel = require('../Model/attendance.model');
const Attendance = (data) => {
    return new Promise(async (resolve, reject) => {
        const checkAttendance = await attendanceModel.checkAttendance(data);
        if(!checkAttendance){
            await attendanceModel(data).save().then(res => {
                return resolve({message:"Diem danh thanh cong", data: res});
            })
        }else{
            return resolve({message: "Ban da diem danh roi"});
        }
    })
}

module.exports = {
    Attendance: Attendance
}