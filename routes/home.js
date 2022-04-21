const mysqlConnection = require("../modules/mysql");
const connection = mysqlConnection.connection;

exports.getRandomProfiles = async (req, res) => {
  const query = `SELECT *
    FROM drawing.HOSTS
    ORDER BY RAND()
    LIMIT 3;`
  connection.query(query, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).send({result : "DB 접근에 실패했습니다."})
    }
    else {
      if (response.length < 3) {
        res.status(206).send({result : response})
      }
      else {
        res.status(200).send({result : response})
      }
    }
  })
}
