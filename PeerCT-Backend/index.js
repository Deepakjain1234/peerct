const express = require('express')
const morgan = require('morgan')
const sessions = require('express-session');
const cors = require("cors")
const path = require("path");
const dotenv = require("dotenv")

dotenv.config()
const app = express();
const port = 8000;
const ProductRoutes = require("./routes/ProductRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const CollegeRoutes = require("./routes/CollegeRoutes");
const ChatController = require("./controller/ChatController");
const CartRoutes = require("./routes/CartRoutes");
const UserRoutes = require("./routes/UserRoutes");
const TokenRoutes = require("./routes/TokenRoutes");
const ChatRoom = require("./routes/ChatRoom");
const OTPRoutes = require("./routes/OTPRoutes");
const AddressRoutes = require('./routes/AddressRoute');
const MentorRoutes = require("./routes/MentorRoute");
const BlogRoutes = require("./routes/BlogRoute");
const GroupSessionRoute = require("./routes/GroupSessionRoute");
const SupportRoutes = require("./routes/Support");
const NotificationRoutes = require("./routes/Notification");
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(sessions({ secret: 'hhhh', saveUninitialized: true, resave: true }));
app.use("/api/product", ProductRoutes);
app.use("/api/cart", CartRoutes)
app.use("/api/category", CategoryRoutes);
app.use("/api/college", CollegeRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/auth", TokenRoutes);
app.use("/api/address", AddressRoutes);
app.use("/api/OTP", OTPRoutes);
app.use("/api/mentor", MentorRoutes);
app.use("/api/chat", ChatRoom);
app.use("/api/blog", BlogRoutes);
app.use("/api/groupSession", GroupSessionRoute);
app.use("/api/support", SupportRoutes);
app.use("/api/notification", NotificationRoutes);
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        // console.log(req.body)
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

app.get("/api/SocialMediaList", (req, res) => {
    const list = [
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
    ];
    return res.json(list);
})
const model = require("./models")

const company = model.peerCTCompany
app.get("/api/getAllCompany", (req, res) => {
    company.findAll({ attributes: ["id", "name"], order: ["name"] }).then((data) => { return res.status(200).json(data) }).catch((err) => { return res.status(500).json(err) })
})
const services = model.peerCTService
app.get("/api/services", (req, res) => {
    services.findAll({ attributes: ["id", "name"], order: ["name"] }).then((data) => { return res.status(200).json(data); }).catch((err) => { return res.status(500).json(err); });
})

app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const jsSHA = require("jssha");
const request = require('request');

app.post('/payment_gateway/payumoney', (req, res) => {
  req.body.txnid = 'adsfjkhaskfjasdddsehrncdksjfakdlj'
 
  req.body.amount = '343';
  req.body.productinfo = 'deepak';
 
  // req.body.service_phone = '7489041038';
 
  //Here save all the details in pay object 
  const pay = req.body;
  const hashString = 'C5UgFd' //store in in different file
    + '|' + pay.txnid
    + '|' + pay.amount
    + '|' + pay.productinfo
    + '|' + pay.firstname
    + '|' + pay.email
    + '|' + '||||||||||'
    + 'VtJ2cMfmZJ0hmVWtIVJmCDEJl5nLcXZ7' //store in in different file
  const sha = new jsSHA('SHA-512', "TEXT");
  sha.update(hashString);
  //Getting hashed value from sha module
  const hash = sha.getHash("HEX");

   //We have to additionally pass merchant key to API
  //  so remember to include it.
    pay.key = 'C5UgFd' //store in in different file;
  pay.surl = 'https://apiplayground-response.herokuapp.com/';
  pay.furl = 'https://apiplayground-response.herokuapp.com/';
  pay.hash = hash;

 console.log(pay)
  request.post({
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    url: 'https://secure.payu.in/_payment', //Testing url
    form: pay
  }, function (error, httpRes, body) {
    if (error)
      console.log(error)
      // res.send(
      //   {
      //     status: false,
      //     message: error.toString()
      //   }
      // );
    if (httpRes.statusCode === 200) {
      console.log(httpRes);
      res.send(body);
    } else if (httpRes.statusCode >= 300 &&
      httpRes.statusCode <= 400) {
      res.redirect(httpRes.headers.location.toString());
    }
  })
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
