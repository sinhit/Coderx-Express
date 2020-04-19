var express = require('express');
var app = express();
var port = 3000;
app.listen(port);

app.get('/', function(req,res){
    res.write('i love you');
    res.end();
});