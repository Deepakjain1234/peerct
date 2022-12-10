const model = require("./../models")
const multer = require("multer");

const category = model.peerCTCategory;
const product = model.peerCTProduct;
const college = model.peerCTUserCollege;
const user = model.peerCTUser;
const { Op } = require("sequelize")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });
module.exports.allProducts = (req, res) => {
    product.findAll({
        include: [{ model: college, required: true }, { model: category, required: true }]
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}
module.exports.allProductsbyid = (req, res) => {
    product.findAll({
        where: { category_id: req.params.id, college_id: req.query.college_id },
        include: [{ model: college, required: true }, { model: category, required: true }]
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}

module.exports.createProduct = (req, res) => {
    product.create(req.body).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}

module.exports.deleteProduct = (req, res) => {
    product.destroy({ where: { id: req.params.id } }).then(() => { return res.send("Deleted A product successfully") }).catch((err) => { return res.json(err) });
}
module.exports.productbyid = (req, res) => {
    product.findOne({ where: { id: req.params.id } }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) });
}

module.exports.searchProduct = (req, res) => {
    product.findAll({
        where: {
            name: {
                [Op.like]: `%${req.query.search}%`
            }, college_id: req.query.college_id
        }
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) });
}

module.exports.filterProduct = (req, res) => {
    product.findAll({
        where: {
            type: {
                [Op.like]: `%${req.query.type}%`
            }
        }
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) });

}


module.exports.Productbycollege = (req, res) => {
    product.findAll({ where: { college_id: req.query.college_id } }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) });
}

module.exports.uploadImage = (req,res) => {
    try {
        return res.status(200).json("File uploded successfully");
      } catch (error) {
        console.error(error);
      }
}