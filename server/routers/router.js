import express from 'express'
import controller from '../controller/controller.js'

const router = express.Router()

router.get('/listboxes', controller.getShippingLists)

export default router