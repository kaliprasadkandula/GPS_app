const express = require('express')
const router = express.Router();
const GPSdata = require('../models/gpsdata')
const bcrypt = require('bcrypt');//lets use it later
const sequelize =require('../database/sequelize')
function getResp(status,message,data){
    return {status:status,message:message,data:data};
}
router.post('/getAll',async  (req, res)=>{
    // if(!sequelize){
    //     console.log(`haiiiiiiiiiiiiiiiiii`)
    // }
    const gpsData = await sequelize
    .query(
        `
        SELECT [DeviceId], [DeviceType], [Timestamp], location
        FROM (
        SELECT [DeviceId], [DeviceType],FORMAT(Timestamp,'dd-MM-yyyy hh:mm:ss') as Timestamp, location,
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


router.post('/percentages',async  (req, res)=>{
    let {DeviceId,DeviceType} = req.body;
  
    const gpsData = await sequelize
    .query(
        `
       
        WITH flight_locations AS (
            SELECT location, COUNT(location) AS location_count
            FROM dummy.dbo.[gps_data]
            WHERE DeviceId='D-1569'
            GROUP BY location
        )
        SELECT location, ROUND(CAST(100.0 * location_count / SUM(location_count) OVER() AS DECIMAL(10, 2)), 2)  AS location_percentage
        FROM flight_locations;
        `
    )
    
   
    if(gpsData){
        res.json(getResp("SUCCESS","found data",gpsData))
    }
    else{
        
        res.json(getResp("FAILED","not found data",null))

           
    }
       
    
      
})


router.post('/locations',async  (req, res)=>{
    let {DeviceId,DeviceType} = req.body;
  
    const gpsData = await sequelize
    .query(
        `
        SELECT location,convert(varchar(20),Timestamp,120) as Timestamp FROM dummy.dbo.[gps_data] where DeviceId ='D-1567' order by Timestamp;
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