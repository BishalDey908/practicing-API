const userRegModel = require("../model/userRegModel")

const updateUsernameController = async(req,res) =>{
    const {_id,username} = req.body
    try{
       const userNameUpdated = await userRegModel.findOneAndUpdate({_id,username})
       res.status(200).json({"msg":"Username updated","data":userNameUpdated})
    }catch(err){
        res.status(400).json({"msg":"Something went wrong","data":err})
    }
}

module.exports = updateUsernameController