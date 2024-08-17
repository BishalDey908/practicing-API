require("dotenv").config()
require("./db")
const express = require('express');
const cors = require("cors")
const fileHandlerRoute = require('./routers/fileHandlerRoute'); // Import the routes
const homeRouter = require("./routers/homeRouter")
const userRegRouter = require("./routers/userRegRouter")
const loginRoute = require("./routers/loginRoute")
const showTextRouter = require("./routers/shoeTextRouter");
const deleteTextRouter = require("./routers/deleteTextRouter");
const updateUsernameRouter = require("./routers/updateUsernameRouter")
const arrayStoreRouter = require("./routers/arrayStoreRouter")

const app = express();
app.use(express.json())
app.use(cors())

// Use file routes
app.use('/upload', fileHandlerRoute);
app.use("/home",homeRouter)
app.use("/reg",userRegRouter)
app.use("/login",loginRoute)
app.use("/show",showTextRouter)
app.use("/delete",deleteTextRouter)
app.use("/updateusername",updateUsernameRouter)
app.use("/array",arrayStoreRouter)

// Route for testing API
app.get('/', (req, res) => {
    res.send('Upload files by POSTing to /upload');
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
