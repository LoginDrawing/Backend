const express = require("express"); 
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const router = express.Router()

/* 사용할 DB 쓰시면 됩니다...
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "ex",
});
*/

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// 혼을 갈아넣은 API 형식입니다. DB에 맞춰서 사용하세요~
// API 수정하거나 추가되면 이 형식 맞추셔서 이용하시면 됩니당.
app.get("/login"), (req, res)=>{
    const user = "select * from usertable"
    connection.query(user, (err, result)=>{
        res.send(user);
    })
}

app.post("/register"), (req, res)=>{
    const name = req.body.name //이런식으로 정보 맞춰서 생성
    const pw = req.body.pw //이런식으로 정보 맞춰서 생성

    const sqlQuery = "insert into ~"
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
}

app.get(`/profile/${id}`, (req, res)=>{
    const sqlQuery = "select * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.patch(`/profile/edit/${id}`, (req, res)=>{
    const sqlQuery = "update * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.get('/home', (req, res)=>{
    const sqlQuery = "select * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.get('/home/post', (req, res)=>{
    const sqlQuery = "select * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.get(`/home/post/${id}`, (req, res)=>{
    const sqlQuery = "select * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post('/home/post/write', (req, res)=>{
    const sqlQuery = "insert into * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.patch(`/home/post/edit/${id}`, (req, res)=>{
    const sqlQuery = "update * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.get(`/home/timeline/${id}`, (req, res)=>{
    const sqlQuery = "select * from ~;";
    connection.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

export default router