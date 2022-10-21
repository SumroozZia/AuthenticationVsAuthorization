const mongoose = require("mongoose");
const {dev} = require(".");

const connectDatabase = async()=>{
try {
    await mongoose.connect(dev.db.url);
    console.log("database is connected");
} catch (error) {
    console.log("database is NoT connected");
    console.log(error);
    process.exit(1);

}

}

module.exports = connectDatabase;