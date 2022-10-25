const express = require("express");

const {dev} = require("./config");
const connectDatabase = require("./config/db");
const { clientError,serverError } = require("./controllers/error");


const app = express();

app.set("view engine", "ejs");


app.listen(dev.app.port, async()=>{
    console.log(`Server is runing `)
    await connectDatabase();
} )

app.get("/",(req,res)=>{
    res.send("test is working")
})
app.get("/test",(req,res)=>{
    res.render("test")
})

app.use(clientError);
app.use(serverError);