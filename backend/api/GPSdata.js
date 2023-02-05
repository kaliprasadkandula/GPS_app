const express = require('express')
const router = express.Router();
// const bcrypt = require('bcrypt');
const sequelize =require('../database/sequelize')
const {DATABASE,GPS_Table}=require('../constants')
function getResp(status,message,data){
    return {status:status,message:message,data:data};
}
router.post('/getAll',async  (req, res)=>{

    const gpsData = await sequelize
    .query(
        `
        SELECT [DeviceId], [DeviceType], [Timestamp], location
        FROM (
        SELECT [DeviceId], [DeviceType],FORMAT(Timestamp,'dd-MM-yyyy hh:mm:ss') as Timestamp, location,
                ROW_NUMBER() OVER (PARTITION BY DeviceId ORDER BY [Timestamp] DESC) AS row_num
        FROM ${DATABASE}.dbo.${GPS_Table} as gps
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


router.get('/percentages/:id',async  (req, res)=>{
    let DeviceId = req.params.id;
    const gpsData = await sequelize
    .query(
        `
        WITH flight_locations AS (
            SELECT location, COUNT(location) AS location_count
            FROM ${DATABASE}.dbo.${GPS_Table}
            WHERE DeviceId='${DeviceId}'
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


router.get('/locations/:id',async  (req, res)=>{
    let DeviceId = req.params.id;
  
    const gpsData = await sequelize
    .query(
        `
        SELECT convert(varchar(20),Timestamp,120) as Timestamp,location as Location FROM ${DATABASE}.dbo.${GPS_Table} where DeviceId ='${DeviceId}' order by Timestamp desc;
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