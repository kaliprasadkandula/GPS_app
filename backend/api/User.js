const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt');//lets use it later
function getResp(status,message,data){
    return {status:status,message:message,data:data};
}
router.post('/signup',async  (req, res)=>{
    let {name,email,password} = req.body;
    const user = await User.findOne({ where: { email} });
    
   
    if(user){
        res.json(getResp("FAILED","already a user exist with this email"))
    }
    else{
        
        const newUser = new User({
            name,
            email,
            password
        })
        newUser.save().then((result)=>{
            res.json(getResp("SUCCESS","signup was Successful",result))
        }).catch(err=>{
            console.error(err)
            res.json(getResp("FAILED","signup was not Successful"))
        })
           
    }
       
    
      
})


router.post('/login', async (req, res)=>{
    let {email,password} = req.body;
    const user = await User.findOne({ where: { email,password} });
    
    if(user){
        res.json(getResp("SUCCESS","login was Successful"))
    }
    else{
         res.json(getResp("FAILED","credentials not found/Invalid"))
    }
           
    
})

module.exports =router