import {screen, render} from '@testing-library/react'
import ValidationErrorMsg from './ValidationErrorMsg'

describe('ValidationErrorMsg tests', () => {
    it('should render error message', () => {
        render(<ValidationErrorMsg role='error'/>)
        const errorMsg = screen.getByRole('error')
        expect(errorMsg).toBeInTheDocument()
    })
    it('if error is showable, the error passed to it should be shown', () => {
        render(<ValidationErrorMsg role='error' showable={true}>error</ValidationErrorMsg>)
        const errorMsg = screen.getByRole('error')
        expect(errorMsg).toHaveTextContent('error')
    })
    it('if error is not showable, the error passed to it should not be shown', () => {
        render(<ValidationErrorMsg role='error' showable={false}>error</ValidationErrorMsg>)
        const errorMsg = screen.getByRole('error')
        expect(errorMsg).toHaveTextContent('')
    })
})