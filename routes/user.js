const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const { loadRegister, registerUser } = require("../controllers/user");
const { upload } = require("../middlewares/uploadfile");



const userRoutes = express();

userRoutes.use(morgan("dev"));
userRoutes.use(bodyParser.json());
userRoutes.use(bodyParser.urlencoded({extended:true}));
userRoutes.get("/register",loadRegister)
userRoutes.post("/register", upload.single("image"), registerUser)

module.exports = {userRoutes}; 