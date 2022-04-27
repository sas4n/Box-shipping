import { combineReducers } from "redux"
import boxesInfo from "./saveAndGetDataReducer"
import boxInfo from './stateChangeReducer'

const reducer = combineReducers({
    boxesInfo,
    boxInfo
})

export default reducer