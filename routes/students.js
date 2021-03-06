const router = require('express').Router()
const { students } = require('../database')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

router.use(cors(corsOptions))

// GET /getAllStu       // get all students

router.get('/', async (req, res) => {
    console.log("ping")
    try {
        const allStudents = await students.findAll();
		res.status( allStudents == null ? 204 : 200).json(allStudents)
    }
    catch (e) {
        res.json(e)
    }
})

// GET /getAllStu/:campusName   // get all students who attend * campus

router.get("/byCampus/:campusName", async (req, res) => {
	try {
		const studentsByCampus = await students.findAll({
			where: { campus: req.params.campusName }
		});
		res.status( studentsByCampus == null ? 204 : 200).json(studentsByCampus)
	} 
    catch (e) {
		res.json(e);
	}
});

// GET /getStu/:stuId

router.get('/byStudentId/:studentId', async (req, res) => {
    try {
        const student = await students.findOne({
            where: { stu_id: req.params.studentId },
        })
        // res.status(204).json("No data found")
		res.status( student == null ? 204 : 200).json(student)
    }
    catch (e) {
        res.json(e)
    }
})

// POST /addStudent, add student to database using sequelize (be careful w. the mandatory fields !)

router.post("/", jsonParser, async (req, res) => {
	try {
		const addStudent = await students.create(req.body);
		res.status(200).json(addStudent);
	} 
    catch (e) {
        res.json(e);
	}
});

// DELETE /deleteStudent/:studentId, delete student from database using sequelize

router.delete('/:studentId', async (req, res) => {
    try {
        await students.destroy({
            where: { stu_id: req.params.studentId }
        })
        res.sendStatus(204)
    }
    catch (e) {
        res.json(e)
    }
})

// PUT /updateStudentInfo/:studentId, update students info  (be careful w. the mandatory fields !)

router.put('/:studentId', jsonParser, async (req, res) => {

    // handle id not exist 
    try {
        let newStudent = await students.update(req.body, {
            where: { stu_id: req.params.studentId }
        });
		res.status(200).json(newStudent)    }
    catch (e) {
        res.json(e)
    }
});

module.exports = router