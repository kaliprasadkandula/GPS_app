const{Sequelize } = require('sequelize');

const sequelize = new Sequelize('dummy', 'sa', 'Dhan1234!',{
    dialect: 'mssql',
    host: 'localhost'
})



module.exports = sequelize;
