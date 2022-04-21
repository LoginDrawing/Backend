const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;
const axios = require("axios");
const qs = require("qs");

exports.login = async (req, res) => {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI_KEY}&response_type=code&scope=profile_nickname,profile_image,account_email`;
  //console.log(kakaoAuthURL)
  res.redirect(kakaoAuthURL);
}

exports.callback = async (req, res) => {
  const queryStringBody = (bodyData) => {
    return Object.keys(bodyData)
      .map(k => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
      .join("&")
  }
  try {
    console.log(req.query.code)
    const bodyData = {
      grant_type: 'authorization_code', //특정 스트링
      client_id:process.env.KAKAO_REST_API_KEY,
      client_secret:process.env.KAKAO_CLIENT_SECRET_KEY,
      redirectUri:process.env.KAKAO_REDIRECT_URI_KEY,
      code:req.query.code,
    }

    token = await axios({
      method: 'POST',
      url: 'https://kauth.kakao.com/oauth/token',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:queryStringBody(bodyData)
    })
    console.log(token.data.access_token)
  } catch (err) {
    console.log(err.response.data)
    res.status(500).send(err.data);
    return
  }

  try {
    const bodyData2 = {
      property_keys: [
        'properties.nickname',
        'properties.profile_image',
        'kakao_account.email'
      ]
    }
    user = await axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers:{
        'Authorization': `Bearer ${token.data.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data:bodyData2
    })
    res.status(200).send({
      nickname: user.data.properties.nickname,
      image: user.data.properties.profile_image,
      email: user.data.kakao_account.email
    })
  } catch (err) {
    console.log(err.data);
    res.status(500).send(err.data);
    return
  }
}

exports.info = async (req, res) => {

}
