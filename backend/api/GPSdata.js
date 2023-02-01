const express = require('express')
const router = express.Router();
const GPSdata = require('../models/gpsdata')
const bcrypt = require('bcrypt');//lets use it later
const sequelize =require('../database/sequelize')
function getResp(status,message,data){
    return {status:status,message:message,data:data};
}
router.get('/',async  (req, res)=>{
    let {name,email,password} = req.body;
    // if(!sequelize){
    //     console.log(`haiiiiiiiiiiiiiiiiii`)
    // }
    const gpsData = await sequelize
    .query(
        `
        SELECT [DeviceId], [DeviceType], [Timestamp], location
        FROM (
          SELECT [DeviceId], [DeviceType], [Timestamp], location,
                 ROW_NUMBER() OVER (PARTITION BY DeviceId ORDER BY [Timestamp] DESC) AS row_num
          FROM dummy.dbo.[gps_data] as gps
        ) AS latest_flights
        WHERE row_num = 1
        `
    )
    
   
    if(gpsData){
        res.json(getResp("SUCCESS","found data",gpsData))
    }
    else{
        
        res.json(getResp("FAILED","not found data",null))

           
    }
       
    
      
})



module.exports =router