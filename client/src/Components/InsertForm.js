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
        country : 'Sweden',
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
                <input type='text' name='name' id='name' onChange={event =>{
                    setBOxInfo({
                        ...boxInfo,name: event.target.value
                    })
                    console.log(boxInfo)
                }} value={boxInfo.name}/>
            </div>
            <div>
                <label >Weight</label>
                <input type='number' name='weight' id='weight' value={boxInfo.weight} onChange={event =>{
                    setBOxInfo({...boxInfo,weight: event.target.value})
                }}/>
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
                                }
                                })
                                console.log(boxInfo)
                                }}/>
                
                <h2>{JSON.stringify(boxInfo)} </h2>
            </div>
            <div>
                <select value= {boxInfo.country} onChange={ event => {
                    setBOxInfo({...boxInfo, country: event.target.value})
                }}>
                    
                    <option value="China">China</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Australia">Australia</option>
                    <option value="Brazil">Brazil</option>
                </select>
            </div>
            
        </form>
        
        </div>
       
    )
}

export default InsertForm