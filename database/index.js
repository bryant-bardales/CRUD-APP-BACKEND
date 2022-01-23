const Sequelize = require("sequelize");
const students = require('./students')
const campuses = require('./campuses')
const db = require("./database");

campuses.hasMany(students)
students.belongsTo(campuses, {
    foreignKey: 'campus',
    as: 'att_campus'})

module.exports = { db, students, campuses }