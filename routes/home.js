const mysqlConnection = require("../modules/mysql");
const connection = mysqlConnection.connection;

exports.getRandomProfiles = async (req, res) => {
  const query = `SELECT *
    FROM HOSTS
    ORDER BY RAND()
    LIMIT 3;`
  connection.query(query, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).send({result : "DB 접근에 실패했습니다."})
    }
    else {
      res.status(200).send({result : response})
    }
  })
}
