const express = require('express')
const controller = require('../../controller/controller')
const router = require('../router')


jest.mock('../../controller/controller.js')

describe('router', () => {
    controller.getAllShippingListsHandler= jest.fn()
    controller.postAddBoxHandler = jest.fn()
    const Router = express.Router()
    it('should call controller.getAllShippingListsHandler if the path is /listboxes', () => {
        
       
        console.log(Router.get())
        Router.get('/listboxes',controller.getAllShippingListsHandler)
        expect(controller.getAllShippingListsHandler).toHaveBeenCalledTimes(1)
    })
    it('should not call the controller.getAllShippingListsHandler if the path is not /listboxes', () => {
        Router.get('/listboxess',controller.getAllShippingListsHandler)
        expect(controller.getAllShippingListsHandler).toHaveBeenCalledTimes(0)
    })
    it('should call the controller.postAddBoxHandler if the path is /addBox' , () => {
        Router.post('/addBox',controller.postAddBoxHandler)
        expect(controller.postAddBoxHandler).toHaveBeenCalledTimes(1)
    })
    it('should not call the controller.postAddBoxHandler if the path is not /addBox' , () => {
        Router.post('/addBoxes',controller.postAddBoxHandler)
        expect(controller.postAddBoxHandler).toHaveBeenCalledTimes(0)
    })

})
