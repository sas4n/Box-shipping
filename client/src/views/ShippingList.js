import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions'
import ListTable from '../Components/ListTable'
import ShippingSummary from '../Components/ShippingSummary'
import Header from '../Components/Header'

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