import ListTable from '../Components/ListTable/ListTable'
import ShippingSummary from '../Components/ShippingSummary/ShippingSummary'
import Header from '../Components/Header/Header'
import '../css/shippingList.css'

const ShippingList = ({boxes}) => {
    return(
        <div className="shipping-list-container">
            <Header>List Boxes</Header>
            <ListTable boxes={boxes} />
            <ShippingSummary boxes={boxes}/>  
        </div>
    )
}

export default ShippingList