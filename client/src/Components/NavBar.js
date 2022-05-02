import {Link} from 'react-router-dom'
const  NavBar = ({className}) => {
    return (
        <nav className={className}>
            <Link className='link' to="/addBox"> Add Box</Link>
            <Link className='link' to="/listBoxes"> List Boxes</Link>
        </nav>
    )
}
export default NavBar