const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbjfd_sep24'
})

db.connect()

function eksekusi(script_sql_dan_data) { 
    return new Promise ( ( resolve,reject)=> { 
        db.query(script_sql_dan_data, function(errorSql, hasil){
            if(errorSql) {
                reject(errorSql)
            }else { 
                resolve(hasil)
            }
        })
    })
}

module.exports = { 
    db, eksekusi
}