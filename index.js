const express = require("express");

const {dev} = require("./config");
const connectDatabase = require("./config/db");
const { clientError,serverError } = require("./controllers/error");


const app = express();



app.listen(dev.app.port, async()=>{
    console.log(`Server is runing `)
    await connectDatabase();
} )

app.get("/",(req,res)=>{
    res.send("test is working")
})

app.use(clientError);
app.use(serverError);