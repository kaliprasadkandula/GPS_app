const {DataTypes} = require('sequelize')
const sequelize = require('../database/sequelize')

const user = sequelize.define('User', {
  id:{
    type:DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
})

module.exports =user