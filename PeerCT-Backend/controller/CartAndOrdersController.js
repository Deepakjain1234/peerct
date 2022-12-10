const model = require("../models")

const Order = model.peerCTOrder;
const product = model.peerCTProduct;
const user = model.peerCTUser;

module.exports.showitemincarts = (req, res) => {
    Order.findAll(
        {
            where: {
                sold: false,
                user_id: req.user.user.id
            },
            include: [
                {
                    model: product
                },
                {
                    model: user
                }
            ]
        }).then((data) => {
            return res.json(data);
        }).catch((err) => {
            return res.json(err);
        })
}

module.exports.addtocart = (req,res)=>{
    req.body.user_id = req.user.user.id;
    Order.create(req.body).then((data)=>{return res.send(data)}).catch((err)=>{return res.json(err,500)})
}

module.exports.removefromcart = (req,res) => {
    Order.destroy({where:{user_id: req.user.user.id,product_id: req.body.product_id}}).then(()=>{return res.send("Removed from cart successfully")}).catch((err)=>{return res.json(err)});
}