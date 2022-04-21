const TableRow = ({box}) => {
    return (
        <>
            <tr key={box.id}>
                <td>{box.receiver_name}</td>
                <td>{box.weight} kilograms</td>
                <td>{box.color_r},{box.color_g},{box.color_b}</td>
                <td>{box.shipping_cost} SEK</td>
            </tr>
        </>
    )
}
export default TableRow