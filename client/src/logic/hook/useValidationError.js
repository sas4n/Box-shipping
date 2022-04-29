import {useState} from 'react'

const useValidate = ({name, weight, colour}) => {
    const [errors, setErrors] = useState({})

    const doValidation = () => {
        setErrors(validate(name, weight, colour))
    }
    
    const validate= (name, weight, colour) => {
        const error = {}
        if(!name){
            error.emptyNameError = 'name could not be empty'   
        }
        if(!weight){
            error.emptyWeightError = 'weight could not be empty'
        }
        if(weight< 0){
            error.negativeWeightError = 'weight could not be negative'
        }
        if(colour.b > 40){
            error.blueColourError = 'blue Colour could not be used'
        }
        return error
    }

    return {errors, doValidation}
}

export default useValidate