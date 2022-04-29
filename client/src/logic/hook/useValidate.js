import {useState, useEffect} from 'react'
const useValidate = (errors) => {
    const [validated, setValidated] = useState(false)

    useEffect(() => {
        //checkValidation(errors)
       if(Object.keys(errors).length === 0){
           console.log('calllllllled')
           setValidated(true)
       }else{
           setValidated(false)
       }
    }, [errors])

    const checkValidation = (errors) => {
        
        if(Object.keys(errors).length === 0){
            console.log('it called')
          //  console.log('valid')
          //    return true
            setValidated(true)
        }else{
            console.log(' not valid')
            setValidated(false)
         //  return false
        }
       // setValid(validation(errors))
    }

    return {validated}
}

export default useValidate