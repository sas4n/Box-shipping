import React from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = ({className,onChange, colour}) => {
    
    const changeColourHandler = (newColour) => {
       // setColour({...colour, ...newColour})
        onChange(newColour.rgb)
    }
    return(
        <div>
                <ChromePicker className={className} color={colour} onChange={changeColourHandler}/>
        </div>
    )
}

export default ColorPicker