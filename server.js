const express = require('express');
const { send } = require('express/lib/response');
const app = express();

app.listen(8080, function(){
    console.log('test server')
});

app.get('/admin', function(require, request){
    request.send("test");
});