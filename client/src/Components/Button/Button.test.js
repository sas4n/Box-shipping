import { render, screen } from '@testing-library/react';
import Button from './Button'

describe('Button component', () => {
    it('button should be rendered', () => {
        render(<Button/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('button should have a title text which is passed as a children to it', () => {
        render(<Button>Save</Button>)
        const button = screen.getByRole('button')
        expect(button.textContent).toBe('Save')
    })
})