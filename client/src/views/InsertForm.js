import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import ColorPicker from '../Components/ColourPicker'
import {addBox} from '../redux/actions/saveAndGetDataActionCreators'
import {onInputChange, onColourChange, onNegativeWeightEntered} from '../redux/actions/stateActionCreators'
import Header from '../Components/Header'
import UserInputField from '../Components/UserInputField'
import ValidationErrorMsg from '../Components/ValidationErrorMsg'
import Button from '../Components/Button'
import DropDownMenu from '../Components/DropDownMenu'
import Label from '../Components/Label'
import useValidationError from '../logic/hook/useValidationError'
import useValidate from '../logic/hook/useValidate'
import negativeWeightHandler from '../logic/negativeWeightHandler'


const InsertForm = () => {

    const boxInfo = useSelector(state => state.boxInfo)
    const {errors, doValidation} = useValidationError(boxInfo)
    const {validated} = useValidate(errors)

    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        doValidation()
    }, [boxInfo])//eslint-disable-line react-hooks/exhaustive-deps

    const clickHandler = () => {
        setVisible(visible=>!visible)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        setSubmitted(true)
        negativeWeightHandler(boxInfo,dispatch,onNegativeWeightEntered)      
        if(validated){
            dispatch(addBox(boxInfo))
        }      
           
    }
    const onChangeHandler = (event) => {
        dispatch(onInputChange(event))
        setSubmitted(false)//to disappear the validation message after changing any value in required fields
      
    }
         
    

    const onColourChangeHandler = (newColourRGB) => {
        dispatch(onColourChange(newColourRGB))
 }
    return(
        <div className='form-container'>
            <Header>insertForm</Header>
        <form onSubmit={submitHandler}>
            <div>
                <UserInputField type="text" name="name" value={boxInfo.name} onChange={onChangeHandler}>name </UserInputField>
                <ValidationErrorMsg show={submitted}>{errors.emptyNameError}</ValidationErrorMsg>
            </div>
            
            <div>
                <UserInputField type='number' name='weight' value={boxInfo.weight} onChange={onChangeHandler}>Weight</UserInputField>
                <ValidationErrorMsg show={submitted}>{errors.emptyWeightError}</ValidationErrorMsg>
                <ValidationErrorMsg show={submitted} >{errors.negativeWeightError}</ValidationErrorMsg>
            </div>
            <div>
            
                <Label >Box Color </Label>
                <Button type='button' onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</Button>
                {visible?<ColorPicker colour = {boxInfo.colour} onChange={onColourChangeHandler}/>:null}
                <ValidationErrorMsg show={submitted}>{errors.blueColorError}</ValidationErrorMsg>
                
                <h2>{JSON.stringify(boxInfo)} </h2>
                <h2>{JSON.stringify(errors)}</h2>
                <h2>{JSON.stringify(validated)}</h2>
            </div>
                <DropDownMenu value={boxInfo.country} onChange={onChangeHandler} />
            <div>
                <Button type='submit'>Save</Button>
            </div>
            
        </form>
        
        </div>
       
    )
}

export default InsertForm






 /*const initialBoxInfo = {
        name: '',
        weight: 2,
        colour:{
            r:25,
            g:25,
            b:0
        },
        country : 'Sweden',
    }

    const [boxInfo, setBOxInfo] = useState(initialBoxInfo)*/

     /* setBOxInfo({
            ...boxInfo,
            [event.target.name] : event.target.value
        })*/

         /*  setBOxInfo({...boxInfo,
            colour:{
                ...boxInfo.colour,
                r:newColourRGB.r,
                g:newColourRGB.g,
                b:newColourRGB.b
            }
        })*/