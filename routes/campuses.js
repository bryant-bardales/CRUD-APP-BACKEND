const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send("hello world -> campus")
})

// GET  /getAllCampus, get all campuses info   

// GET /getCampus/:campusId

// POST /addCampus, add campus to database using selenium

// DELETE /deleteCampus/:campusId, delete campus from database using selenium




module.exports = router