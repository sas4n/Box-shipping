import {NavLink} from 'react-router-dom'
const  NavBar = ({className, testId}) => {
    return (
        <nav className={className} data-testid={testId}>
            <NavLink className='link' to="/addBox"> Add Box</NavLink>
            <NavLink className='link' to="/listBoxes"> List Boxes</NavLink>
        </nav>
    )
}
export default NavBar