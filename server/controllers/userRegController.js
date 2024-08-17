const bcrypt = require('bcrypt');
const saltRounds = 10;
const userRegModel = require("../model/userRegModel")

const userRegController = async(req,res) =>{
    const{username,password}=req.body
    console.log(req.body)
    try{
        bcrypt.hash(password, saltRounds, async function(err, hash) {
            const storeData = await userRegModel.create({username,password:hash})
            if(err){
                return res.status(200).json({"msg":"failed encrypt password","data":err})
            }
            return res.status(200).json({"msg":"Reg success","data":storeData})
        });
    }catch(err){
        return res.status(400).json({"msg":"failed","data":err})
    }
}

module.exports = userRegController