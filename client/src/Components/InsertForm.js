import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import ColorPicker from './ColourPicker'
import {addBox} from '../redux/actions/saveAndGetDataActionCreators'
import {onInputChange, onColourChange, onNegativeWeightEntered} from '../redux/actions/stateActionCreators'
import Header from './Header'
import UserInputField from './UserInputField'
import ValidationErrorMsg from './ValidationErrorMsg'
import Button from './Button'
import DropDownMenu from './DropDownMenu'
import Label from './Label'


const InsertForm = () => {

    const boxInfo = useSelector(state => state.boxInfo)

    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [validate, setValidate] = useState(false)

    useEffect(() => {
        validationCheck()
    }, [boxInfo])//eslint-disable-line react-hooks/exhaustive-deps

    const clickHandler = () => {
        setVisible(visible=>!visible)
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        setSubmitted(true)
        onNegativeWeightErrorHandler()
        if(validate){
            dispatch(addBox(boxInfo))
        }      
           
    }
    const onChangeHandler = (event) => {
        dispatch(onInputChange(event))
        setSubmitted(false)//to disappear the validation message after changing any value in required fields
       // validationCheck()
    }
    const onNegativeWeightErrorHandler = () => {
       
        if (boxInfo.weight<0){
        setTimeout(() => {
            dispatch(onNegativeWeightEntered())
        }, 3000)
    }
                
    }

    const validationCheck = () => {
        if(boxInfo.name.length>0 && boxInfo.weight>0  && boxInfo.colour.b===0){
            setValidate(true)
        }else{
            setValidate(false)
        }
    }

    const onColourChangeHandler = (newColourRGB) => {
        dispatch(onColourChange(newColourRGB))
      //  validationCheck()
 }
    return(
        <div className='form-container'>
            <Header>insertForm</Header>
        <form onSubmit={submitHandler}>
            <div>
                <UserInputField type="text" name="name" value={boxInfo.name} onChange={onChangeHandler}>name </UserInputField>
                <ValidationErrorMsg show={submitted & !boxInfo.name}>Please Enter the name</ValidationErrorMsg>
            </div>
            
            <div>
                <UserInputField type='number' name='weight' value={boxInfo.weight} onChange={onChangeHandler}>Weight</UserInputField>
                <ValidationErrorMsg show={submitted && !boxInfo.weight}>Please Enter the weight</ValidationErrorMsg>
                <ValidationErrorMsg show={submitted && boxInfo.weight<0 } >Weight could not be negative</ValidationErrorMsg>
            </div>
            <div>
            
                <Label >Box Color </Label>
                <Button type='button' onClick={clickHandler}>{visible?'choose the colour':'click to show colour picker'}</Button>
                {visible?<ColorPicker colour = {boxInfo.colour} onChange={onColourChangeHandler}/>:null}
                <ValidationErrorMsg show={submitted && boxInfo.colour.b >0 }>User could not choose blue colour</ValidationErrorMsg>
                
                <h2>{JSON.stringify(boxInfo)} </h2>
                <h2>{JSON.stringify(validate)}</h2>
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