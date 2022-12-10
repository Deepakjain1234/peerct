const router = require("express").Router()
const TokenVerification = require("../middleware/AuthenticationMiddleware")

router.use(TokenVerification)
const ChatController = require("../controller/ChatController")
router.post("/", ChatController.chats);

module.exports = router