const Router = require("express")
const homeController = require("../controllers/homeController")
const auth = require("../middleware/auth")
const router = Router()

router.get("/",auth,homeController)

module.exports = router