import ColourCell from '../ColourCell/ColourCell'
const TableBody = ({boxes,role}) => {
    return(
        <tbody role={role}>
        {boxes.map(box =>(
            <tr key={box.id}>
                <td>{box.receiver_name}</td>
                <td>{box.weight} kilograms</td>
                <ColourCell box={box}/>
                <td>{box.shipping_cost} SEK</td>
            </tr>
        ))}
    </tbody>
    )
}
export default TableBody