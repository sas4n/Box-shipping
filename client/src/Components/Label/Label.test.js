import {screen, render} from '@testing-library/react'
import Label from './Label'

describe('Label tests', () => {
    it('should render a label', () => {
        render(<Label>text</Label>)
        const label = screen.getByText('text')
        expect(label).toBeInTheDocument()
    })

    it('label should show the text passed to it', () => {
            render(<Label>New label</Label>)
            const label = screen.getByText('New label')
            expect(label.textContent).toBe('New label')
    })
})
