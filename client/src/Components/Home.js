import {Link} from 'react-router-dom'
export const Home = () => {
    return (
        <div>
            <Link to="/addBox"> Add Box</Link>
            <Link to="/listBoxes"> List Boxes</Link>
        </div>
    )
}