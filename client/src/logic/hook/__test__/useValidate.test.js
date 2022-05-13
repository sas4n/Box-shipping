import {act, renderHook} from '@testing-library/react-hooks'
import useValidate from '../useValidate'

describe('useValidate test', () => {
    it('should be true if error object is empty', () => {
        const error={}
        const {result} = renderHook(() => useValidate(error))
        expect(result.current.validated).toBe(true)
    })
    it('should be false if error object is not empty', () => {
        const error={emptyNameError: 'name field could not be empty'}
        const {result} = renderHook(() => useValidate(error))
        expect(result.current.validated).toBe(false)
    })
})