const router = require("express").Router();
const CartController = require("../controller/CartAndOrdersController")
const TokenVerifier = require("../middleware/AuthenticationMiddleware")


router.get("/show",TokenVerifier,CartController.showitemincarts);

router.post("/add",TokenVerifier,CartController.addtocart);

router.delete("/remove",TokenVerifier,CartController.removefromcart);

module.exports = router