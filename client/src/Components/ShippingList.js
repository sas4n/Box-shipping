import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions/actionCreators'
import ListTable from './ListTable'
import ShippingSummary from './ShippingSummary'
import Header from './Header'

const ShippingList = () => {
    const {boxes} = useSelector((state) =>state.boxesInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllBoxLists())
    },[dispatch])

    return(
        <>
            <Header>List Boxes</Header>
            <ListTable boxes={boxes} />
            <ShippingSummary boxes={boxes}/>  
        </>
    )
}

export default ShippingList