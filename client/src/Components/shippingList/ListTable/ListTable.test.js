import {screen, render} from '@testing-library/react'
import ListTable  from './ListTable'
describe('ListTable', () =>{
   
    it('should render the table', () =>{
        const FakeBoxes=[]
        render(<ListTable boxes={FakeBoxes}/>)
        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument()
    })
    it('tables should have 2 + 1 rows (one for table heading) when boxes array has length of 2', () =>{
        const FakeBoxes = [
            {id:1, receiver_name:'hj', weight:2, color_r:1, color_g:1, color_b:1, shipping_cost:2},
            {id:2, receiver_name:'hj', weight:2, color_r:1, color_g:1, color_b:1, shipping_cost:2}
        ]
        render(<ListTable boxes={FakeBoxes}/>)
        const tableRows = screen.getAllByRole('row')
        expect(tableRows.length).toEqual(3)
    })

    it('tables should have 1 row (for table heading) when there are not any boxes', () =>{
        const FakeBoxes = []
        render(<ListTable boxes={FakeBoxes}/>)
        const tableRows = screen.getAllByRole('row')
        expect(tableRows.length).toEqual(1)
    })
    it('table should show the correct column heading name when there are no boxes', () =>{
        const FakeBoxes=[]
        render(<ListTable boxes={FakeBoxes}/>)
        const columnHeadings = screen.getAllByRole('columnheader')
        expect(columnHeadings[0]).toHaveTextContent('Receiver')
        expect(columnHeadings[1]).toHaveTextContent('Weight')
        expect(columnHeadings[2]).toHaveTextContent('Box Colour')
        expect(columnHeadings[3]).toHaveTextContent('Shipping Cost')
    })
    
})