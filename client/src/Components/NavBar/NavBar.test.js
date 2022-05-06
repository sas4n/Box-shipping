import {screen, render} from '@testing-library/react'
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
})