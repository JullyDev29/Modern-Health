const express = require('expresss');

const app = express();

app.get('/Home', function (req, res){

    res.sendFile(__dirname + "html\indexFinal.html");
};)