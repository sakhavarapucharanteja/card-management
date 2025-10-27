const express=require("express");
const router=express();
const {getContact,createContact,updateContact,deleteContact, getContactsForId} =require("../controller/contactController.js")

router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactsForId).put(updateContact).delete(deleteContact);


module.exports=router