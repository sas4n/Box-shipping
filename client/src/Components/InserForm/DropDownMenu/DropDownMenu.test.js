import {screen, render, fireEvent, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DropDownMenu from './DropDownMenu'


describe('DropDownMenu test', () => {
    it('should render dropdown menu', () => {
        render(<DropDownMenu/>)
        const dropDownMenu = screen.getByRole('combobox')
        expect(dropDownMenu).toBeInTheDocument()
    })
    it('should contains 4 options', () => {
        render(<DropDownMenu/>)
        const options = screen.getAllByRole('option')
        expect(options.length).toBe(4)
    })
    it('the default value shown by drop down menu should be Sweden', () => {
        const mockOnChange = jest.fn()
        render(<DropDownMenu value='Sweden' onChange={mockOnChange}/>)
        const dropDownMenu = screen.getByRole('combobox')
        expect(dropDownMenu).toHaveTextContent('Sweden')
    })
    it('if value of drop down menu changed, the onChange function should be called', () => {
        const mockOnChange = jest.fn()
        render(<DropDownMenu onChange={mockOnChange}/>)
        const dropDownMenu = screen.getByRole('combobox')
        
        //fireEvent.click(dropDownMenu)
        fireEvent.change(dropDownMenu,{target : {value:'China' }})
        expect(mockOnChange).toHaveBeenCalledTimes(1)
       // 
    })
    it('if a user select an option, only that option should be selected', () => {
        render(<DropDownMenu />)
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option',{name:'Australia'})
        )
        expect(screen.getByRole('option',{name:'Australia'}).selected).toBe(true)
        expect(screen.getByRole('option',{name:'China'}).selected).toBe(false)
        expect(screen.getByRole('option',{name:'Sweden'}).selected).toBe(false)
        expect(screen.getByRole('option',{name:'Brazil'}).selected).toBe(false)
    })
    it('options should have correct name', () => {
        render(<DropDownMenu />)
        const dropDownMenu = screen.getByRole('combobox')
        const options = within(dropDownMenu).getAllByRole('option')
        expect(options[0]).toHaveTextContent('China')
        expect(options[1]).toHaveTextContent('Sweden')
        expect(options[2]).toHaveTextContent('Australia')
        expect(options[3]).toHaveTextContent('Brazil')
    })
})