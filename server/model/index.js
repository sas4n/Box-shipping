import database from './shipping_model.js'

export const prepareDatabase = async(req, res, next) => {
    await database.createDatabase()
    await database.createShippingTable()
    await database.createMultiplierTable()
    await database.insertMultipliers()
    next()
}

export const getShippingLists = () => {
    return database.getShippingLists()
}



