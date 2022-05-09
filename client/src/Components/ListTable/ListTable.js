import React from 'react'
import TableBody  from '../TableBody/TableBody'

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
                <TableBody boxes={boxes} />
               
            </table>
        </>
    )
}
export default ListTable