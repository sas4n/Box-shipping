import {screen, render} from '@testing-library/react'
import ColourCell  from './ColourCell'

describe('ColourCell test', () => {
    it('should render ColourCell', () => {
        const box = {}
        // <table>, <tbody>, <tr> should add to avoid getting warning 
        render(
            <table><tbody><tr><ColourCell box={box}/></tr></tbody></table>
        )
        const colourCell = screen.getByRole('cell')
        expect(colourCell).toBeInTheDocument()
    })
    it('backgroung colour should change according to the receiving box information', () =>{
        const box = {color_r:25, color_g:25, color_b:25}
        render(
            <table><tbody><tr><ColourCell box={box}/></tr></tbody></table>
            )
        const colourCell = screen.getByRole('cell')
        expect(colourCell).toHaveStyle({backgroundColor: 'rgb(25,25,25)'})
        
    })
    it('backgroung colour should change if received different box information', () =>{
        const box = {color_r:50, color_g:50, color_b:50}
        render(
            <table><tbody><tr><ColourCell box={box}/></tr></tbody></table>
            )
        const colourCell = screen.getByRole('cell')
        expect(colourCell).toHaveStyle({backgroundColor: 'rgb(50,50,50)'})
        
    })
})