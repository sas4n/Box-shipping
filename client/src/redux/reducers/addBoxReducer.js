import { ERROR_RECEIVED, SAVE_BOX_INFO_SUCCESSFULLY, WAITING_FOR_RESPONSE } from "../actions/actionType"

const initialState = {
    loading: false,
    error:''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case WAITING_FOR_RESPONSE:
            return {
                ...state,
                loading: true
            }
        case SAVE_BOX_INFO_SUCCESSFULLY:
            return {
                ...state,
                loading: false
            }
        case ERROR_RECEIVED:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default reducer