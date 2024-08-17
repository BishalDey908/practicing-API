const Router = require("express")
const updateUsernameController = require("../controllers/updateUsernameController")
const router = Router()

router.post("/",updateUsernameController)

module.exports = router