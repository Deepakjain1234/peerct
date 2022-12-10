const io = require("socket.io")(5000, {
    cors: {
        origin: '*',
    }
});
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const model = require("../models");
const user = model.peerCTUser;
const chatRoom = model.peerCTChatRoom;
const mentorChatRoom = model.peerCTMentorChatRoom;
const chatStore = model.peerCTChatStore;
const mentor = model.peerCTMentor;
const network = model.peerCTMentorNetwork;

const createRoomId = (s1, s2) => {
    if (s1 > s2) {
        return s1 + '@' + s2
    }
    else {
        return s2 + '@' + s1
    }
}

io.on('connection', socket => {
    let userId = null;
    socket.on('accept', (data) => {
        console.log(userId, data)
        let rID = createRoomId(userId, data);
        console.log(rID)
        mentorChatRoom.update(
            { approved: true },
            { where: { roomID: rID } }
        )
        network.create({
            user1: userId,
            user2: data,
        })
    });
    socket.on('reject', (data) => {
        console.log(userId, data)
        let rID = createRoomId(userId, data);
        console.log(rID)
        mentorChatRoom.destroy({
            where: { roomID: rID }
        }).then((a) => {
            console.log(a)
        })
        chatRoom.destroy({
            where: {
                roomID: rID
            }
        }).then((a) => {
            console.log(a)
        })
    })
    try {
        socket.on('join', recieverID => {
            let token = socket.handshake.query.token;
            console.log(token)
            jwt.verify(token, process.env.JWT_LOGIN_SECRET_KEY, (err, authData) => {
                if (err) {
                    return;
                }
                user.findOne({
                    where: {
                        id: authData.user.id
                    }
                }).then(dataCurr => {
                    userId = dataCurr.id;
                    if (dataCurr) {
                        mentor.findOne({
                            where: {
                                user_id: dataCurr.id
                            }
                        }).then(dataMentoru1 => {
                            const furtherOperate = async () => {
                                user.findOne({
                                    where: {
                                        id: recieverID
                                    }
                                }).then(reciever => {
                                    if (dataCurr.id === reciever.id) {
                                        return;
                                    }
                                    let exit = 0;
                                    mentor.findOne({
                                        where: {
                                            user_id: reciever.id
                                        }
                                    }).then(dataMentor => {
                                        if (dataMentor) {
                                            let roomId = createRoomId(dataCurr.id, reciever.id);
                                            chatRoom.findOne({
                                                where: {
                                                    roomID: roomId
                                                }
                                            }).then(data => {
                                                if (!data) {
                                                    chatRoom.create({
                                                        roomID: roomId,
                                                        user1: dataCurr.id,
                                                        user2: reciever.id,
                                                    })
                                                }
                                            })
                                            mentorChatRoom.findOne({
                                                where: {
                                                    roomID: roomId,
                                                },
                                                attributes: ['roomID', 'approved'],
                                            }).then(status => {
                                                console.log(status)
                                                if (status) {
                                                    if (status.approved) {
                                                        let roomID = createRoomId(dataCurr.id, reciever.id);
                                                        chatRoom.findOne({
                                                            where: {
                                                                roomID: roomID
                                                            }
                                                        }).then(room => {
                                                            console.log(room, dataCurr.id, reciever.id)
                                                            if (room) {
                                                                socket.join(roomID);
                                                                chatStore.findAll({
                                                                    where: {
                                                                        roomID: roomID
                                                                    }
                                                                }).then(messages => {
                                                                    socket.emit('last Chats', recieverID, messages)
                                                                })
                                                            }
                                                            else {
                                                                chatRoom.create({
                                                                    roomID: roomID,
                                                                    user1: dataCurr.id,
                                                                    user2: reciever.id
                                                                }).then(room => {
                                                                    socket.join(roomID);
                                                                    socket.emit('user_joined', dataCurr.name);
                                                                });
                                                            }
                                                        });
                                                        exit = 0;
                                                    }
                                                    else {
                                                        exit = 1;
                                                    }
                                                    return;
                                                } else {
                                                    mentorChatRoom.create({
                                                        roomID: roomId,
                                                        approved: false,
                                                    })
                                                    exit = 1;
                                                    return;
                                                }
                                            })
                                        } else {
                                            if (reciever) {
                                                let roomID = createRoomId(dataCurr.id, reciever.id);
                                                chatRoom.findOne({
                                                    where: {
                                                        roomID: roomID
                                                    }
                                                }).then(room => {
                                                    console.log(room, dataCurr.id, reciever.id)
                                                    if (room) {
                                                        socket.join(roomID);
                                                        chatStore.findAll({
                                                            where: {
                                                                roomID: roomID
                                                            }
                                                        }).then(messages => {
                                                            socket.emit('last Chats', recieverID, messages)
                                                        })
                                                    }
                                                    else {
                                                        chatRoom.create({
                                                            roomID: roomID,
                                                            user1: dataCurr.id,
                                                            user2: reciever.id
                                                        }).then(room => {
                                                            socket.join(roomID);
                                                            socket.emit('user_joined', dataCurr.name);
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    })

                                });
                            }
                            if (dataMentoru1) {
                                mentorChatRoom.findOne({
                                    where: {
                                        roomID: createRoomId(dataCurr.id, recieverID)
                                    }
                                }).then(dataMentoru2 => {
                                    if (dataMentoru2 && dataMentoru2.approved === false) {
                                        socket.join(dataMentoru2.roomID);
                                        socket.emit('mentor-approve', recieverID, dataMentoru2.roomID)
                                    } else {
                                        console.log('furtherOperate', dataMentoru2)
                                        furtherOperate();
                                    }
                                })
                            } else {
                                furtherOperate();
                            }
                        })
                    }
                })
            });
        });
    } catch (err) {
        console.log(err)
    }
    socket.on('send_message', (id, message) => {
        let roomID = createRoomId(userId, id);
        mentorChatRoom.findOne({
            where: {
                roomID: roomID
            }
        }).then(data => {
            console.log(data)
            if (data && !data.approved) {
                exit = 1;
                socket.emit('error', 'Mentor has not approved your request yet.');
            } else {
                chatStore.create({
                    user: userId,
                    message: message,
                    roomID: roomID
                }).then((dat) => {
                    socket.to(roomID).emit('recieve', message, userId);
                })
            }
        })

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})
module.exports.chats = (req, res) => {
    let data = []
    chatRoom.findAll({
        where: {
            [Op.or]: [
                { user1: req.user.user.id },
                { user2: req.user.user.id }
            ]
        },
        include: {
            all: true
        }
    }).then(async rooms => {
        let s = rooms.length;
        let isMentor = await mentor.findOne({
            where: {
                user_id: req.user.user.id
            },
            attributes: ['user_id']
        })
        rooms.map(async el => {
            let id = createRoomId(el.user1, el.user2);
            console.log(isMentor)
            let dat = await mentorChatRoom.findOne({
                where: {
                    roomID: id,
                    approved: false
                }
            })
            console.log(dat, isMentor)
            if (dat && isMentor) {
                if (el.user1 == req.user.user.id) {
                    data.push({
                        id: el.user2,
                        name: el.second.name,
                        approved: dat.approved
                    })
                } else {
                    data.push({
                        id: el.user1,
                        name: el.first.name,
                        approved: dat.approved
                    })
                }
            } else {
                if (el.user1 == req.user.user.id) {
                    data.push({
                        id: el.user2,
                        name: el.second.name,
                        approved: true
                    })
                } else {
                    data.push({
                        id: el.user1,
                        name: el.first.name,
                        approved: true
                    })
                }
            }
            s--;
            if (s == 0) {
                res.json(data)
            }
            console.log(data)
        })
    })
}