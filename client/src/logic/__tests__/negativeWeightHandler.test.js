import negativeWeightHandler from "../negativeWeightHandler";


const dispatch = jest.fn()
const action = jest.fn()

describe('negativeWeightHandler', () => {
    it('should not call dispatch function when weight is positive', () => {
        const boxInfo = { weight: 1}
        negativeWeightHandler(boxInfo,dispatch,action)
        expect(dispatch).toHaveBeenCalledTimes(0)
    })
    it('should call dispatch', () => {
        expect.assertions(2)
        const boxInfo = { weight: -1}
        jest.useFakeTimers()
        negativeWeightHandler(boxInfo,dispatch,action)
        expect(dispatch).not.toBeCalled()
        jest.runAllTimers()
        expect(dispatch).toHaveBeenCalledTimes(1)
    })
})