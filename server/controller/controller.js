import {getShippingLists} from '../model/index.js'
const controller = {}

controller.getShippingLists = (req, res) => {
    getShippingLists()
    .then(lists => res.json(lists))
}

export default controller