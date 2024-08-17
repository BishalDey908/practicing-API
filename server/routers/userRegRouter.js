const Router = require("express")
const userRegController = require("../controllers/userRegController")
const router = Router()

router.post("/",userRegController)

module.exports = router