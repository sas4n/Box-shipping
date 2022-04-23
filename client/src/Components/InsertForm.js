import React, {useState, useEffect} from 'react'
import {useDispatch } from 'react-redux'
import ColorPicker from './ColourPicker'
import {addBox} from '../redux/actions/actionCreators'

const InsertForm = () => {
    const initialBoxInfo = {
        name: '',
        weight: 2,
        
        country : 'Sweden',
    }

    const [boxInfo, setBOxInfo] = useState(initialBoxInfo)
    const initialColour = {
            r: 25,
            g: 25,
            b: 0,
            a:1
    }
    const [boxColour, setBOxColour] = useState(initialColour)
    const [submitted, setSubmitted] = useState(false)
    const dispatchAddBox = useDispatch()
    
    const submitHandler = (event) => {
        event.preventDefault()
        setSubmitted(true)
        console.log(boxInfo)
        dispatchAddBox(addBox(boxInfo))
    }
    const onChangeHandler = (event) => {
        setBOxInfo({
            ...boxInfo,
            [event.target.name] : event.target.value
        })
        setSubmitted(false)//to disappear the validation message after changing any value in required fields
    }
    const onNegativeWeightErrorHandler = () => {
        setTimeout(() => {
            setBOxInfo({
                ...boxInfo,
                weight: '0'
            })
        }, 3000);
        return (
            <span>Weight could not be negative</span>
                ) 
        
    }
    return(
        <div className='form-container'>
            <h1>insertForm</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label >Name</label>
                <input type='text' name='name' id='name' onChange={onChangeHandler} value={boxInfo.name}/>
                {submitted && !boxInfo.name ? <span>Please enter the name</span> : null}
            </div>
            
            <div>
                <label >Weight</label>
                <input type='number' name='weight' id='weight' value={boxInfo.weight} onChange={onChangeHandler}/>
                {submitted && !boxInfo.weight ? <span>Please enter the weight</span> : null}
                {submitted && boxInfo.weight<0 ? onNegativeWeightErrorHandler() : null}
            </div>
            <div>
            
                <label >Box Color </label>
                <button type='button' onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</button>
                <ColorPicker colour = {boxColour} onChange={colourRGB =>{ 
                    setBOxColour({...boxColour,
                                    r:colourRGB.r,
                                    g:colourRGB.g,
                                    b:colourRGB.b
                                })
                                }}/>
                {submitted && boxInfo.colour.b>0 ? <span>User could not choose blue colour</span> : null}
                
                <h2>{JSON.stringify(boxColour)} </h2>
            </div>
            <div>
                <select value= {boxInfo.country} name= 'country' onChange={onChangeHandler}>
                    <option value="China">China</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Australia">Australia</option>
                    <option value="Brazil">Brazil</option>
                </select>
            </div>
            <div>
                <button type="submit" >Save</button>
            </div>
            
        </form>
        
        </div>
       
    )
}

export default InsertForm