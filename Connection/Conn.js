

const mongoose = require("mongoose");

// YouTube-backend

mongoose.connect("mongodb://localhost:27017/YouTube-backend")
.then(() => console.log("DB Connection Sucessfull !"))
.catch(error => console.log(error));