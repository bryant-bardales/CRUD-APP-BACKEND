const router = require('express').Router()
const { campuses } = require('../database')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

router.use(cors(corsOptions))


// GET /getAllCampus, get all campuses info w/student info using sequelize

router.get("/", async (req, res) => {
    try {
        const allCampuses = await campuses.findAll()
		res.status( allCampuses == null ? 204 : 200).json(allCampuses)  
    }
    // need to set up something for empty database " no campus found "
    catch (e) {
        res.json(e);
    }
})

// GET /getCampus/:campusId

router.get('/:campusId', async (req, res) => {
    try {
        const campus = await campuses.findOne({
            where: { campus_id: req.params.campusId },
        })
		res.status( campus == null ? 204 : 200).json(campus)  
    }


    catch (e) {
        res.json(e)
    }
})


// POST /addCampus, add campus to database using sequelize

router.post("/", jsonParser, async (req, res) => {
    console.log(req.body)
    try {
        const addCampus = await campuses.create(
            req.body
        )
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
            where: { campus_id: req.params.campusId }
        })
        res.sendStatus(204)
    }
    catch (e) {
        res.json(e)
    }
})

// PUT /:campusId update campus info in database using sequelize

router.put('/:campusId', jsonParser, async (req, res) => {

    try {
        let update = await campuses.update(req.body, {
            where: { campus_id: req.params.campusId }
        });
        res.status(200).json(update);
    }
    catch (e) {
        res.json(e)
    }
});

module.exports = router