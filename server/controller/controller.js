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
        console.log('it works')
        const{
            name, 
            weight, 
            colour:{r,g,b}, 
            country} = req.body;
            console.log(name, weight,r,g,b,country)
            //const data= ['sasanwew', 12, 25, 20, 22, 'China']
        //something(req).then((data) => res.json(data))
       
        const response = await saveShippingLists(name, parseInt(weight), r, g, b, country)
        res.status(200).json(response)
        //res.redirect('/') dont forget to check this after fixing 'get shipping lists'
    }catch(err) {
        console.log(err.message)
        next(err)
    }
   
}

const something =  (req) => {
    return new Promise((resolve, reject) => {
        const {name, weight, colour, country} = req.body;
        console.log(name, weight, colour, country)
        resolve(name)
    })
}

export default controller