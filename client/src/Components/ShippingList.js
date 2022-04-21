import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllBoxLists} from '../redux/actions/actionCreators'
import ListTable from './ListTable'
import ShippingSummary from './ShippingSummary'

const ShippingList = () => {
    const {boxes} = useSelector((state) =>state.boxesInfo)
    console.log(boxes)
    //boxes.forEach((box) => {console.log(box[0].id)})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllBoxLists())
    },[dispatch])

    return(
        <>
            <h1>listBoxes</h1>
            <ListTable />
            <ShippingSummary />
           
        </>
        
        
    )
}

export default ShippingList