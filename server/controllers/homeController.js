const homeController = (req,res) =>{
    res.status(200).json({"msg":"Success","data":'WElcome to home'});
}
module.exports = homeController