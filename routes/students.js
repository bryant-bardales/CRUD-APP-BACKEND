const router = require('express').Router()
const { campuses, students } = require('../database/index')

// GET /getAllStu       // get all students

router.get('/', async (res) => {
    try {
        const allStudents = await students.findAll();
        res.status(200).json(allStudents)
    }
    catch (e) {
        res.json(e)
    }
})

// GET /getAllStu/:campusName   // get all students who attend * campus

router.get("/:campusName", async (req, res) => {
	try {
		const studentsByCampus = await students.findAll({
			where: { campusId: req.params.id }
		});
		res.status(200).json(studentsByCampus)
	} 
    catch (e) {
		res.json(e);
	}
});

// GET /getStu/:stuId

router.get('/:studentId', async (req, res) => {
    try {
        const student = await students.findByPK(req.params.id)
		res.status(200).json(student)
    }
    catch (e) {
        res.json(e)
    }
})

// POST /addStudent, add student to database using sequelize (be careful w. the mandatory fields !)

router.post("/", async (req, res) => {
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
            where: { id: req.params.id }
        })
        res.sendStatus(204)
    }
    catch (e) {
        res.json(e)
    }
})

// PUT /updateStudentInfo/:studentId, update students info  (be careful w. the mandatory fields !)

router.put('/:studentId', async (req, res) => {
    try {
        let newStudent = await students.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(newStudent);
    }
    catch (e) {
        res.json(e)
    }
});

module.exports = router