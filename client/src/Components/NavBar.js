import {NavLink} from 'react-router-dom'
const  NavBar = ({className}) => {
    return (
        <nav className={className}>
            <NavLink className='link' to="/addBox"> Add Box</NavLink>
            <NavLink className='link' to="/listBoxes"> List Boxes</NavLink>
        </nav>
    )
}
export default NavBar