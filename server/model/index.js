import database from './shipping_model'

export const prepareDatabase = async(req, res, next) => {
    await database.createDatabase()
    database.createShippingTable()
    .then(() => {database.createMultiplierTable()})
    next()
}



