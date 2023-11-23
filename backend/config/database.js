module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'root',
  DB: 'bucket_suggestion',
  PORT:'8889',
  dialect: 'mysql',
  DB_SOCKET:"/Applications/MAMP/tmp/mysql/mysql.sock",

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}