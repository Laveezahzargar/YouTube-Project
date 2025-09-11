var express = require("express");
var app = express();
var port = 4000;

app.get('/', (req, res) => {
    res.send({
        message: "Hii, we have started our backend project"
    })
})

app.listen(port, () => { console.log("Our backend project is runnig on port 4000") })