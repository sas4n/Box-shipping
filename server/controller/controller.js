import {getShippingLists, saveShippingLists} from '../model/index.js'
const controller = {}

controller.getALLShippingListsHandler = (req, res, next) => {
    console.log('before databse call')
    getShippingLists()
    .then(lists => res.json(lists))
    .catch(err => next(err))
}

controller.postAddBoxHandler = async(req, res, next) => {
    try{
        const[receiver_name, weight, color, country_name] =req.body;
        const response = await saveShippingLists(receiver_name, weight, color, country_name)
        res.render(303, '/addBox')
    }catch(err) {
        next(err)
    }
   
}

export default controller