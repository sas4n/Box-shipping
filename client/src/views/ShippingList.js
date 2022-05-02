import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions'
import ListTable from '../Components/ListTable'
import ShippingSummary from '../Components/ShippingSummary'
import Header from '../Components/Header'
import '../css/shippingList.css'

const ShippingList = () => {
    const {boxes} = useSelector((state) =>state.boxesInfo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllBoxLists())
    },[dispatch])

    return(
        <div className="shipping-list-container">
            <Header>List Boxes</Header>
            <ListTable boxes={boxes} />
            <ShippingSummary boxes={boxes}/>  
        </div>
    )
}

export default ShippingList