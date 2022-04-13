const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const session = require('express-session');
require('dotenv').config();

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use(express.json());  // JSON 형식 수신
app.use(session({ // 세션 사용
  secret: 'aaa',
  resave: true,
  secure: false,
  saveUninitialized:false,
}))
app.use("/", routes);     // express router 미들웨어 사용

app.listen(process.env.PORT, () => {
  console.log("server opened on port " + process.env.PORT)
});
