const AttendanceController = require("../controllers/AttendanceController");
const UserController = require('../controllers/User.controller')

const router = require ("express").Router();

router.post("/", AttendanceController.addstudent);

router.get("/", AttendanceController.getallAttendance);

router.post("/api/attendance", AttendanceController.Attendance)
router.post("/api/login", UserController.login)


module.exports = router;