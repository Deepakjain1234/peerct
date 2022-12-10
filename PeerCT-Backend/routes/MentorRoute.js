const Router = require("express").Router()

const MentorController = require("../controller/MentorController")
const TokenVerifier = require("../middleware/AuthenticationMiddleware")

Router.get("/all",MentorController.showMentors)
Router.get("/single",MentorController.showSingleMentors)
Router.put("/update/:id",MentorController.editData)
Router.get("/serviceData",MentorController.getServiceByMentor)
Router.get("/search",MentorController.searchMentor)
Router.get("/serviceFilter",MentorController.filterMentorBasedOnService)
Router.get("/domainFilter",MentorController.filterMentorBasedOnDomain)
Router.post("/create",TokenVerifier,MentorController.createMentor)
Router.post("/createSession",TokenVerifier,MentorController.createOneToOneSession)
Router.get("/serviceDetailByUser/old",TokenVerifier,MentorController.OldOnetoOneSessionByUser)
Router.get("/serviceDetailByUser/new",TokenVerifier,MentorController.UpcomingOnetoOneSessionByUser)
Router.get("/serviceDetailByMentor/old",TokenVerifier,MentorController.OldOnetoOneSessionByMentor)
Router.get("/serviceDetailByMentor/upcoming",TokenVerifier,MentorController.UpcomingOnetoOneSessionByMentor)
Router.post('/network',TokenVerifier,MentorController.getMentorsNetwork)
Router.get('/availableSession',MentorController.availableTimeSlots)
Router.get('/getMentorProfile',TokenVerifier,MentorController.getMentorByUser)
Router.post("/availableTime/add",TokenVerifier,MentorController.addAvailableTime)
Router.put("/availableTime/edit",TokenVerifier,MentorController.editAvailableTime)
Router.post("/unavailableDate/choose",TokenVerifier,MentorController.chooseUnavailableDate)
Router.delete("/unavailableDate/remove",TokenVerifier,MentorController.removeUnavailableDate)

module.exports = Router