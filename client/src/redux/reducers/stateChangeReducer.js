import {INPUT_CHANGED, COLOUR_CHANGED, NEGATIVE_WEIGHT_ENTERED} from "../actions/actionType"

const initialState = {
    name: '',
    weight: 2,
    colour:{
        r:25,
        g:25,
        b:0
    },
    country : 'Sweden',
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case INPUT_CHANGED:
            return {
                ...state,
               [action.payload.target.name] : action.payload.target.value 
            }
        case COLOUR_CHANGED:
            return {
                ...state,
                colour:{
                    ...state.colour,
                    r:action.payload.r,
                    g:action.payload.g,
                    b:action.payload.b 
                      }
            }
        case NEGATIVE_WEIGHT_ENTERED:
            return {
                ...state,
                weight:'0'
            }
        default:
             return state
    }
}



export default reducer