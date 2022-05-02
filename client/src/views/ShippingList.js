import ListTable from '../Components/ListTable'
import ShippingSummary from '../Components/ShippingSummary'
import Header from '../Components/Header'
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