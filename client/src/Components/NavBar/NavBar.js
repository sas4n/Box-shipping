import {NavLink} from 'react-router-dom'
const  NavBar = ({className, role}) => {
    return (
        <nav className={className} role={role}>
            <NavLink className='link' to="/addBox"> Add Box</NavLink>
            <NavLink className='link' to="/listBoxes"> List Boxes</NavLink>
        </nav>
    )
}
export default NavBar