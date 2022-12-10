const router = require("express").Router()
const BlogController=require("../controller/BlogController")

router.get("/all",BlogController.getBlog)
router.get("/search",BlogController.searchByTopicAndMentorName)
router.get("/:id",BlogController.singleBlog)

module.exports = router
