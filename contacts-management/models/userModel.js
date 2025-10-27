const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please add the USername"]
    },
    email:{
        type:String,
        required:[true,"please add the email"],
        unique:[true,"Email address is already taken"]
    },
    password:{
        type:String,
        required:[true,"Please add the password"]
    }
},{
    timestamps:true,
})

module.exports=mongoose.model("user",userSchema)