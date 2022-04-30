import {addGatewayReducer, getGatewayReducer} from "./reducers/gatewayReducers"
import { combineReducers } from "redux"

export default combineReducers({
    addGatewayReducer,
    getGatewayReducer
})