//import database from './shipping_model.js'
const database = require('./shipping_model.js')
let isDatabasePrepared = false

const prepareDatabase = async(req, res, next) => {
    if(!isDatabasePrepared){
        await database.createDatabase()
        await database.createShippingTable()
        await database.createMultiplierTable()
        await database.insertMultipliers()
        isDatabasePrepared = true
    }
    next()
}

const getShippingLists = async() => {
    return await database.getShippingLists()
}

const processTheDataBeforeInsertingIntoDatabsae = (data) => {
    //const dataToBeInserted = [data.name, data.weight, data.]
}

const saveShippingLists = async (...data) => {
    return await database.insertDataIntoShippings(data)
}

module.exports = {saveShippingLists,getShippingLists,prepareDatabase}

