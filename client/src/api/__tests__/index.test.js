import axios from "axios";
import {sendSaveBoxInfoRequest, sendGetBoxListsRequest} from '../index'

jest.mock('axios')

describe('api request test', () => {
    describe('sendSaveBoxInfoRequest', () => {
        it('should be resolve if no error happens', async() => {
            const boxInfo = {}
            axios.post.mockImplementationOnce(()=> Promise.resolve('something'))
            const res = await sendSaveBoxInfoRequest(boxInfo)
            expect(res).toBe('something')
        })
        it('should be rejected if any error happens', async() => {
            const boxInfo = {}
            axios.post.mockImplementationOnce(()=> Promise.reject('something'))
            await expect(sendSaveBoxInfoRequest(boxInfo)).rejects.toBe('something')
        })
    })
    describe('sendGetBoxListsRequest', () => {
        it('should be rejected if any error happens', async() => {
            expect.assertions(1)
            const error = new Error('some error')
            axios.get.mockRejectedValue(error)
            await expect(sendGetBoxListsRequest()).rejects.toEqual(error)
        })
        it('should be resolved if no error happens', async() => {
            expect.assertions(1)
            const data = {id: 1, receiver_name: 'sara', weight: 1, color_r: 0, color_g: 0,shipping_cost:1.3}
            axios.get.mockResolvedValue(data)
            await expect(sendGetBoxListsRequest()).resolves.toEqual(data)
        })
    })
})