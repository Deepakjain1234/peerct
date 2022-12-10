const router = require("express").Router()
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });
const AuthMiddleware = require("../middleware/AuthenticationMiddleware")

const ProductController = require("../controller/ProductController")
router.get("/all",ProductController.allProducts);

router.post("/create",AuthMiddleware,ProductController.createProduct);

router.delete("/delete/:id",AuthMiddleware,ProductController.deleteProduct);
router.get("/product/:id",AuthMiddleware,ProductController.productbyid);
router.get("/all/:id",ProductController.allProductsbyid);

router.get("/search",ProductController.searchProduct);
router.post("/upload_image",upload.single("file"),ProductController.uploadImage);
module.exports = router