import axios from 'axios'

export const sendSaveBoxInfoRequest = (boxInfo) => {
    axios.post('http://localhost:5000/addBox', boxInfo)
}