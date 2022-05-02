import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions'
import ShippingList from './ShippingList'
import Loading from './Loading'
import Error from './Error'

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