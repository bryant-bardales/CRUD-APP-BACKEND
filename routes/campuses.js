const router = require('express').Router()
const { campuses } = require('../database/index')


// GET /getAllCampus, get all campuses info w/student info using sequelize

router.get("/", async (res) => {
    try {
        const allCampuses = await campuses.findAll()
        res.status(200).json(allCampuses)
    }
    catch (e) {
        res.json(e);
    }
})

// GET /getCampus/:campusId

router.get('/:campusId', async (req, res) => {
    try {
        const campus = await campuses.findByPK(req.params.id)
        res.status(200).json(campus)
    }
    catch (e) {
        res.json(e)
    }
})


// POST /addCampus, add campus to database using sequelize

router.post("/", async (req, res) => {
    try {
        const addCampus = await campuses.create(req.body)
        res.status(200).json(addCampus)
    }
    catch (e) {
        res.json(e);
    }
})

// DELETE /:campusId/delete, delete campus from database using sequelize

router.delete('/:campusId', async (req, res) => {
    try {
        await campuses.destroy({
            where: { id: req.params.id }
        })
        res.sendStatus(204)
    }
    catch (e) {
        res.json(e)
    }
})

// PUT /:campusId update campus info in database using sequelize

router.put('/:campusId', async (req, res) => {
    try {
        let newCampus = await campuses.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(newCampus);
    }
    catch (e) {
        res.json(e)
    }
});

module.exports = router