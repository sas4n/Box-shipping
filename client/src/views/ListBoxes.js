import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions'
import ShippingList from '../Components/shippingList/ShippingList'
import Loading from '../Components/Loading/Loading'
import Error from '../Components/Error/Error'

const ListBoxes = () => {
    const {loading, error,boxes} = useSelector(state => state.boxesInfo)
    const dispatch = useDispatch()
    console.log(boxes)

    useEffect(() => {
        dispatch(fetchAllBoxLists())
    },[dispatch])
    return(
        <>
         {loading ? <Loading/> : 
            <>
            {error ? <Error/>: <ShippingList boxes={boxes}/> }
            </>
        }
        </>
    )
}
export default ListBoxes