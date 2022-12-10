
const model = require("./../models")
const support = model.peerctsupport;


module.exports.createSupport = (req, res) => {
  support.create(req.body).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}