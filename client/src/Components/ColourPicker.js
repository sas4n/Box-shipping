import react, {useState } from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = (props) => {
    const initialColourRGB = { 
        rgb: {...props.colourRGB},
        a:1
    }
    const [colour, setColour] = useState(initialColourRGB)
    const [visible, setVisible] = useState(false)
    const clickHandler = () => {
        setVisible(visible=>!visible)
        console.log(colour)
    }
    const changeColourHandler = (newColour) => {
        //console.log(newColour.rgb)
        setColour({...colour, ...newColour})
        console.log(colour.rgb)
        props.onChange(colour.rgb)
    }
    return(
        <div>
            <button onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</button>
            {visible ? 
                <ChromePicker 
                    color={colour}
                    onChange={changeColourHandler}
                   // onChangeComplete={() => props.onChange(colour.rgb)}
                    />
            : null}
        </div>
    )
}

export default ColorPicker