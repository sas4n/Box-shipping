const mysql = require('mysql')
//const connection = require('mysql/lib/Connection.js')
const database = require('../shipping_model')

const mockConnection = jest.fn()
const mockQuery = jest.fn()
jest.mock('mysql',() => ({
    createConnection: jest.fn(),
    createPool: jest.fn()
}))
//jest.mock('mysql/lib/Connection')

describe('shipping_model', () => {
    describe('createDatabase', () => {
        //mysql.createConnection()
       
        it('should create database without error', async() => {
            const query='CREATE DATABASE IF NO EXISTS shipping_database;'
            const connection= {
                query:jest.fn(),
                end: jest.fn()
            }
            mysql.createConnection.mockReturnValue(connection)
            const error={
                errno:2
            }
            const cb = jest.fn((err,result)=>{
                
            })
           // connection.query.mockRejectedValue(2)
            connection.query.mockImplementationOnce((query,(err, result) =>{
                if(query !== 'CREATE DATABASE IF NO EXISTS shipping_database;' ){
                    err= 'some error'
                }
                if(err){
                    Promise.reject(error.errno)
                }
            })
            )
            
            // await database.createDatabase()
          /* mysql.mockConnection.mockImplementationOnce(() => ({
               query: jest.fn()
           }))*/
            //mockQuery()
          // console.log(connection.query+'hi')
           //connection.query.mockResolvedValue()
          //await connection.query.mockImplementationOnce(querry,(err, result) => Promise.resolve('something'))
         // const data = await database.createDatabase()
         // expect(spyOn)
         //await expect(database.createDatabase()).rejects.toBe(2)
        /* try{
             await database.createDatabase()
         }catch(err){
            expect(err.errno).toBe(2)
         }*/
        })
    })
})