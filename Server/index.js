const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000
const mysql = require('mysql');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// const db = mysql.createPool({
const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eshikshan',
})

app.post('/api/login', (req, res) => {
    const Name = req.body.Name;
    const Password = req.body.Password;
    db.getConnection((err, connection) => {
        if (err) throw err;
        connection.query("SELECT * FROM USER where Name = ? and Password = ?", [Name, Password], (err, result) => {
            connection.release();
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong userName/Password" });
            }
        })
    })
})




app.listen(port, () => console.log(`Listen on port ${port}`));