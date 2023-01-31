const express = require('express')
const router = express.Router();
const GPSdata = require('../models/gpsdata')
const bcrypt = require('bcrypt');//lets use it later
function getResp(status,message,data){
    return {status:status,message:message,data:data};
}
router.get('/',async  (req, res)=>{
    let {name,email,password} = req.body;
    const gpsData = await GPSdata.findAll({
        attributes: ['DeviceId', 'DeviceType',"Timestamp",'location']
      });
    
   
    if(gpsData){
        res.json(getResp("SUCCESS","found data",gpsData))
    }
    else{
        
        res.json(getResp("FAILED","not found data",null))

           
    }
       
    
      
})



module.exports =router