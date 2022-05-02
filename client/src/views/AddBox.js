import {useSelector} from 'react-redux'
import InsertForm from './InsertForm'
import Loading from './Loading'
import Error from './Error'

const AddBox = () => {
    const {loading, error} = useSelector(state => state.boxesInfo)
    console.log(loading)
    console.log(error)
    return(
        <div>
        {loading ? <Loading/> : 
            <>
            {error ? <Error/>: <InsertForm/> }
            </>
        }
        </div>
    )
}
export default AddBox