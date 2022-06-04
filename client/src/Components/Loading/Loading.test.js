import {render, screen} from '@testing-library/react';
import Loading from './Loading'

describe('Loading', () => {
    it('should render loading page', () => {
        render(<Loading role={'Loading'}/>)
        const loading = screen.getByRole('Loading')
        expect(loading).toBeInTheDocument()
    })
})