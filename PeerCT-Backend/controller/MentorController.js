const models = require("../models/index")
const Scheduler = require('../Utils/GmeetScheduler');

const {
    Op
} = require("sequelize")
const Mentor = models.peerCTMentor
console.log(Object.keys(models))

const Company = models.peerCTCompany
const Experience = models.peerCTExperience
const Service = models.peerCTService
const OneToOneSession = models.peerCTOneToOneSessionOrder
const ServiceDetail = models.peerCTMentorService
const Expertise = models.peerCTExpertise
const User = models.peerCTUser
const network = models.peerCTMentorNetwork
const socialMediaLink = models.peerCTSocialMediaLink
const calender = models.peerCTCalender
const unavailableDate = models.peerCTUnavailableDates

module.exports.showMentors = (req, res) => {
    Mentor.findAll({
        include: [{
            model: Company,
        },
        {
            model: User,
            attributes: ["id", "name", "email"]
        }
        ]
    }).then((data) => res.json(data))
        .catch((err) => res.json(err))
}


module.exports.showSingleMentors = (req, res) => {
    console.log(req.query)
    Mentor.findOne({
        where: {
            id: Number(req.query.id)
        },
        include: [{
            model: Company,
            required: false,
            attributes: ['name']
        },
        {
            model: Experience,
            required: false,
            attributes: ['description', 'start_date', 'end_date'],
            include: {
                model: Company,
                attributes: ['id', 'name'],
            }
        },
        {
            model: Expertise,
            required: false,
            attributes: ['id', 'expertise'],
        },
        {
            model: User,
            include: [{
                model: socialMediaLink,
                required: false,
                attributes: [
                    "linkedin",
                    "github",
                    "twitter",
                    "insta",
                    "behance",
                    "dribble",
                    "medium",
                    "youtube",
                    "codechef",
                    "codeforces",
                    "leetcode",
                    "topcoder",
                    "gfg",
                    "facebook",
                    "codepen"
                ]
            }]
        }
        ]


    }).then((data) => {
        console.log(data);
        res.json(data)
    })
        .catch((err) => {
            console.log(err);
            res.json(err)
        })

}

module.exports.editData = (req, res) => {
    try {
        Mentor.update(req.body, {

            where: {
                id: req.user.user.perrCTMentor.id
            },


        }).then((data) => res.json({
            message: "Details updated successfully."
        }))
            .catch((err) => res.json(err))

    } catch (e) {
        res.status(401).json({
            "message": "Not Authorized"
        })
    }

}

module.exports.searchMentor = (req, res) => {
    console.log(req.query)
    Mentor.findAll({
        where: {
            [Op.or]: [{
                name: {
                    [Op.substring]: req.query.name
                },
                role: {
                    [Op.substring]: req.query.role
                }
            }]
        },
        include: [{
            model: Company,
            where: {
                name: {
                    [Op.substring]: req.query.company
                }
            }
        }]
    }).then(data => {
        return res.json(data)
    })
        .catch(err => {
            console.log(err);
            return res.json(err)
        })
}
module.exports.filterMentorBasedOnService = (req, res) => {
    Service.findAll({
        where: {
            name: req.query.servicename
        },
        include: [{
            model: Mentor,
            required: true,
            include: [Company]
        }]
    }).then(data => {
        return res.json(data)
    })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.filterMentorBasedOnDomain = (req, res) => {
    Mentor.findAll({
        where: {
            domain: {
                [Op.substring]: req.query.domain
            }
        },
        include: [{
            model: Company,
            required: true
        }]
    }).then(data => {
        return res.json(data)
    })
        .catch(err => {
            return res.json(err)
        })

}
module.exports.createMentor = (req, res) => {
    req.body.user_id = req.user.user.id;
    console.log(req.user.user)
    Mentor.create(req.body).then((data) => {
        return res.json(data)
    }).catch((err) => {
        return res.json(err)
    })
}

const convertToMyFormat = (date) => {
    let hrs = Number(date.split(":")[0]);
    let min = Number(date.split(":")[1]);
    return hrs * 60 + min;
}

const convertToHumanFormat = (date) => {
    let hrs = Math.floor(date / 60);
    let min = date % 60;
    if (min.toString().length == 1) {
        min = "0" + min;
    }
    return hrs + ":" + min;
}
module.exports.createOneToOneSession = async (req, res) => {
    req.body.user_id = req.user.user.id;
    let mentorID = req.body.mentor_id;
    let userMail = await User.findOne({
        where: {
            id: req.user.user.id
        },
        attributes: ["email"]
    })
    let mentorMail = await Mentor.findOne({
        where: {
            id: mentorID
        },
        attributes: [],
        include: [{
            model: User,
            attributes: ["email"]
        }]
    })
    const info = {
        mail1: userMail.email,
        mail2: mentorMail.peerCTUser.email,
    }
    console.log(info)
    let startTime = new Date(req.body.start_date);
    startTime.setHours(Number(req.body.start_time.split(":")[0]))
    startTime.setMinutes(Number(req.body.start_time.split(":")[1]))
    let endTime = new Date(startTime);
    let duration = convertToMyFormat(req.body.start_time);
    duration = convertToHumanFormat(duration + req.body.duration);
    endTime.setHours(Number(duration.split(":")[0]))
    endTime.setMinutes(Number(duration.split(":")[1]))
    req.body.start_time = startTime;
    req.body.end_time = endTime;
    req.body.session_date = (new Date(req.body.start_date)).toISOString().split("T")[0];
    delete req.body.start_date
    console.log(req.body)
    OneToOneSession.create(req.body).then(async (data) => {
        let sc = await Scheduler({ dd: startTime.getDate(), mm: startTime.getMonth(), yyyy: startTime.getFullYear(), hr: startTime.getHours(), min: startTime.getMinutes() }, req.body.duration, 'One to One Meetings', info)
        return res.json([data, "Session Scheduled", sc])
    }).catch((err) => {
        return res.json(err)
    })
}

module.exports.getServiceByMentor = (req, res) => {

    ServiceDetail.findOne({
        where: {
            mentor_id: req.query.mentor_id,
            id: req.query.service_id
        },
        include: [{
            model: Service,
            attributes: ['name'],
            required: false
        }]

    })
        .then(data => {
            console.log(data);
            return res.json(data)
        }).catch(err => {
            console.log(err);
            return res.json(err)
        })
}


module.exports.availableTimeSlots = async (req, res) => {
    let mentorId = Number(req.query.mentor_id);
    let duration = Number(req.query.duration);
    let timeSet = new Set()
    if ((new Date(req.query.session_date)).getDate() < (new Date()).getDate()) {
        return res.json([])
    }
    try {
        console.log(req.query)
        const occupiedTimeSlots = await OneToOneSession.findAll({
            where: {
                mentor_id: mentorId,
                session_date: req.query.session_date
            }
        })
        const mentor = await Mentor.findOne({
            where: {
                id: mentorId
            }
        })
        console.log(mentor)
        let start = convertToMyFormat(mentor.start_time);
        let end = convertToMyFormat(mentor.end_time);
        console.log(start, end)
        for (let i = start; i < end; i += duration) {
            if (i + duration <= end) {
                timeSet.add(i)
            }
        }
        console.log(timeSet, occupiedTimeSlots)
        occupiedTimeSlots.forEach(({
            duration,
            start_time
        }) => {
            start_time = (new Date(start_time)).getHours() + ':' + (new Date(start_time)).getMinutes()
            let startTime = convertToMyFormat(start_time);
            let endTime = startTime + duration;
            console.log(start_time, startTime, endTime, duration)
            for (let i = startTime; i < endTime; i += 15) {
                timeSet.delete(i)
            }
        })
        let slots = Array.from(timeSet).map(convertToHumanFormat)
        res.json(slots)
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}

module.exports.OldOnetoOneSessionByUser = (req, res) => {
    OneToOneSession.findAll({
        where: {
            user_id: req.user.user.id,
            start_time: {
                [Op.lt]: new Date().toISOString()
            },

        },
        include: [{
            model: Mentor,
            required: true,
            attributes: ["name"]
        },
        {
            model: ServiceDetail,
            required: true,
            include: [{
                model: Service,
                attributes: ["name"]
            }]

        }
        ]
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        return res.json(err)
    })
}

module.exports.UpcomingOnetoOneSessionByUser = (req, res) => {
    OneToOneSession.findAll({
        where: {
            user_id: req.user.user.id,
            start_time: {
                [Op.gte]: new Date().toISOString()
            },

        },
        include: [{
            model: Mentor,
            required: true,
            attributes: ["name"]
        },
        {
            model: ServiceDetail,
            required: true,
            include: [{
                model: Service,
                attributes: ["name"]
            }]

        }
        ]
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        return res.json(err)
    })
}

module.exports.getMentorByUser = (req, res) => {
    Mentor.findOne({
        where: {
            user_id: req.user.user.id
        }
    }).then((data) => res.json(data)).catch((err) => res.json(err))
}

module.exports.OldOnetoOneSessionByMentor = (req, res) => {
    OneToOneSession.findAll({
        where: {
            mentor_id: req.user.user.peerCTMentor.id,
            start_time: {
                [Op.lt]: new Date().toISOString()
            },

        },
        include: [{
            model: User,
            required: true,
            attributes: ["name"]
        },
        {
            model: ServiceDetail,
            required: true,
            include: [{
                model: Service,
                attributes: ["name"]
            }]

        }
        ]
    }).then(data => {
        return res.json(data)
    }).catch(err => {
        return res.json(err)
    })
}

module.exports.UpcomingOnetoOneSessionByMentor = (req, res) => {
    try {
        const a1 = req.user.user.peerCTMentor.id;
        OneToOneSession.findAll({
            where: {
                mentor_id: req.user.user.peerCTMentor.id,
                start_time: {
                    [Op.gte]: new Date().toISOString()
                },

            },
            include: [{
                model: User,
                required: true,
                attributes: ["name"]
            },
            {
                model: ServiceDetail,
                required: true,
                include: [{
                    model: Service,
                    attributes: ["name"]
                }]

            }
            ]
        }).then(data => {
            return res.json(data)
        }).catch(err => {
            return res.json(err)
        })
    } catch (error) {
        return res.status(401).json("Not authorised for this action")
    }

}


module.exports.getMentorsNetwork = async (req, res) => {
    let id = req.user.user.id;
    console.log(id)
    let mentors = await network.findAll({
        where: {
            [Op.or]: [{ user2: id },{ user1: id }]
        },
        include: [{
            model: User,
            attributes: ["name", "email", "id"]
        }]
    })
    res.json(mentors)
    console.log(mentors[0])
}

module.exports.addAvailableTime = async (req, res)=>{
    try {
        req.body.mentor_id = req.user.user.peerCTMentor.id
        const data = await calender.create(req.body)

        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports.editAvailableTime = async (req, res)=>{
    try {
        req.body.mentor_id = req.user.user.peerCTMentor.id
        const data = await calender.update(req.body,{where: {mentor_id : req.user.user.peerCTMentor.id}})

        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports.chooseUnavailableDate = async (req, res) => {
    try {
        req.body.mentor_id = req.user.user.peerCTMentor.id
        const data  = await unavailableDate.create(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports.removeUnavailableDate = async (req, res) => {
    try {
        req.body.mentor_id = req.user.user.peerCTMentor.id
        const data  = await unavailableDate.destroy({where: {date:req.body.date}})
        return res.status(200).json({"message":"date removed successfully"})
    } catch (error) {
        return res.status(500).json(error)
    }
}