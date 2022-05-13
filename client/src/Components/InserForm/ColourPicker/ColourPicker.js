import React from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = ({className,onChange, colour, role}) => {
    
    const changeColourHandler = (newColour) => {
       // setColour({...colour, ...newColour})
        onChange(newColour.rgb)
    }
    return(
        <div role={role}>
                <ChromePicker className={className} color={colour}  onChange={changeColourHandler}/>
        </div>
    )
}

export default ColorPicker