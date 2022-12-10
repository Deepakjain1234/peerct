const router = require("express").Router()
const AddressController = require("../controller/AddressController")
const TokenVerifier = require("../middleware/AuthenticationMiddleware")

router.get("/",TokenVerifier,AddressController.getAddress);

router.post("/add",TokenVerifier,AddressController.AddAddress);

module.exports = router
