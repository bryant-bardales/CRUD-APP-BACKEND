const Sequelize = require("sequelize");
const db = require("./database");

const students = db.define("student", {

    stu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    stu_name: {
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

    stu_img_url: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    campus: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = students