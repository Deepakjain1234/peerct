const OTPController = require("../controller/OTPcontroller")
const Router = require("express").Router()

Router.post("/request",OTPController.requestOTP)

Router.post("/verify",OTPController.verifyOTP)

module.exports=Router