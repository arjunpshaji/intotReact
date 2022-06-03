const mongoose= require("mongoose");

const regSchema= {
    email: String,
    Fname: String,
    Lname: String,
    password: String

}

const Reg= mongoose.model("Reg", regSchema);
module.exports= Reg;