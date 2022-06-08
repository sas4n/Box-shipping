const mysql = require('mysql')
const {database, queryHandler,poolQueryHandler} = require('../shipping_model')



jest.mock('mysql', () =>( {
    createConnection: () => ({
        query: jest.fn(),
        end: jest.fn
    }),
    createPool: jest.fn()
}))

/*jest.mock('../shipping_model', () =>({
    ...jest.requireActual('../shipping_model'),
    queryHandler: jest.fn()
}))*/



describe('shipping_model', () => {
    describe('queryHandler', () =>{
        it('should resolves the serverStatus if error is null', async() =>{
            const err = null
            const result = { serverStatus : 200}
            const data = await queryHandler(err,result)
            expect(data).toBe(200)
        })
        it('should reject with error code if there is some error', async() =>{
            const err = {code: 5}
            const result = { serverStatus : 500}
            await expect(queryHandler(err,result)).rejects.toBe(5)
        })
    })
    describe('poolQueryHandler', () =>{
        it('should resolve with result object if error is null', async() => {
            const err = null
            const result = { data: 'some data'}
            await expect(poolQueryHandler(err,result)).resolves.toEqual(result)
        })
        it('should reject with error object in xase of any error', async() => {
            const err = {err: 'some error'}
            const result = { data: 'some data'}
            await expect(poolQueryHandler(err,result)).rejects.toEqual(err)

        })
    })




    //mocking mysql still doesnt work so I just keep it here since I have to work on it
    describe('createDatabase', () => {
        //mysql.createConnection()
       
        it('should create database without error', async() => {
           // expect.assertions(1)
            const query='CREATE DATABASE IF NOT EXITS shipping_database;'
           
           //debugger
         console.log(database.createDatabase)
         const connection = mysql.createConnection()
        //queryHandler.mockResolvedValue('something')
            connection.query.mockImplementationOnce((query, callback)=>{callback(null, 'database created')})
           // await connection.query.mockResolvedValue('hi')
           //database.createDatabase()
           //done()
           // expect(data).toBe('hi')
        // expect(await database.createDatabase()).toBe('hi')
          /* try{
            const st = await database.createDatabase()
            expect(st).toBe('hi')
           }catch(err){
               expect(err).toEqual('database created')
           }*/
           
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