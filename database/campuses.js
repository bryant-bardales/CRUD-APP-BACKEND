const Sequelize = require("sequelize");
const db = require("./database");

const campuses = db.sequelize.define ("campus", {
    campus_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        allowNull: false,
    },
})

module.exports = campuses