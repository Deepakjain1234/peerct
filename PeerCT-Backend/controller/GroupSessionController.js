const model = require("../models/index")

const groupSession = model.peerCTGroupSession
const Company = model.peerCTCompany
const Mentor = model.peerCTMentor
const groupSessionOrder = model.peerCTGroupSessionOrder

const { Op } = require("sequelize")

module.exports.showAll = (req, res) => {
    groupSession.findAll({
        include: [{ model: Mentor, required: true, include: [Company] }]
    }).then((data) => res.json(data))
        .catch((err) => res.json(err))
}

module.exports.searchByMentorOrTopic = (req, res) => {
    groupSession.findAll({
        where: {
            topic: {
                [Op.substring]: req.query.topic
            }
        }
        ,
        include: [
            {
                model: Mentor,
                where: {
                    name: {
                        [Op.substring]: req.query.name
                    }
                },
                required: true
            }
        ]
    }).then(
        data => {
            return res.json(data)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.getUpcomingGroupSessionByUser = (req, res) => {
    groupSessionOrder.findAll({
        where: {
            user_id: req.user.user.id,
            
        },
        include: [
            {
                model: groupSession,
                required: true,
                include: [Mentor],
                where: {
                    start_time: { [Op.gte]: new Date().toISOString() }
                }
            }
        ]
    }).then(data => {
        return res.json(data);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getPreviousGroupSessionByUser = (req, res) => {
    groupSessionOrder.findAll({
        where: {
            user_id: req.user.user.id,
        }
        ,
        include: [
            {
                model: groupSession,
                required: true,
                include: [Mentor],
                where: {
                    start_time: { [Op.lt]: new Date().toISOString() }
                }
            }
        ]
    }).then(data => {
        return res.json(data);
    }).catch(err => {
        return res.json(err);
    })



}
module.exports.showGroupSessionDetails = (req, res) => {

    groupSession.findOne({
        where: {
            id: req.query.id

        },
        include: [{ model: Mentor, required: true, include: [Company] }]
    }).then(
        data => {
            return res.json(data)
        })
        .catch(err => {
            return res.json(err)
        })

}
module.exports.createGroupSession = (req, res) => {
    // console.log(req.user.user.peerCTMentor.id)
    req.body.mentor_id = req.user.user.peerCTMentor.id;
    groupSession.create(req.body).then(
        data => {
            return res.json({ message: "Group Session Created", data })
        })
        .catch(err => {
            return res.json(err)
        })
}
module.exports.getUpcomingGroupSessionByMentor = (req, res) => {

    groupSession.findAll({
        where: {
            mentor_id: req.user.user.peerCTMentor.id,
            start_time: { [Op.gte]: new Date().toISOString() }



        },
        order: [
            ['start_time']
        ]
    }).then(data => {
        return res.json(data);
    }).catch(err => {
        return res.status(500).json(err);
    })
}

module.exports.getPreviousGroupSessionByMentor = (req, res) => {
    groupSession.findAll({
        where: {
            mentor_id: req.user.user.peerCTMentor.id,
            start_time: { [Op.lt]: new Date().toISOString() }
        },
        order: [
            ['start_time']
        ]
    }).then(data => {
        return res.json(data);
    }).catch(err => {
        return res.json(err);
    })

}

module.exports.editGroupSession = (req, res) => {

    groupSession.update(req.body, {

        where: {
            id: req.query.id
        },


    }).then((data) => res.json({ message: "Group Session updated successfully." }))
        .catch((err) => res.json(err))



} 