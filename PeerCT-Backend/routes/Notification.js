const NotificationController=require('../controller/NotificationController')
const Router = require("express").Router()

Router.post("/add",NotificationController.createnotification)
Router.get("/all",NotificationController.allNotification)



module.exports=Router