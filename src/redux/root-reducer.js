// Root Reducer is the actual Base Reducer that all other reducers flow into
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});