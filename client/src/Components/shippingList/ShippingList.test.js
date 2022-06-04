import {render, screen} from '@testing-library/react';
import ShippingList from './ShippingList'

describe('ShippingList', () => {
    it('should render shippingList', () => {
const boxes = [{}, {}]
    render(<ShippingList boxes={boxes} role={'list'}/>)
    const shippingList = screen.getByRole('list')
    expect(shippingList).toBeInTheDocument()
    })
    
})