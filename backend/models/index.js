const dbConfig = require('../config/database.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        port: dbConfig.PORT,
        socketPath: dbConfig.DB_SOCKET,
        operatorsAliases: 0,
        logging: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.buckets = require('./bucket.js')(sequelize, DataTypes,Sequelize)
db.balls = require('./ball.js')(sequelize, DataTypes,Sequelize)
db.bucketSuggestions = require('./bucketSuggestion.js')(sequelize, DataTypes,Sequelize)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db