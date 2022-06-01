import ListTable from './ListTable/ListTable'
import ShippingSummary from './ShippingSummary/ShippingSummary'
import Header from '../Header/Header'
import '../../css/shippingList.css'

const ShippingList = ({boxes, role}) => {
    return(
        <div role={role} className="shipping-list-container">
            <Header>List Boxes</Header>
            <ListTable boxes={boxes} />
            <ShippingSummary boxes={boxes}/>  
        </div>
    )
}

export default ShippingList