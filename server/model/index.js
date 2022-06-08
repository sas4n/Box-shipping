const {database} = require('./shipping_model.js')
let isDatabasePrepared = false

const prepareDatabase = async(req, res, next) => {
    try {
        if(!isDatabasePrepared){
             await database.createDatabase()
            await database.createShippingTable()
            await database.createMultiplierTable()
            await database.insertMultipliers()
            isDatabasePrepared = true
        }
        next() 
    }catch(err){
        next(err)
    }
    
}

const getShippingLists = async() => {
    return await database.getShippingLists()
}

const saveShippingLists = async (...data) => {
    return await database.insertDataIntoShippings(data)
}

module.exports = {saveShippingLists,getShippingLists,prepareDatabase}

