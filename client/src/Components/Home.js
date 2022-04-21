import {Link} from 'react-router-dom'
import {useEffect} from 'react'
export const Home = () => {

    console.log('I rendered')

    useEffect(() => {
        console.log('here too')
    }, [])
    return (
        <div><Link to="/addBox"> Add Box</Link>
        <Link to="/listBoxes"> List Boxes</Link>
        </div>
    )
}