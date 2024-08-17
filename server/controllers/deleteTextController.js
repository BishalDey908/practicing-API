const textModel = require("../model/textModel")

const deleteTextController = async(req,res)=>{
    const {_id} = req.body
    try{
        const deleteData = await textModel.findOneAndDelete({_id})
        return res.status(200).json({"msg":"Text Deleted","data":deleteData})
    }catch(err){
        return res.status(400).json({"msg":"Something went wrong","data":err})
    }
}

module.exports = deleteTextController
