const jwt = require("jsonwebtoken")
const model = require("../models")
const user = model.peerCTUser
const bcrypt = require("bcrypt")
module.exports.login = (req,res)=>{
    user.findOne({where:{email:req.body.email}}).then((data)=>{
        if(data){

            bcrypt.compare(req.body.password,data.password).then((valid)=>{
                delete data["password"];
                console.log(data);
                if(valid){jwt.sign({user:data},process.env.JWT_LOGIN_SECRET_KEY,(err,token)=>{
                    console.log(token)
                    return res.status(200).json({token});
                })}else{
                    return res.status(401).json({message:"Incorrect password entered"})
                }
            })

        }
        else{
            return res.status(401).json({message:"email not found"})
        }

    }).catch((err)=>{
        return res.json(err)

    })
}


module.exports.loginwithemail = (req,res)=>{
    user.findOne({where:{email:req.body.email}}).then((data)=>{
        
     jwt.sign({user:data},process.env.JWT_LOGIN_SECRET_KEY,(err,token)=>{
     return res.status(200).json({token});
    })
    }).catch((err)=>{
        return res.json(err)

    })
}