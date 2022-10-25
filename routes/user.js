const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const loadRegister = require("../controllers/user");



const userRoutes = express();

userRoutes.use(morgan("dev"));
userRoutes.use(bodyParser.json());
userRoutes.use(bodyParser.urlencoded({extended:true}));

userRoutes.get("/register",loadRegister)

module.exports = {userRoutes};