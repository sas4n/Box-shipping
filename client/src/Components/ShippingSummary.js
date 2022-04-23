const ShippingSummary = ({boxes}) => {

    return(
        <>
            {boxes.map((box) => (
                <p key={box.id}>the weight of box no.{box.id} is {box.weight} and it costs {box.shipping_cost} SEK</p>
            ))}
        </>
    )
}
export default ShippingSummary