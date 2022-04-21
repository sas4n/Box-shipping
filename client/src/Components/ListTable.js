import React from 'react'
import {useSelector} from 'react-redux'
import TableRow from './TableRow'

const ListTable = () => {
    const {boxes} = useSelector(state => state.boxesInfo)
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
                        <TableRow box={box} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ListTable