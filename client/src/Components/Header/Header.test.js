import{screen, render} from '@testing-library/react'
import Header  from './Header'
describe('Header tests', () => {
    it('should render the header', () => {
        render(<Header/>)
        const header = screen.getByRole('heading', {level: 1})
        expect(header).toBeInTheDocument()
    })
    
    it('should show the title passed to it', () => {
        render(<Header>Hi</Header>)
        const header = screen.getByRole('heading', {level:1})
        expect(header.textContent).toBe('Hi')
    })
})