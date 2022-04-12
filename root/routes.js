const express = require("express");
const router = express.Router();
const login = require("../routes/login.js");
const home = require("../routes/home.js");
const search = require("../routes/search.js");
const gallery = require("../routes/gallery.js");
const personalSite = require("../routes/personalSite.js");

router.get("/test", login.test);


module.exports = router;
