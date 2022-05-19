//import saveShippingLists from './controller'
//import * as hi from '../../model/index'
//import controller from '../controller'
const controller = require('../controller.js')
//import {jest} from '@jest/globals'
//jest.unmock('../controller.js')
//const controller = jest.requireActual('../controller')
jest.mock('controller')
//import * as model from '../../model/index'
describe('controller tests', () => {
    describe('postAddBoxHandler', () => {
        it('should send status code of 200 and the response', async() => {
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
               // json: jest.fn(json=>json)

            }

           // const next = jest.fn()
            const{
                name, 
                weight, 
                colour:{r,g,b}, 
                country} = req.body;
              //  jest.mock.saveShippingLists
           //await  saveShippingLists.mockImplementationOnce(name, parseInt(weight), r, g, b, country)
          //model.saveShippingLists.mockImplementationOnce(()=> false)
          // console.log(saveShippingLists)
             // const reeeeeeee= await saveShippingLists(name, parseInt(weight), r, g, b, country)
             // console.log(reeeeeeee)
            // saveShippingLists.mockImplementationOnce(()=> {Promise.reject({error: 'error'})})

            await controller.postAddBoxHandler(req,res,next)
           // expect(saveShippingLists).toHaveBeenCalledTimes(1)
            expect(res.status).toHaveBeenCalledWith(200)
            expect(saveShippingLists()).toBe(false)
        })
    })
})