//import { query } from 'express'
//import mysql from 'mysql'
const mysql = require('mysql')
//import { MULTIPLIERS } from './multiplier_constants.js'
const {MULTIPLIERS} = require('./multiplier_constants.js')

const database = {}

const databaseName = 'shipping_database'

database.createDatabase = () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: process.env.HOST || 'localhost',
            user : process.env.USER || 'root',
            password : process.env.PASSWORD || 'root',
            port : process.env.DATABASE_PORT || 3306
        })
        const query = `CREATE DATABASE IF NOT EXISTS ${databaseName};`
        connection.query(query, (err, result) => {
            if (err) {
               return reject(new Error('error in creating database'))
            }
            console.log('database created')
            resolve('database is ready')   
            
        })
        connection.end()
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
    console.log('create shipping table')
    const createShippingTableQuery = `CREATE TABLE IF NOT EXISTS shipping ( 
        id int NOT NULL AUTO_INCREMENT,
        receiver_name varchar(40) NOT NULL, 
        weight int NOT NULL,
        color_r int NOT NULL,
        color_g int NOT NULL,
        color_b int NOT NULL,
        country_name varchar(30) NOT NULL,
        PRIMARY KEY (id));`
    const error = 'error in creating shipping list table'
    return databaseHandler(createShippingTableQuery, error)
}

database.createMultiplierTable = () => {
    console.log("createMultiplierTable")
    const createMultiplierTableQuery = `CREATE TABLE IF NOT EXISTS multipliers (
        country_name varchar(25) NOT NULL,
        multiplier float(2,1) NOT NULL,
        PRIMARY KEY (country_name)
    )`
    const error = 'error in creating multiplier table'
    return databaseHandler(createMultiplierTableQuery, error)
}

database.getShippingLists = () => {
    console.log('getShippingLists')
    const query = `SELECT s.id, s.receiver_name, s.weight, s.color_r, s.color_g, s.color_b, weight * m.multiplier AS shipping_cost
    FROM 
    shipping s, multipliers m
    WHERE 
    s.country_name = m.country_name `
    const error = 'error in getting all data from database'
    return databaseHandler(query, error)
}

database.insertMultipliers = () => {
    console.log('insertMultipliers')
    const query = `INSERT IGNORE INTO multipliers (country_name, multiplier) VALUES ?`
    const error = 'error in inserting into multiplier table'
    return databaseHandler(query, MULTIPLIERS, error) 
}

database.insertDataIntoShippings = (data) => {
    //console.log( data )
    console.log('insert data intoshipping')
    const query = `INSERT IGNORE INTO shipping (receiver_name, weight, color_r, color_g, color_b, country_name) VALUES 
    (?,?,?,?,?,?)`
    //return databaseHandler(query, data)
   return new Promise((resolve, reject) => {
    connectionPool.query(query, data ,(err, result) => {
        if (err) return reject(new Error('error in inserting data into shipping table'))
        console.log(result.affectedRows)
        resolve(result.affectedRows)
    })
})
}

const databaseHandler = (query, values,error) => {
    return new Promise((resolve, reject) => {
        connectionPool.query(query, [values], (err, result) => {
            if (err) return reject(new Error(error))
            console.log(result)
            console.log('calleed')
            resolve(result)
        })
    })
}
//export default database
module.exports = database