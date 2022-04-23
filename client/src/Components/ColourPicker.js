import React, {useState} from 'react'
import {ChromePicker} from 'react-color'

const ColorPicker = ({onChange, colour}) => {
    const [visible, setVisible] = useState(false)
    const clickHandler = () => {
        setVisible(visible=>!visible)
    }
    const changeColourHandler = (newColour) => {
       // setColour({...colour, ...newColour})
        onChange(newColour.rgb)
    }
    return(
        <div>
            
            {visible ? 
                <ChromePicker 
                    color={colour}
                    onChange={changeColourHandler}
                   //onChangeComplete={() => onChange(colour.rgb)}
                    />
            : null}
        </div>
    )
}

export default ColorPicker