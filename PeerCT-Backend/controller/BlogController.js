const models = require("../models/index")
const { Op } = require("sequelize")

const User = models.peerCTUser
const Blog = models.peerCTBlogs

module.exports.getBlog = (req, res) => {
    Blog.findAll({ include: [{ model: User, required: true }] })
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
}

module.exports.singleBlog = (req, res) => {
    Blog.findAll({
        where: {
            id: req.params.id
        }, include: [{ model: User, required: true }]
    })
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
}

module.exports.searchByTopicAndMentorName = (req, res) => {
    Blog.findAll({
        where: {
            topic: { [Op.substring]: req.query.topic }
        },
        include: {
            model: User,
            where: {
                name: { [Op.substring]: req.query.name }
            }
        }
    }).then(data => { return res.json(data) })
        .catch(err => {
            return res.json(err)
        })
}
