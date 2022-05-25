//import express from 'express'
//import controller from '../controller/controller.js'
const express = require('express')
const controller = require('../controller/controller.js')

const router = express.Router()

router.get('/listboxes', controller.getAllShippingListsHandler)

router.post('/addBox', controller.postAddBoxHandler)

//export default router
module.exports = router