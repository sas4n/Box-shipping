import reducer from '../stateChangeReducer'
import {INPUT_CHANGED, COLOUR_CHANGED, NEGATIVE_WEIGHT_ENTERED} from "../../actions/actionType"
const initialState = {
    name: '',
    weight: '',
    colour:{
        r:0,
        g:0,
        b:0
    },
    country : 'Sweden',
}

describe('StateChangeReducer', () => {

    it('should return the correct state for INPUT_CHANGED action when name changed', () => {
        
        const action = {type:INPUT_CHANGED, 
            payload:{
                target:{
                    name:'name',
                    value:'sasan'
                }
            }}
        const expectedNextState = {...initialState, name:'sasan'}
        const actualState = reducer(initialState, action)
        expect(actualState).toEqual(expectedNextState)
    })
    it('should return the correct state for INPUT_CHANGE action when weight change and initialstate doesnt change', () => {
        const action = {type:INPUT_CHANGED, 
            payload:{
                target:{
                    name:'weight',
                    value:'20'
                }
            }}
        const expectedNextState = {...initialState, weight:'20'}
        const actualState = reducer(initialState, action)
        expect(actualState).toEqual(expectedNextState)
        expect(initialState).toEqual( {
            name: '',
            weight: '',
            colour:{
                r:0,
                g:0,
                b:0
            },
            country : 'Sweden',
        })
    })
    it('should return the correct state for INPUT_CHANGE action when country change', () =>{
        const action = {type:INPUT_CHANGED, 
            payload:{
                target:{
                    name:'country',
                    value:'China'
                }
            }}
        const expectedNextState = {...initialState,country: 'China'}
        const actualState = reducer(initialState, action)
        expect(actualState).toEqual(expectedNextState)
    })
    it('should return the correct state for COLOUR_CHANGE action', () =>{
        const action = {
            type:COLOUR_CHANGED,
            payload:{
                r:20,
                g:20,
                b:20,
            }
        }
        const expectedNextState = {...initialState,
        colour: {
            ...initialState.colour,
            r:20,
            g:20,
            b:20,
        }}
        const actualState = reducer(initialState, action)
        expect(actualState).toEqual(expectedNextState)
    })
    it('should return the correct state for NEGATIVE_WEIGHT_ENTERED', () =>{
        const action = {type:NEGATIVE_WEIGHT_ENTERED}
        const expectedNextState = {...initialState, weight:'0'}
        const actualState = reducer(initialState, action)
        expect(actualState).toEqual(expectedNextState)
    })

})