const model = require("../models")

const category = model.peerCTCategory;
const product = model.peerCTProduct;
const college = model.peerCTUserCollege;
const user = model.peerCTUser;
const { Op } = require("sequelize")
module.exports.allCollege = (req, res) => {
    college.findAll({
    // include:[{model:college,required:true},{model:category,required:true}]
    }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}

module.exports.createCollege = (req,res) => {
    college.create(req.body).then((data)=>{return res.json(data)}).catch((err)=>{return res.json(err)})
}

module.exports.deleteCollege = (req,res) => {
    college.destroy({where:{id:req.params.id}}).then(()=>{return res.send("removed a college successfully")}).catch((err)=>{return res.json(err)});
}
