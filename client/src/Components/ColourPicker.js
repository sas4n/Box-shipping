import {useState } from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = () => {
    const initialColourRGB = { 
        r:25,
        g:25,
        b:30,
        a:1
    }
    const [colour, setColour] = useState(initialColourRGB)
    const [visible, setVisible] = useState(false)
    const clickHandler = () => {
        setVisible(visible=>!visible)
        console.log(colour)
    }
    const changeColourHandler = (newColour) => {
        console.log(newColour.rgb)
        setColour({...newColour.rgb})
    }
    return(
        <div>
            <button onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</button>
            {visible ? 
                <ChromePicker 
                    color={colour}
                    onChange={changeColourHandler}/>
            : null}
            <h2>colour rgb is r:{colour.r}, g:{colour.g}, b:{colour.b}</h2>
        </div>
    )
}

export default ColorPicker