const model = require("../models")

const category = model.peerCTCategory;
const product = model.peerCTProduct;
const college = model.peerCTUserCollege;
const user = model.peerCTUser;
const { Op } = require("sequelize")
module.exports.allCategories = (req, res) => {
    category.findAll({
    // include:[{model:college,required:true},{model:category,required:true}]
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}


module.exports.createCategory = (req,res) => {
    category.create(req.body).then((data)=>{return res.json(data)}).catch((err)=>{return res.json(err)})
}

module.exports.deleteCategory = (req,res) => {
    category.destroy({where:{id:req.params.id}}).then(()=>{return res.send("Deleted A product successfully")}).catch((err)=>{return res.json(err)});
}

