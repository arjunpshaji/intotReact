const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://arjunpshaji:arjun764%40%40@cluster0.3yhl5.mongodb.net/registrationDB")


app.use("/", require("./routes/regRoute"));

app.listen(3001, function(){
    console.log("server started...");
})