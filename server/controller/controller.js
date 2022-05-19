//import {saveShippingLists, getShippingLists} from '../model/index.js'
const {saveShippingLists, getShippingLists} = require('../model/index.js')
const controller = {}

controller.getALLShippingListsHandler = async(req, res, next) => {
   // console.log('before databse call')
   try{
    const response = await getShippingLists()
    res.status(200)
    res.json(response)
   }catch(err){
       next(err)
   }

   
    /*.then(lists => res.json(lists))
    .catch(err => next(err))*/
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
        console.log(err.message)
        next(err)
    }
   
}
//export default controller
module.exports = controller