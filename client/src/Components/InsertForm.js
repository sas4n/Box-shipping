import react from 'react'
import ColorPicker from './ColourPicker'

const insertForm = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return(
        <div className='form-container'>
            <h1>insertForm</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label >Name</label>
                <input type='text' name='name' id='name'/>
            </div>
            <div>
                <label >Weight</label>
                <input type='number' name='weight' id='weight'/>
            </div>
            <div>
                <label >Box Color </label>
                <ColorPicker/>
            </div>
            
        </form>
        </div>
       
    )
}

export default insertForm