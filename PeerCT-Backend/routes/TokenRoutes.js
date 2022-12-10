const Router = require("express").Router()
const TokenGeneratorController = require("../controller/TokenGeneratorController")
Router.post("/login",TokenGeneratorController.login);
Router.post("/loginbygoogle",TokenGeneratorController.loginwithemail);

module.exports = Router
