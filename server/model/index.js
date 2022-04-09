import database from './shipping_model.js'

export const prepareDatabase = async(req, res, next) => {
    await database.createDatabase()
    await database.createShippingTable()
    await database.createMultiplierTable()
    await database.insertMultipliers()
    next()
}

export const getShippingLists = async() => {
    return await database.getShippingLists()
}

export const saveShippingLists = async(data) => {
    return await database.insertDataIntoShippings(data)
}



