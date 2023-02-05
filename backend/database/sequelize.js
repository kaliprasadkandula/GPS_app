const{Sequelize } = require('sequelize');
const {DATABASE,USERNAME,PASSWORD} = require('../constants')
const sequelize = new Sequelize(`${DATABASE}`, `${USERNAME}`, `${PASSWORD}`,{
    dialect: 'mssql',
    host: 'localhost'
})



module.exports = sequelize;
