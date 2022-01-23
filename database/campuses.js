const Sequelize = require("sequelize");
const db = require("./database");

const campuses = db.define("campus", {

    campus_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    campus_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    campus_location: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    campus_img_url: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    campus_description: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
}, {
    timestamps: false
  })

module.exports = campuses