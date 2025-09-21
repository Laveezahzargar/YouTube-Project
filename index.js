var express = require("express");
var app = express();
var port = 4000;

app.use(express.json());

require("./Connection/Conn");

const AuthRoutes = require('./Routes/User');

app.use('/auth', AuthRoutes);

app.listen(port, () => { console.log("Our backend project is runnig on port 4000") })