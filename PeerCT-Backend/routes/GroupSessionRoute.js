const Router = require("express").Router()

const GroupSessionController = require("../controller/GroupSessionController")
const TokenVerifier = require("../middleware/AuthenticationMiddleware")


Router.get("/all", GroupSessionController.showAll)
Router.get("/search", GroupSessionController.searchByMentorOrTopic)
Router.get("/completedForUser",TokenVerifier, GroupSessionController.getPreviousGroupSessionByUser)
Router.get("/upcomingForUser",TokenVerifier,  GroupSessionController.getUpcomingGroupSessionByUser)
Router.post("/create",TokenVerifier, GroupSessionController.createGroupSession)
Router.get("/upcoming",TokenVerifier,GroupSessionController.getUpcomingGroupSessionByMentor)
Router.get("/completed",TokenVerifier,GroupSessionController.getPreviousGroupSessionByMentor)
Router.put("/update/:id",GroupSessionController.editGroupSession)
Router.get("/single",GroupSessionController.showGroupSessionDetails)
module.exports = Router