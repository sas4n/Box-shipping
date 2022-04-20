import axios from 'axios'

export const sendSaveBoxInfoRequest = (boxInfo) => {
   return axios.post('http://localhost:5000/api/addBox', boxInfo)
}