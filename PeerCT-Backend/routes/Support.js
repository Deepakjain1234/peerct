const SupportController=require('../controller/SupportController')
const Router = require("express").Router()

Router.post("/add",SupportController.createSupport)

// Router.post("/verify",OTPController.verifyOTP)

module.exports=Router