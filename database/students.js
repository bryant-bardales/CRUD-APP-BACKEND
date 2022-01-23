const Sequelize = require("sequelize");
const db = require("./database");

const students = db.sequelize.define ("student", {
    stu_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = students