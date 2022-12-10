const router = require("express").Router()

const CollegeController = require("../controller/CollegeController")
router.get("/all",CollegeController.allCollege);

router.post("/create",CollegeController.createCollege);

router.delete("/delete/:id",CollegeController.deleteCollege);



module.exports = router