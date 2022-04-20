import * as actionType from './actionType'
import * as api from '../../api'

export const WaitingForResponse = () => {
    return {
        type: actionType.WAITING_FOR_RESPONSE
    }
}


export const saveBoxInfo = (boxInfo) => {
    return {
        type: actionType.SAVE_BOX_INFO_SUCCESSFULLY,
        payload: boxInfo
    }
}

export const getBoxLists = (shippingLists) => {
    return {
        type: actionType.GET_BOX_LIST,
        payload: shippingLists
    }
}

export const errorReceived = (error) => {
    return {
        type: actionType.ERROR_RECEIVED,
        payload: error
    }
}

export const addBox = (boxInfo) => async(dispatch) => {
    dispatch(WaitingForResponse)
    try{
        await api.sendSaveBoxInfoRequest(boxInfo)
        dispatch(saveBoxInfo)
    }catch(error) {
        dispatch(errorReceived(error.message))
    }
    
      //  dispatch(saveBoxInfo())
       // console.log(response)
  //  })
    

}