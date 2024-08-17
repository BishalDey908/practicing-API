const Router = require("express")
const showTextController = require("../controllers/showTextController")
const router = Router()

router.get("/",showTextController)

module.exports = router