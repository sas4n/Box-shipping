import {onInputChange, onColourChange, onNegativeWeightEntered} from '../stateActionCreators'
import * as actionType from '../actionType'

describe('stateActionCreator', () => {
    describe('onInputChange', () => {
        it('should return an expected object', () => {
            const event = { someEvent : 'someEvent'}
            const expectedAction = {type: actionType.INPUT_CHANGED, payload: event}
            const actualAction = onInputChange(event)
            expect(expectedAction).toEqual(actualAction)
        })
    })
    describe('onColourChange', () => {
        it('should return an expected object', () => {
            const event = { someEvent : 'someEvent'}
            const expectedAction = {type: actionType.COLOUR_CHANGED, payload: event}
            const actualAction = onColourChange(event)
            expect(expectedAction).toEqual(actualAction)
        })
    })
    describe('onNegativeWeightEntered', () => {
        it('should return an expected object', () => {
            const expectedAction = {type: actionType.NEGATIVE_WEIGHT_ENTERED}
            const actualAction = onNegativeWeightEntered()
            expect(expectedAction).toEqual(actualAction)
        })
    })
})