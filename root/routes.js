const express = require("express");
const router = express.Router();
const kakao = require("../routes/auth/kakao");
const naver = require("../routes/auth/naver");
const home = require("../routes/home");
const search = require("../routes/search");
const gallery = require("../routes/gallery");
const personalSite = require("../routes/personalSite");

// kakao login apis
router.get("/auth/kakao", kakao.login);
router.get("/auth/kakao/callback", kakao.callback);

// home page apis
router.get("/home/getRandomProfiles", home.getRandomProfiles);

module.exports = router;