import React from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = ({onChange, colour}) => {
    
    const changeColourHandler = (newColour) => {
       // setColour({...colour, ...newColour})
        onChange(newColour.rgb)
    }
    return(
        <div>
                <ChromePicker color={colour} onChange={changeColourHandler}/>
        </div>
    )
}

export default ColorPicker