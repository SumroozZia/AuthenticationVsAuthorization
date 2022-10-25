const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name :{
        type: String,
        require: [true,"Name is required"],
        trim : true,
        lowercase: true,
    },
    email:{
        type: String,
        require: [true,"Email is  required"],
        trim : true,
        lowercase: true,

    },
    password:{
        type: String,
        require: [true,"PAssword  is  required"],
        trim : true,
        minlength: [3,"Password is atlest 3 chart"]

    },
    image:{
        type:String,
        require: [true,"image  is  required"],
    },
    isAdmin: {
        type: Number,
        require: [true,"Admin  is  required"],
    },
    isVerify: {
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})