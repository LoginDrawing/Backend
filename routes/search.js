const mysqlConnection = require("../modules/mysql");
const connection = mysqlConnection.connection;

exports.getSearchData = async (req, res) => {
  const { gender, residence, birth, death, name } = req.body;
  let query = 'SELECT * FROM drawing.deceased ';
  let tail = [];

  if (gender !== undefined) {
    tail.push(`\`gender\` = "${gender}" `);
  }if (residence !== undefined) {
    tail.push(`\`residence\` = "${residence}" `);
  }if (birth !== undefined) {
    tail.push(`\`birth\` = "${birth}" `);
  }if (death !== undefined) {
    tail.push(`\`death\` = "${death}" `);
  }if (name !== undefined) {
    tail.push(`\`name\` = "${name}" `);
  }
  if (tail.length !== 0) {
    query += 'WHERE ' + tail.join(' AND ');
  }
  console.log(query)

  connection.query(query, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).send({result : "DB 접근에 실패했습니다."})
    }
    else {
      res.status(200).send({ result: response })
    }
  })
}
