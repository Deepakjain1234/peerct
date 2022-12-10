const jwt = require("jsonwebtoken");
const model = require("../models");

const user = model.peerCTUser;
const college = model.peerCTUserCollege;
const Mentor = model.peerCTMentor;
module.exports = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') { // Split at the space 
        const bearer = bearerHeader.split(' '); // Get token from array 
        const bearerToken = bearer[1]; // Set the token 
        req.token = bearerToken; // Next middleware 
        jwt.verify(req.token, process.env.JWT_LOGIN_SECRET_KEY, (err, authData) => {
            if (err) {
                return res.json({ message: "Unauthenticated" }, 403);
            } else {

                user.findOne(
                    { where: { id: authData.user.id }, include: [{ model: college },{model: Mentor }] })
                    .then((data) => {
                        req.user = { user: data };
                        next()
                    }).catch((err) => {
                        console.log(err)
                        return res.status(500).json(err)
                    })

            }
        })
    }
    else {
        return res.status(403).json({ message: "unauthenticated" })
    }
}