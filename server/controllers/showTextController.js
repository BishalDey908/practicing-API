const textModel = require("../model/textModel")

const showTextController = async(req,res) =>{
    try{
        const data = await textModel.find({})
        return res.status(200).json({"message":"Success to fetch Data","data":data})
    }catch(err){
        return res.status(400).json({"message":"Something went wrong","data":err})
    }
}

module.exports = showTextController