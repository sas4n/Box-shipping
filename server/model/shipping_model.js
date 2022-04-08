import mysql from 'mysql'

const database = {}

const databaseName = 'shipping_database'

database.createDatabase = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: process.env.HOST || 'localhost',
            user : process.env.USER,
            password : process.env.PASSWORD,
            port : process.env.DATABASE_PORT || 3306
        })
        const query = `CREATE DATABASE IF NOT EXISTS ${databaseName};`
        connection.query(query, (err, result) => {
            if (err) {
               return reject(err)
            }
            console.log('database created')
            resolve('database is ready')   
            
        })
        connection.end()
    })
}

const connectionPool = mysql.createPool({
    host : process.env.HOST || 'localhost',
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : databaseName,
    port: process.env.DATABASE_PORT || 3306,
    connectionLimit : 15
})

database.createShippingTable = () => {
    return new Promise((resolve, reject) =>{
        const createShippingTableQuery = `CREATE TABLE IF NOT EXISTS shipping ( 
            id int NOT NULL AUTO_INCREMENT,
            receiver_name varchar(40) NOT NULL, 
            weight int NOT NULL,
            color varchar(20) NOT NULL,
            country varchar(30) NOT NULL,
            PRIMARY KEY (id));`
        connectionPool.query(createShippingTableQuery,(err, results) => {
            if(err) return reject(err)
            resolve('shipping table created')
        })

})
}

database.createMultiplierTable = () => {
    return new Promise((resolve, reject) => {
        const createMultiplierTableQuery = `CREATE TABLE IF NOT EXISTS multipliers (
            country_name varchar(25) NOT NULL,
            multiplier float(2,1) NOT NULL,
            PRIMARY KEY (country_name)
        )`
        connectionPool.query(createMultiplierTableQuery, (err, result) => {
            if (err) return reject(err)
            resolve('multipliers table created')
        })
    })
}
export default database