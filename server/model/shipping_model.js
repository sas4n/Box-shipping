//import { query } from 'express'
//import mysql from 'mysql'
const mysql = require('mysql')
//import { MULTIPLIERS } from './multiplier_constants.js'
const {MULTIPLIERS} = require('./multiplier_constants.js')

const database = {}

const databaseName = 'shipping_database30'


const connection = mysql.createConnection({
    host: process.argv[2] || 'localhost',
    user : process.argv[3] || 'root',
    password : process.argv[4] || 'root',
    port : process.argv[5] || 3306
})

const queryHandler = (err, result) => {
    return new Promise((resolve, reject) => {
        if(err){
            console.log(err)
            reject(err.code)
        }else{
            console.log('queryHandler')
            resolve(result.serverStatus)
            connection.end()
        }
    })
}

const poolQueryHandler = (err, result) => {
    return new Promise((resolve, reject) => {
        if(err){
            reject(err)
        }else{
            resolve(result)
        }
    })
}

database.createDatabase = async() => {
        return new Promise((resolve, reject) => {
                const query = `CREATE DATABASE IF NOT EXISTS ${databaseName};`
                //console.log(connection)
                connection.query(query,(err,result) => {queryHandler(err,result)
                    .then(res=>{
                        console.log('it shouldnt be called')
                        resolve(res)})
                    .catch(err=>reject(err))})    
               // connection.end() we have to remove this to inside the callback fucntion, otherwise we get error as it will close the connection before query exectes  
            })
}

const connectionPool = mysql.createPool({
    host : process.env.HOST || 'localhost',
    user : process.env.USER || 'root',
    password : process.env.PASSWORD || 'root',
    database : databaseName,
    port: process.env.DATABASE_PORT || 3306,
    connectionLimit : 15
})


database.createShippingTable = () => {
    const createShippingTableQuery = `CREATE TABLE IF NOT EXISTS shipping ( 
        id int NOT NULL AUTO_INCREMENT,
        receiver_name varchar(40) NOT NULL, 
        weight int NOT NULL,
        color_r int NOT NULL,
        color_g int NOT NULL,
        color_b int NOT NULL,
        country_name varchar(30) NOT NULL,
        PRIMARY KEY (id));`
    return databaseHandler(createShippingTableQuery)
}

database.createMultiplierTable = () => {
    console.log("createMultiplierTable")
    const createMultiplierTableQuery = `CREATE TABLE IF NOT EXISTS multipliers (
        country_name varchar(25) NOT NULL,
        multiplier float(2,1) NOT NULL,
        PRIMARY KEY (country_name)
    )`
    return databaseHandler(createMultiplierTableQuery)
}

database.getShippingLists = () => {
    console.log('getShippingLists')
    const query = `SELECT s.id, s.receiver_name, s.weight, s.color_r, s.color_g, s.color_b, weight * m.multiplier AS shipping_cost
    FROM 
    shipping s, multipliers m
    WHERE 
    s.country_name = m.country_name `
    return databaseHandler(query)
}

database.insertMultipliers = () => {
    const query = `INSERT IGNORE INTO multipliers (country_name, multiplier) VALUES ?`
    return databaseHandler(query, MULTIPLIERS) 
}

database.insertDataIntoShippings = (data) => {
    
    const query = `INSERT IGNORE INTO shipping (receiver_name, weight, color_r, color_g, color_b, country_name) VALUES 
    (?,?,?,?,?,?)`
    //return databaseHandler(query, data)
   return new Promise((resolve, reject) => {
    connectionPool.query(query, data ,(err, result) => {
        poolQueryHandler(err, result)
        .then(result => resolve(result))
        .catch(error => reject(error))
    }
        //if (err) return reject(new Error('error in inserting data into shipping table'))
        //console.log(result.affectedRows)
        //resolve(result.affectedRows)
    //})
)
})
}

const databaseHandler = (query, values) => {
    console.log('database handler called')
    return new Promise((resolve, reject) => {
        connectionPool.query(query, [values], (err, result) => {
          poolQueryHandler(err, result)
          .then(result => resolve(result))
          .catch(error => reject(error))
        })
    })
}
//export default database
module.exports = {
    database,queryHandler,poolQueryHandler
}
