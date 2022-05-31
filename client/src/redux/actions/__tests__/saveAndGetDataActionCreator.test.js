import {addBox,fetchAllBoxLists} from '../index'
import {WaitingForResponse,saveBoxInfo,getBoxLists,errorReceived} from '../saveAndGetDataActionCreators'
import * as actionType from '../actionType'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as api from '../../../api'
const middlewares = [thunk]

jest.mock('../../../api')

const mockStore = configureStore(middlewares)
const store = mockStore({})

describe('saveAndGetDataActionCreator', () => {
    beforeEach(() =>{
        store.clearActions()
    })
    describe('addBox', () => {
        it('should dispatch WaitingForResponse and SaveBoxInfo in case of no error received from server', async() => {
            const boxInfo = {}
            api.sendSaveBoxInfoRequest.mockResolvedValue('something')
            await store.dispatch(addBox(boxInfo))
            expect(store.getActions().length).toBe(2)
            expect(store.getActions()[0]).toEqual(WaitingForResponse())
            expect(store.getActions()[1]).toEqual(saveBoxInfo())
        })
        it('should dispatch waitForResponse and errorReceived if resceived error from server', async () => {
            const boxInfo = {}
            api.sendSaveBoxInfoRequest.mockRejectedValue('some error')
            await store.dispatch(addBox(boxInfo))
            expect(store.getActions().length).toBe(2)
            expect(store.getActions()[0]).toEqual(WaitingForResponse())
            expect(store.getActions()[1]).toEqual(errorReceived())
        })
    })
    describe('fetchAllBoxLists', () => {
        it('should dispatch WaitingForResponse and getBoxLists in case of no errors occuring', async() => {
            const boxInfo = {
                receiver_name: 'sasan',
                weight: 1,
                colour_r: 24,
                colour_g: 24,
                colour_b: 24,
                shipping_cost: 50
            }
            api.sendGetBoxListsRequest.mockResolvedValue(boxInfo)
            await store.dispatch(fetchAllBoxLists())
            expect(store.getActions().length).toBe(2)
            expect(store.getActions()[0]).toEqual(WaitingForResponse())
            expect(store.getActions()[1]).toEqual(getBoxLists())
        })
        it('should dispatch WaitingForResponse and errorReceived when receiving error from server', async () => {
            api.sendGetBoxListsRequest.mockRejectedValue('some error')
            await store.dispatch(fetchAllBoxLists())
            expect(store.getActions().length).toBe(2)
            expect(store.getActions()[0]).toEqual(WaitingForResponse())
            expect(store.getActions()[1]).toEqual(errorReceived())
        })
    })
    describe('WaitingForResponse', () => {
        it('should return an expected object', () => {
            const expectedAction = {type: actionType.WAITING_FOR_RESPONSE}
            const actualAction = WaitingForResponse()
            expect(expectedAction).toEqual(actualAction)
        })
    })
    describe('saveBoxInfo', () => {
        it('should return an expected object', () => {
            const boxInfo = {someInfo: 'some info'}
            const expectedAction = {type: actionType.SAVE_BOX_INFO_SUCCESSFULLY,payload: boxInfo}
            const actualAction = saveBoxInfo(boxInfo)
            expect(expectedAction).toEqual(actualAction)
        })
    })
    describe('getBoxLists', () => {
        it('should return an expected object', () => {
            const shippingList = [{someInfo: 'some info'}, {someOtherInfo: 'some other info'}]
            const expectedAction = {type: actionType.GET_BOX_LIST_SUCCESSFULLY, payload: shippingList}
            const actualAction = getBoxLists(shippingList)
            expect(expectedAction).toEqual(actualAction)
        })
    })
    describe('errorReceived', () => {
        it('should return an expected object', () => {
            const error = {error: 'some error'}
            const expectedAction = {type: actionType.ERROR_RECEIVED, payload: error}
            const actualAction = errorReceived(error)
            expect(expectedAction).toEqual(actualAction)
        })
    })
})
