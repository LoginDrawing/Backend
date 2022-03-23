const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + "/public"));

const MongoClient = require('mongodb').MongoClient;

app.set('view engine','ejs');

var db;
MongoClient.connect('mongodb+srv://loginmango:iopiop09!@cluster0.fyeb7.mongodb.net/Cluster0?retryWrites=true&w=majority',function(에러, client){
    //연결 된 후 할 일
    if (에러) return console.log(에러);
    db = client.db('userinfo');

    //데이터베이스에 저장 수동으로 
    // db.collection('login').insertOne({Title : '요청.body.feedtitle', Content : '요청.body.feedcontent', _id : 100} , function(에러,결과){
    //     console.log('저장완료');
    // });

    app.post('/add_kakao',)

    app.listen(8080,function(){
        console.log('listening on 8080')
    });
});

//app.engine('.html', require('ejs').__express);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'html');

app.get('/logindrawing.github.io/',function(request, reply){
    reply.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/home',function(req, res){
    res.render('home.ejs');
});

app.get('/login',function(req,res){
    res.render('login.ejs');
});

//form 을 통해 db에 정보 넣을때 사용
// app.post('/add', function(요청, 응답){
//     db.collection('post_counter').findOne({name : })
// })

// app.get('/login',function(request, reply){
//     reply.sendFile(path.join(__dirname + '/login.html'));
// });

app.get('/user_info',function(req,res){
    res.render('user_info.ejs');
});

app.listen(8000, function(){
    console.log('listening on 8000')
});