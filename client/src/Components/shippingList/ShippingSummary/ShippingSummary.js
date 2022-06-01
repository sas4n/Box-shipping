const ShippingSummary = ({boxes, role}) => {

    return(
        <>
            {boxes.map((box) => (
                <p key={box.id} role={role}>The weight of box no.{box.id} is {box.weight} kgs and it costs {box.shipping_cost} SEK</p>
            ))}
        </>
    )
}
export default ShippingSummary