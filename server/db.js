const mongoose = require("mongoose")
mongoose.connect(process.env.DB_Connection)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log("Error connect to DB",err)
})