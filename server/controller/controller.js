const {saveShippingLists, getShippingLists} = require('../model/index.js')
const controller = {}

controller.getAllShippingListsHandler = async(req, res, next) => {
   try{
    const response = await getShippingLists()
    res.status(200)
    res.json(response)
   }catch(err){
       next(err)
   }
}

controller.postAddBoxHandler = async(req, res, next) => {
    try{
        const{
            name, 
            weight, 
            colour:{r,g,b}, 
            country} = req.body;
       
        const response = await saveShippingLists(name, parseInt(weight), r, g, b, country)
        res.status(200)
        res.json(response)
        //res.redirect('/') dont forget to check this after fixing 'get shipping lists'
    }catch(err) {
        next(err)
    }
   
}
//export default controller
module.exports = controller