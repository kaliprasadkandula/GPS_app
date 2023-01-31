const {DataTypes} = require('sequelize')
const sequelize = require('../database/sequelize')

const gpsData = sequelize.define('gps_data', {
  
  DeviceId:{
    type:DataTypes.STRING,
    allowNull:false
  },
  DeviceType:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Timestamp:{
    type:DataTypes.STRING,
    allowNull:false
  },
  location:{
    type:DataTypes.STRING,
    allowNull:false
  }

})

module.exports =gpsData