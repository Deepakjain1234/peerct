const models = require("../models/index")

const address = models.peerCTAddress;


module.exports.getAddress = (req, res) => {
    address.findAll({
        where: {
            user_id: req.user.user.id
        }
    })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}

module.exports.AddAddress = (req, res) => {
    req.body.user_id = req.user.user.id;
    address.create(req.body)
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}
