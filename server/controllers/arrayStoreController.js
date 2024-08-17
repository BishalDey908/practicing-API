let arr =[]
const arrayStoreController = (req,res) =>{
    const {data} =req.body
    try{
        if(arr){
            arr.push(req.body)
            res.status(200).json({msg:"store data access",data:arr})
        }else{
            res.status(400).json({msg:"something went wrong",data:arr})
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = arrayStoreController