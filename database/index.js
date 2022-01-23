const Sequelize = require("sequelize");
const students = require('./students')
const campuses = require('./campuses')
const db = require("./database");

campuses.hasMany(students, {
    foreignKey: 'campus'
})

students.belongsTo(campuses, 
    {
        foreignKey: 'campus',
        as: 'att_campus'
    }
)

module.exports = { db, students, campuses }