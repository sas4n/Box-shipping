import {screen, render, fireEvent, cleanup, within} from '@testing-library/react'
import ColourPicker from './ColourPicker'
describe('ColourPicker', () =>{
    afterEach(() =>{
        cleanup()
    })
    it('should render ColourPicker', () =>{
        render(<ColourPicker role='colourPicker'/>)
        const colorPicker =  screen.getByRole('colourPicker')
        expect(colorPicker).toBeInTheDocument()
    })
    it('changing the colour should trigger the onchange event', () =>{
        const mockOnChange = jest.fn()
        render(<ColourPicker role='colourPicker' onChange={mockOnChange} />)
        const colorPicker = screen.getByRole('colourPicker')
    })
})