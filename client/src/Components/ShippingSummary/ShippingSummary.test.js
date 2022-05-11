import {screen, render} from '@testing-library/react'
import ShippingSummary from './ShippingSummary'

describe('ShippingSummary tests', () => {
    it('should render the shippingSummary', () => {
        const mockBoxes = [{id:1}]
        render(<ShippingSummary boxes={mockBoxes} role='summary'/>)
        const summaryParagraphs = screen.getByRole('summary')
        expect(summaryParagraphs).toBeInTheDocument()
    })
    it('for two boxes, there should be to paragraphs', () => {
        const mockBoxes = [{id:1}, {id:2}]
        render(<ShippingSummary boxes={mockBoxes} role='summary' />)
        const summaries = screen.getAllByRole('summary')
        expect(summaries.length).toEqual(2)
    })
    it('sumary should have a specific format', () => {
        const mockBoxes = [
            {id:1, weight:12, shipping_cost: 50},
            {id:2, weight:14, shipping_cost: 40}
        ]
        render(<ShippingSummary boxes={mockBoxes} role='summary' />)
        const summaries = screen.getAllByRole('summary')
        expect(summaries[0]).toHaveTextContent('The weight of box no.1 is 12 kgs and it costs 50 SEK')
        expect(summaries[1]).toHaveTextContent('The weight of box no.2 is 14 kgs and it costs 40 SEK')
    })
})