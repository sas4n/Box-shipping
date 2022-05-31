const mysql = require('mysql')
//globalThis.Promise = jest.requireActual('promise')
//const connection = require('mysql/lib/Connection.js')
const {database, queryHandler} = require('../shipping_model')
//const{queryHandler} = require('../shipping_model')



jest.mock('mysql', () =>( {
    createConnection: () => ({
        query: jest.fn()
    }),
    createPool: jest.fn()
}))

jest.mock('../shipping_model', () =>({
    ...jest.requireActual('../shipping_model'),
    queryHandler: jest.fn()
}))

describe('shipping_model', () => {
    describe('createDatabase', () => {
        //mysql.createConnection()
       
        it('should create database without error', () => {
            expect.assertions(1)
            const query='CREATE DATABASE IF NOT EXITS shipping_database;'
           /* const connection = mysql.createConnection()
           queryHandler.mockResolvedValue('something')
           connection.query.mockImplementationOnce(query,()=>{queryHandler().then(value=>{
               expect(value).toBe('somethingkkkk')
           })})*/
           debugger
         console.log(database.createDatabase)
         const connection = mysql.createConnection()
        //queryHandler.mockResolvedValue('something')
            connection.query.mockImplementationOnce(query,(err,result)=>{queryHandler.mockResolvedValue(result)})
           // await connection.query.mockResolvedValue('hi')
           database.createDatabase()
           .then(value => {
               expect(value).toBe('something')
           })
           function callback(err, result) {}
           //done()
           // expect(data).toBe('hi')
            
            
          /* mysql.mockConnection.mockImplementationOnce(() => ({
               query: jest.fn()
           }))*/
            //mockQuery()
          // console.log(connection.query+'hi')
           //connection.query.mockResolvedValue()
          //await connection.query.mockImplementationOnce(querry,(err, result) => Promise.resolve('something'))
         // const data = await database.createDatabase()
         // expect(spyOn)
        // return database.createDatabase()
        // expect(hi).toBe('something else')
        /* try{
             await database.createDatabase()
         }catch(err){
            expect(err.errno).toBe(2)
         }*/
        })
    })
})