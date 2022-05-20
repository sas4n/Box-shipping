//import saveShippingLists from './controller'
//import * as hi from '../../model/index'
//import controller from '../controller'
const controller = require('../controller.js')
const {saveShippingLists, getShippingLists} = require('../../model/index')
//import {jest} from '@jest/globals'
//jest.unmock('../controller.js')
jest.mock('../../model/index.js')
//const controller = jest.requireActual('../controller')
//jest.mock('controller')
//import * as model from '../../model/index'
describe('controller tests', () => {
    const req = {
        body: {
            name: 'fake_name', 
            weight: '2', 
            colour:{
                r:2,
                g:2,
                b:2
            }, 
            country:'fake_country'
        }
    }
    const res = {
        status: jest.fn(status=>status),
        json: jest.fn(res=>res)

    }
    const next = jest.fn(res => res)
    describe('postAddBoxHandler', () => {
       
        it('should send status code of 200 and the response', async() => {
            saveShippingLists.mockImplementationOnce(() => Promise.resolve(2))
            await controller.postAddBoxHandler(req,res,next)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith(2)
        })
        it('should pass the error to next() in case of any errors', async() => {
            const error= new Error('some error')
            saveShippingLists.mockImplementationOnce(() => Promise.reject(error))
            await controller.postAddBoxHandler(req, res, next)
            expect(next).toHaveBeenCalledWith(error)
        })
    })
    describe('getAllShippingListsHandler', () => {
        const fakeBoxesInfo = [
            {id: 1, name: 'sasan', weight:'1', colour_r:25, color_g:25, colour_b:25,country:'something'},
            {id: 2, name: 'Sasan', weight:'10', colour_r:250, color_g:205, colour_b:205,country:'something else'}
        ]
        it('should return boxes data passed to it together with a satus code of 200',async () => {
            getShippingLists.mockResolvedValue(fakeBoxesInfo)
           // controller.getALLShippingListsHandler(req,res,next).then(() => {
           //     expect(res.json).toHaveBeenCalledWith(fakeBoxesInfo)
            //})
            await controller.getALLShippingListsHandler(req,res,next)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.json).toHaveBeenCalledWith(fakeBoxesInfo)
            
        })
        it('should pass the error to next in case of any errors', async() => {
            const error = new Error('some error')
           // getShippingLists.mockImplementationOnce(() => Promise.reject(error))
           getShippingLists.mockRejectedValue(error)
            try{
                await controller.getALLShippingListsHandler(req,res,next)
            }catch(err){
                expect(next).toHaveBeenCalledWith(err)
            }
            expect(next).toHaveBeenCalledWith(error)
           
            
        })
    })
})