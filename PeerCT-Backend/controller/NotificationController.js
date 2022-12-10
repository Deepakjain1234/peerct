
const model = require("../models")
const notification = model.notification;


module.exports.createnotification = (req, res) => {
  notification.create(req.body).then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}
module.exports.allNotification = (req, res) => {
    notification.findAll().then((data) => { return res.json(data) }).catch((err) => { return res.json(err) })
}