const Sequelize = require('sequelize')
// const pkg = require('../../package.json')

// may need to be modified 

const db = new Sequelize(
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'kylexue',
        database: 'university',
    }
)

module.exports = db