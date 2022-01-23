const Sequelize = require("sequelize");
const db = require("./database");

const campuses = db.define("campus", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
})

module.exports = campuses