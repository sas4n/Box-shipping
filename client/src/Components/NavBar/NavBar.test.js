import {screen, render, fireEvent} from '@testing-library/react'
import NavBar  from './NavBar'
import {HashRouter} from 'react-router-dom'

const MockRouter = ({role}) => {
    return  (
        <HashRouter>
            <NavBar role={role}/>
        </HashRouter>)
    
}

describe('NavBar', () => {
    it('should render the Navbar', () => {
        render(<MockRouter role= 'navbar' />)
        const navbar = screen.getByRole('navbar')
        expect(navbar).toBeInTheDocument()
    })
    it('AddBox link should have correct href', () => {
        render(<MockRouter role= 'navbar'/>)
        const addBoxLink = screen.getByRole('link', {name: 'Add Box'})
        expect(addBoxLink).toHaveAttribute('href', '#/addBox')
    })
    it('listBoxes link should have correct href', () => {
        render(<MockRouter role= 'navbar'/>)
        const listBoxesLink = screen.getByRole('link', {name: 'List Boxes'})
        expect(listBoxesLink).toHaveAttribute('href', '#/listBoxes')
    })
    it('After clicking on a link, it should be selected', () => {
        render(<MockRouter role= 'navbar'/>)
        const addBoxLink = screen.getByRole('link', {name: 'Add Box'})
        fireEvent.click(addBoxLink)
        const clickedLink = screen.getByRole('link', {current: 'page'})  
        expect(clickedLink).toHaveTextContent('Add Box')
    })
})