const express= require("express");
const router= express.Router();

const Reg= require("../models/regModel");

router.route("/users").post((req, res)=>{
    const email= req.body.email;
    const Fname= req.body.Fname;
    const Lname= req.body.Lname;
    const password= req.body.password;

    const newReg= new Reg({
        email,
        Fname,
        Lname,
        password
    });
    newReg.save();
})


module.exports= router;