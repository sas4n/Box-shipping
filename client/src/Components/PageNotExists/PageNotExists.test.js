import {render, screen} from '@testing-library/react';
import PageNotExists from './PageNotExists'

describe('PageNotExists', () => {
    it('should render PageNotExists page', () => {
        render(<PageNotExists role={'page-not-exists'}/>)
        const pageNotExists = screen.getByRole('page-not-exists');
        expect(pageNotExists).toBeInTheDocument()
    })
})