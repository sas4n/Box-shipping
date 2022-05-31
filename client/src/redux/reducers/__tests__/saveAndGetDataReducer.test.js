import reducer from "../saveAndGetDataReducer";
import { ERROR_RECEIVED, 
    SAVE_BOX_INFO_SUCCESSFULLY,
    WAITING_FOR_RESPONSE,
    GET_BOX_LIST_SUCCESSFULLY } from '../../actions/actionType'

describe('reducer', () => {
    const initialState = {
        loading: false,
        boxes: [],
        error:''
    }
    it('should return the correct state for Waiting_for_response action and initial state shouldnt change', () => {
        const action = {type:WAITING_FOR_RESPONSE}
        const expectedNextState = {loading: true, boxes: [], error:''}
        const resultFromReducer = reducer(initialState, action)
        expect(resultFromReducer).toEqual(expectedNextState)
        expect(initialState).toEqual({
            loading: false,
            boxes: [],
            error:''
        })
    })
    it('should return the correct state for saveBoxInfo action', () => {
        const action = {type:SAVE_BOX_INFO_SUCCESSFULLY}
        const expectedNextState = {loading: false, boxes: [], error:''}
        const actualNextState = reducer(initialState, action)
        expect(actualNextState).toEqual(expectedNextState)
    })
    it('should return the correct state for getBoxLists action', () => {
        const boxesInfo= [{info:'box1'}, {info:'box2'}, {info:'box3'}]
        const action = {type: GET_BOX_LIST_SUCCESSFULLY, payload: boxesInfo}
        const expectedNextState = {loading: false, boxes: action.payload, error:''}
        const actualNextState = reducer(initialState, action)
        expect(actualNextState).toEqual(expectedNextState)
    })
    it('should return the correct state for error_received action', () => {
        const error = 'some error'
        const action = {type: ERROR_RECEIVED, payload: error}
        const expectedNextState = {loading: false,boxes: [],error:'some error'}
        const actualNextState = reducer(initialState, action)
        expect(actualNextState).toEqual(expectedNextState)
        expect(initialState).toEqual({
            loading: false,
            boxes: [],
            error:''
        })
    })
    it('should return the current state for any other types of action', () => {
        const action = {type: 'some other action'}
        const expectedNextState = {loading:false, boxes: [], error:''}
        const actualNextState = reducer(initialState, action)
        expect(actualNextState).toEqual(expectedNextState)
    })
})