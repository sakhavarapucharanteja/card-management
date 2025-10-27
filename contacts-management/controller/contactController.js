const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
//desgnation for getting contacts
//using get to get contcats
// @access public

const getContact=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts)
});


//desgnation for creating contacts
//using post to post contcats
// @access public

const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is:", req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(404);
        throw new Error("All fields are manditatory");
    }
    const contact= await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact)
});


//desgnation for creating contacts
//using post to post contcats
// @access public

const getContactsForId=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(201).json(contact)
});




//desgnation for updating contacts
//using put to update contcats
// @access public

const updateContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(202).json(updatedContact)
});

//desgnation for deleting contacts
//using delete to delete contcats
// @access public

const deleteContact=asyncHandler(async(req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.status(203).json(contact)
});


module.exports={getContact,createContact,updateContact,deleteContact,getContactsForId}