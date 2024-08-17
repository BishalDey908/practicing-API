const Router = require("express")
const deleteTextController = require("../controllers/deleteTextController")
const router = Router()

router.post("/",deleteTextController)

module.exports = router