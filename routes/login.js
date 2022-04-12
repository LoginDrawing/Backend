//const mysqlConnection = require("../../modules/mysql");
//const connection = mysqlConnection.connection;

exports.test = async (req, res) => {
  console.log('test called');
  res.send({ result: 'test' });
}
