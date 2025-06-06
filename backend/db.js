const mysql = require('mysql2');
const { createConnection } = require('mysql2/promise');




const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost' ,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'ana',
    database: process.env.DB_NAME || 'mydb'
})

db.connect(err => {
    if(err){
        res.status(500).json({
            message:'Nije uspostavljena veza sa bazom ❌', err
        })
    }
    res.status(200).json({
        message: 'Uspesno uspostavljena veza sa bazom 🚀'
    })
})

module.exports = db