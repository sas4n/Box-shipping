import {screen, render} from '@testing-library/react'
import TableBody  from './TableBody'
describe('TableBody tests', () => {
    it('should render TableBody', () => {
        const boxes = []
        render(
            <table>
                <TableBody boxes={boxes} role='tableBody'/>
            </table>
        )
        const tableBody = screen.getByRole('tableBody')
        expect(tableBody).toBeInTheDocument()
    })
    it('should have 2 rows, if there are 2 boxes', () => {
        const fakeBoxes = [
            {id:1, receiver_name:'hj', weight:2, color_r:1, color_g:1, color_b:1, shipping_cost:2},
            {id:2, receiver_name:'hj', weight:2, color_r:1, color_g:1, color_b:1, shipping_cost:2}
        ]
        render(
            <table>
            <TableBody boxes={fakeBoxes} role='tableBody'/>
        </table>
        )
        const tableBodyRows = screen.getAllByRole('row')
        expect(tableBodyRows.length).toEqual(2)
    })
    it('table\'s data should show the receiving data accordingly', () => {
        const fakeBoxes = [
            {id:1, receiver_name:'Sas4n', weight:2, color_r:1, color_g:1, color_b:1, shipping_cost:20},
            {id:2, receiver_name:'Sasan', weight:12, color_r:2, color_g:2, color_b:2, shipping_cost:12}
        ]
        render(
            <table>
            <TableBody boxes={fakeBoxes} role='tableBody'/>
        </table>
        )
       const cells = screen.getAllByRole('cell')
       
        expect(cells[0]).toHaveTextContent('Sas4n')
        expect(cells[1]).toHaveTextContent('2 kilograms')
        expect(cells[2]).toHaveStyle({backgroundColor: 'rgb(1, 1, 1)'})
        expect(cells[3]).toHaveTextContent('20 SEK')
        expect(cells[4]).toHaveTextContent('Sasan')
        expect(cells[5]).toHaveTextContent('12 kilograms')
        expect(cells[6]).toHaveStyle({backgroundColor: 'rgb(2, 2, 2)'})
        expect(cells[7]).toHaveTextContent('12 SEK')
    })
})