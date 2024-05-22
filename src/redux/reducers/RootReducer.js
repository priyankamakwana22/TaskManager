import { combineReducers } from "redux";
import registerReducer from "./RegisterReducer";
import authReducer from "./AuthReducer";


const rootReducer = combineReducers({ registerReducer, authReducer})

export default rootReducer;