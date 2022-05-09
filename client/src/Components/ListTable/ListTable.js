import React from 'react'

const ListTable = ({boxes}) => {
    return (
        <>
        <table>
                <thead>
                    <tr>
                        <th>Receiver</th>
                        <th>Weight</th>
                        <th>Box Colour</th>
                        <th>Shipping Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {boxes.map(box =>(
                        <tr key={box.id}>
                            <td>{box.receiver_name}</td>
                            <td>{box.weight} kilograms</td>
                            <td style={{ background: `rgb(${box.color_r},${box.color_g},${box.color_b})` }}/>
                            <td>{box.shipping_cost} SEK</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListTable