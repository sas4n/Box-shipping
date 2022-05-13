import {renderHook, act} from '@testing-library/react-hooks'
import useValidationError from '../useValidationError'

describe('useValidationError tests', () => {
    const assertError = (boxInfo, expectedErrors) => {
        const {result} = renderHook(() => useValidationError(boxInfo))
        act(() => {
            result.current.doValidation(boxInfo)
        })

        expect(result.current.errors).toEqual(expectedErrors)
    }

    it('error should be empty if name and weight are not empty and weight is not negative and colour is not blue', () => {
        const boxInfo = {
            name: 'foo',
            weight: 1,
            colour: {
                b:20
            }
        }
        assertError(boxInfo,{})
    })
    it('error should only contain name error if name is empty and weight is not empty and negative and colour is not blue', () => {
        const boxInfo = {
            name: '',
            weight: 1,
            colour: {
                b:20
            }
        }
        assertError(boxInfo, { emptyNameError : 'name could not be empty'})
    })
    it('error should only contain weight error if weight is empty and weight is not negative name is not empty and colour is not blue', () => {
        const boxInfo = {
            name: 'foo',
            weight: '',
            colour: {
                b:20
            }
        }
        assertError(boxInfo, {emptyWeightError : 'weight could not be empty'})
    })
    it('error should only contain weight negative error if weight and name are not empty and weight is negative and colour is not blue', () => {
        const boxInfo = {
            name: 'foo',
            weight: -2,
            colour: {
                b:20
            }
        }
        assertError(boxInfo, { negativeWeightError : 'weight could not be negative'})
    })
    it('error should only contain blue colour error if weight and name are not empty and weight is not negative and colour is close to blue', () => {
        const boxInfo = {
            name: 'foo',
            weight: 2,
            colour: {
                b:70
            }
        }
        assertError(boxInfo, { blueColourError : 'blue Colour could not be used'})
    })
    it('error should only contain negative weight and empty errors if name is empty and weight is negative and colour is not blue', () => {
        const boxInfo = {
            name: '',
            weight: -2,
            colour: {
                b:20
            }
        }
        assertError(boxInfo, 
            {emptyNameError : 'name could not be empty' ,
            negativeWeightError : 'weight could not be negative'
            })
    })
    it('error should contain empty name and weight and blue colour errors, if name and weight are empty and clour is close to blue', () => {
        const boxInfo = {
            name: '',
            weight: '',
            colour: {
                b:80
            }
        }
        assertError(boxInfo, 
            {
                emptyNameError : 'name could not be empty',
                emptyWeightError : 'weight could not be empty',
                blueColourError : 'blue Colour could not be used'
            })
    })
})