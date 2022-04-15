import  {useState } from 'react'
import ColorPicker from './ColourPicker'

const InsertForm = () => {
    const initialBoxInfo = {
        name: '',
        weight: '',
        colour:{
            r: 25,
            g: 25,
            b: 30,
        },
        country : '',
    }

    const [boxInfo, setBOxInfo] = useState(initialBoxInfo)
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return(
        <div className='form-container'>
            <h1>insertForm</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label >Name</label>
                <input type='text' name='name' id='name' value={boxInfo.name}/>
            </div>
            <div>
                <label >Weight</label>
                <input type='number' name='weight' id='weight' value={boxInfo.weight}/>
            </div>
            <div>
            
                <label >Box Color </label>
                <ColorPicker colourRGB= {initialBoxInfo.colour} onChange={colourRGB =>{ 
                    console.log(colourRGB)
                    setBOxInfo({...boxInfo,
                                colour:{
                                    ...boxInfo.colour,
                                    r:colourRGB.r,
                                    g:colourRGB.g,
                                    b:colourRGB.b
                                }})}}/>
                <h2>
            {JSON.stringify(boxInfo)}
        </h2>
            </div>
            
        </form>
        
        </div>
       
    )
}

export default InsertForm