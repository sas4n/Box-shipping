import * as actionType from './actionType'

export const onInputChange = (event) => {
    return {
        type: actionType.INPUT_CHANGED,
        payload : event
    }
}
export const onColourChange = (event) => {
    return { 
        type: actionType.COLOUR_CHANGED,
        payload : event
    }
} 
export const onNegativeWeightEntered = () => {
    console.log('dispatched')
    return{
        type: actionType.NEGATIVE_WEIGHT_ENTERED
    }
}
