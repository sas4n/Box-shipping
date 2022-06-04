import {useState, useEffect} from 'react'
const useValidate = (errors) => {
    const [validated, setValidated] = useState(false)

    useEffect(() => {
        //checkValidation(errors)
       if(Object.keys(errors).length === 0){
           setValidated(true)
       }else{
           setValidated(false)
       }
    }, [errors])

    /*const checkValidation = (errors) => {
        
        if(Object.keys(errors).length === 0){
            setValidated(true)
        }else{
            setValidated(false)
         //  return false
        }
       // setValid(validation(errors))
    }*/

    return {validated}
}

export default useValidate