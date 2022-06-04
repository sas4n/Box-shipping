import {render, screen} from '@testing-library/react';
import Error from './Error'

describe('Error', () => {
    it('should render Error page', () => {
        render(<Error role={'error'}/>)
        const errorPage = screen.getByRole('error');
        expect(errorPage).toBeInTheDocument()
    })
})