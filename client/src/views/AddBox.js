import {useSelector} from 'react-redux'
import InsertForm from '../Components/InserForm/InsertForm'
import Loading from '../Components/Loading/Loading'
import Error from '../Components/Error/Error'

const AddBox = () => {
    const {loading, error} = useSelector(state => state.boxesInfo)
    //console.log(loading)
    //console.log(error)
    return(
        <div>
        {loading ? <Loading role='loading-page'/> : 
            <>
            {error ? <Error role='error-page'/>: <InsertForm role='insert-form'/> }
            </>
        }
        </div>
    )
}
export default AddBox