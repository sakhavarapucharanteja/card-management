const express=require("express");
const asyncHandler = require("express-async-handler");
const User=require("../models/userModel");

const bcrypt=require("bcrypt");

//designation register a user
// @route post /api/users/register
//@access public

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please fill the fields")
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User is already registered with this email")
    }


    //hashed password
    const hashedPassword=await bcrypt.hash(password,10);
    console.log("HashedPassword:",hashedPassword)
    const user= await User.create({
        username,
        email,
        password:hashedPassword,
    });

    console.log(`userCreated: ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }
    else{
        res.status(400);
        throw new Error("user data is not valid")
    }
   
});

const loginUser=asyncHandler(async(req,res)=>{
    res.json({message:"login user"});
})

const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"current user information"});
})

module.exports={registerUser,loginUser,currentUser}