const router = require("express").Router()

const CategoryController = require("../controller/CategoryController")
router.get("/all",CategoryController.allCategories);

router.post("/create",CategoryController.createCategory);

router.delete("/delete/:id",CategoryController.deleteCategory);

// router.get("/search",ProductController.searchProduct);

module.exports = router