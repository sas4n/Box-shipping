import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import ColorPicker from './ColourPicker/ColourPicker'
import '../../css/insertForm.css'
import {addBox, onInputChange, onColourChange, onNegativeWeightEntered} from '../../redux/actions'
import Header from '../Header/Header'
import UserInputField from './UserInputField/UserInputField'
import ValidationErrorMsg from './ValidationErrorMsg/ValidationErrorMsg'
import Button from './Button/Button'
import DropDownMenu from './DropDownMenu/DropDownMenu'
import Label from '../Label/Label'
import useValidationError from '../../logic/hook/useValidationError'
import useValidate from '../../logic/hook/useValidate'
import negativeWeightHandler from '../../logic/negativeWeightHandler'


const InsertForm = ({role}) => {

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
        setSubmitted(false)
        dispatch(onColourChange(newColourRGB))
 }
    return(
        <div role={role} className='insert-form'>
            <Header>InsertForm</Header>
            {/* to be able to use getByRole for form, it should have a name attribute*/}
            <form className='form-container' name='insert-form' onSubmit={submitHandler}> 
                <Label className='label'>Name</Label>
                <UserInputField className='input-field'type="text" name="name" value={boxInfo.name} onChange={onChangeHandler}/>
                <ValidationErrorMsg className= 'error-message' showable={submitted}>{errors.emptyNameError}</ValidationErrorMsg>
                
                <Label>Weight</Label>
                <UserInputField className='input-field' type='number' name='weight' value={boxInfo.weight} testId='numberbox' onChange={onChangeHandler}/>
                {errors.emptyWeightError ? 
                <ValidationErrorMsg className= 'error-message' showable={submitted}>{errors.emptyWeightError}</ValidationErrorMsg> :
                <ValidationErrorMsg className= 'error-message' showable={submitted} >{errors.negativeWeightError}</ValidationErrorMsg>}
               
                <Label>Box Color </Label>
                <Button type='button' onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</Button>
                {visible?<ColorPicker className='color-picker'colour = {boxInfo.colour} role='colourPicker' onChange={onColourChangeHandler}/>:null}
                <ValidationErrorMsg className= 'error-message'showable={submitted}>{errors.blueColourError}</ValidationErrorMsg>
               
                <Label>Country</Label>
                <DropDownMenu value={boxInfo.country} onChange={onChangeHandler} />
               
                <Button className='save-btn' type='submit'>Save</Button>  
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