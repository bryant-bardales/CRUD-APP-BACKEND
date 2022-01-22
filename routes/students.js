const router = require('express').Router()


router.get('/', async (req, res) => {
    res.send("hello world -> students")
})

// GET /getAllStu       // get all students

// GET /getAllStu/:campusName   // get all students who attend * campus

// GET /getStu/:stuId

// POST /addStudent, add student to database using sequelize (be careful w. the mandatory fields !)

// DELETE /deleteStudent/:studentId, delete student from database using sequelize

// PUT /updateStudentInfo/:studentId, update students info  (be careful w. the mandatory fields !)



module.exports = router