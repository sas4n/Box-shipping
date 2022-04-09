import express from 'express'
import controller from '../controller/controller.js'

const router = express.Router()

router.get('/listboxes', controller.getALLShippingListsHandler)

router.post('/addBox', controller.postAddBoxHandler)

export default router