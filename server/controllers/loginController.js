const bcrypt = require('bcrypt');
const userRegModel = require("../model/userRegModel")
const jwt = require("jsonwebtoken")

const loginController = async(req,res) =>{
    const {username,password}=req.body
    console.log(username)
    try{
        const checkData = await userRegModel.findOne({username})
        bcrypt.compare(password, checkData.password, async function(err, result) {
            const token = jwt.sign({
                data: username
            },
              process.env.SECRET, 
              { 
                expiresIn: '5m' 
              }
            );
            if(result){
                return res.status(200).json({"msg":"Login Success","data":checkData,"token":token})
            }else{
                return res.status(200).json({"msg":"Login Failed","data":checkData})
            }
        });
        

    }catch(err){
        return res.status(400).json({"msg":"something went wrong","err":err})
    }
}

module.exports = loginController