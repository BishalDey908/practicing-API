const Router = require("express")
const arrayStoreController = require("../controllers/arrayStoreController")
const router = Router()

router.post("/",arrayStoreController)

module.exports = router