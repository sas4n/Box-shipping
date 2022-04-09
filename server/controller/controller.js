import {getShippingLists} from '../model'
const controller = {}

controller.getShippingLists = (req, res) => {
    getShippingLists()
    .then(lists => res.json(lists))
}

export default controller