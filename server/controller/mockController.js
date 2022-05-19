//import {jest} from '@jest/globals'
const mockSaveShippingLists = jest.fn()
jest.mock('../model/index', () => {mockSaveShippingLists})
export default mockSaveShippingLists