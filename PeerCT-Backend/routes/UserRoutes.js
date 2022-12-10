const router = require("express").Router()

const TokenVerifier = require("../middleware/AuthenticationMiddleware")

const UserController = require("../controller/UserController")
router.get("/all",UserController.allUser);

router.post("/register",UserController.createUser);

router.post("/registerbygoogle",UserController.createUserbygoogle);

router.delete("/delete/:id",TokenVerifier,UserController.deleteUser);

router.get("/",TokenVerifier,UserController.loginUser);

router.put("/update",TokenVerifier,UserController.updateUser);

router.get("/college",TokenVerifier,UserController.getCollege);

router.get("/product",TokenVerifier,UserController.getProduct);

router.post("/socialMediaLink/add",TokenVerifier,UserController.AddSocialMediaLink);

router.put("/socialMediaLink/edit",TokenVerifier,UserController.editSocialMediaLink);




module.exports = router
