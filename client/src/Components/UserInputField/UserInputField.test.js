import {screen, render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserInputField  from './UserInputField'
describe('UserInput tests', () => {
    it('should render input text, if the passed type is text', () => {
        render(<UserInputField type="text" />)
        const textfield= screen.getByRole('textbox')
        expect(textfield).toBeInTheDocument()
        expect(textfield).toHaveAttribute('type', 'text')
    })
    it('should render number input field, if passed type is number', () => {
        render(<UserInputField type='number' testId='numberbox' />)
        const numberField = screen.getByTestId('numberbox')
        expect(numberField).toBeInTheDocument()
        expect(numberField).toHaveAttribute('type', 'number')
    })
    it('the onChange function should be called once when typing a single character in text field', () => {
        const mochOnChange = jest.fn()
        render(<UserInputField type='text' onChange={mochOnChange}/>)
        const textfield = screen.getByRole('textbox')
        fireEvent.change(textfield, {target:{value:'a'}})
        expect(mochOnChange).toHaveBeenCalledTimes(1)
    })
    it('the onChange function should be called three times when typing three characters in text field', () => {
        const mochOnChange = jest.fn()
        render(<UserInputField type='text' onChange={mochOnChange}/>)
        const textfield = screen.getByRole('textbox')
        userEvent.type(textfield,'abc')
        expect(mochOnChange).toHaveBeenCalledTimes(3)
    })
    it('textfield should show the value typed in it', () => {
        const mochOnChange = jest.fn()
        render(<UserInputField type='text' onChange={mochOnChange}/>)
        const textfield = screen.getByRole('textbox')
        userEvent.type(textfield,'abc')
        expect(textfield).toHaveValue('abc')
    })
    it('number field should not accept string', () => {
        render(<UserInputField type='number' testId='numberbox'/>)
        const numberField = screen.getByTestId('numberbox')
        userEvent.type(numberField, 'hi')
        expect(numberField).toHaveValue(null)
    })
    it('onChange should be called when user changes the value', () => {
        const mockOnChange = jest.fn()
        render(<UserInputField type='number' testId='numberbox' onChange={mockOnChange} />)
        const numberField = screen.getByTestId('numberbox')
        fireEvent.change(numberField, {target:{value: 1}})
        expect(mockOnChange).toHaveBeenCalledTimes(1)
    })
    it('if a user enters a number into number field, its value should changed to entered value', () => {
        render(<UserInputField type='number' testId='numberbox' />)
        const numberField = screen.getByTestId('numberbox')
        fireEvent.change(numberField, {target: {value: 10}})
        expect(numberField).toHaveValue(10)
    })
})