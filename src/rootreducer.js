import { combineReducers } from "redux";
import { alertReducer } from "./reducers/alertreducer";
import { registerReducer } from "./reducers/registerreducer";
import { profileReducer } from "./reducers/profilereducer";
import { postReducer } from "./reducers/postreducer";

export default combineReducers({
alertReducer,
registerReducer,
profileReducer,
postReducer
})