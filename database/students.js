const Sequelize = require("sequelize");
const db = require("./database");

const students = db.define("student", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            len: [0,4],
        },
        allowNull: false,
    },

    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    att_campus: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    stu_email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = students