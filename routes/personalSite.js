const mysqlConnection = require("../modules/mysql");
const connection = mysqlConnection.connection;

exports.getTimelineData = async (req, res) => {
    const { id } = req.query ;
    let query = `SELECT * FROM drawing.timeline WHERE fk_host_id = ${id}`;

    connection.query(query, (err, response) => {
        if (err) {
            console.log(err);
            res.status(500).send({ result: "DB 접근에 실패했습니다." })
        }
        else {
            res.status(200).send({result: response})
        }
    })
}
