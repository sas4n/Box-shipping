const database = require('../shipping_model')
const {prepareDatabase, changeDatabasePreparedFlag} = require('../index.js')

jest.mock('../shipping_model.js')

describe('shipping_model', () => {
    const next = jest.fn(res => res)
    const req = {}
    const res = {}
    
    it('should call next() with error relevant to the received error in case of any errors', async() => {
        database.createDatabase.mockRejectedValue('database could not created')
        database.createMultiplierTable.mockResolvedValue('something')
        database.createShippingTable.mockResolvedValue('something else')
        database.insertMultipliers.mockResolvedValue('something else and different')
        await prepareDatabase(req,res,next)
        expect(next).toHaveBeenCalledWith('database could not created')
      //  expect(isDatabasePrepared).toBe(true)
    })
    it('should call next() with error message relevant to createMultiplierTable in case of an error in createMultiplierTable happens', async() =>{
        database.createDatabase.mockResolvedValue('database could not created')
        database.createMultiplierTable.mockRejectedValue('something')
        database.createShippingTable.mockResolvedValue('something else')
        database.insertMultipliers.mockResolvedValue('something else and different')
        await prepareDatabase(req,res,next)
        expect(next).toHaveBeenCalledWith('something')
    })
    it('should call next() without anything if there is no error in database preparation', async() => {
        database.createDatabase.mockResolvedValue('database could not be created')
        database.createMultiplierTable.mockResolvedValue('something')
        database.createShippingTable.mockResolvedValue('something else')
        database.insertMultipliers.mockResolvedValue('something else and different')
        await prepareDatabase(req,res,next)
        expect(next).toHaveBeenCalledWith()
        expect(database.createDatabase).toHaveBeenCalledTimes(1)
    })
    it('should not call any of the async functions on the prepareDatabase after databse and tables are created', async() => {
        database.createDatabase.mockResolvedValue('database could not be created')
        database.createMultiplierTable.mockResolvedValue('something')
        database.createShippingTable.mockResolvedValue('something else')
        database.insertMultipliers.mockResolvedValue('something else and different')
        await prepareDatabase(req,res,next)
        expect(database.createDatabase).toHaveBeenCalledTimes(0)
        expect(database.createMultiplierTable).toHaveBeenCalledTimes(0)
        expect(database.createShippingTable).toHaveBeenCalledTimes(0)
        expect(database.insertMultipliers).toHaveBeenCalledTimes(0)
    })
})