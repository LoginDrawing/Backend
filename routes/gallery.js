const mysqlConnection = require("../modules/mysql");
const connection = mysqlConnection.connection;

exports.getGalleryData = async (req, res) => {
    const galleryId = req.query.id;

    const query = `SELECT name, profile_image FROM drawing.deceased WHERE gallery = ${galleryId}`;
    connection.query(query, (err, response) => {
        if (err) {
            console.log(err);
            res.status(500).send({ result: "DB 접근에 실패했습니다." })
        }
        else {
            res.status(200).send({ result: response })
        }
    })
}
