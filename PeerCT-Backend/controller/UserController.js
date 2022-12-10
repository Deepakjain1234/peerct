const model = require("./../models")

const category = model.peerCTCategory;
const product = model.peerCTProduct;
const college = model.peerCTUserCollege;
const user = model.peerCTUser;
const socialMedia = model.peerCTSocialMediaLink;
const {
  Op
} = require("sequelize")
const bcrypt = require('bcrypt')
module.exports.allUser = (req, res) => {
  user.findAll({
    // include:[{model:college,required:true},{model:category,required:true}]
  }).then((data) => {
    return res.json(data)
  }).catch((err) => {
    return res.json(err)
  })
}
// module.exports.allProductsbyid = (req, res) => {
//     product.findAll({where:{category_id:req.params.id},
//     include:[{model:college,required:true},{model:category,required:true}]
//     }).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
// }

module.exports.createUser = async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSalt(5);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  user.create(req.body).then((data) => {
    return res.json(data)
  }).catch((err) => {
    return res.json(err)
  })
}

module.exports.createUserbygoogle = async (req, res) => {
  user.create(req.body).then((data) => {
    return res.json(data)
  }).catch((err) => {
    return res.json(err)
  })
}

module.exports.loginUser = (req, res) => {
  return res.json(req.user, 200);
}

module.exports.deleteUser = (req, res) => {
  user.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    return res.send("Deleted A product successfully")
  }).catch((err) => {
    return res.json(err)
  });
}

module.exports.updateUser = (req, res) => {
  user.update(
    req.body, {
      where: {
        id: req.user.user.id
      }
    }
  ).then((data) => {
    console.log(data)
    return res.send("user updated");
  }).catch((err) => {
    return res.json(err);
  })
}

module.exports.getCollege = (req, res) => {
  college.findOne({
    where: {
      id: req.user.user.college_id
    }
  }).then((data) => {
    return res.json(data)
  }).catch((err) => {
    return res.json(err)
  })

}

module.exports.getProduct = (req, res) => {
  product.findAll({
    where: {
      user_id: req.user.user.id
    }
  }).then((data) => {
    return res.json(data);
  }).catch((err) => {
    return res.json(err);
  })
}

module.exports.AddSocialMediaLink = (req, res) => {
  req.body.user_id = req.user.user.id;
  socialMediaLink.create(req.body).then((data) => {
    return res.json({
      "message": "social media links added succssfully"
    });
  }).catch((err) => {
    return res.status(401).json(err)
  })
}

module.exports.editSocialMediaLink = (req, res) => {
  
  socialMediaLink.create(req.body,{where:{user_id:req.user.user.id}}).then((data) => {
    return res.json({
      "message": "social media links modified successfully"
    });
  }).catch((err) => {
    return res.status(401).json(err)
  })
}

