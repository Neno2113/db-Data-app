import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { employeeReducer } from "./employeeReducer";
import { uiReducer } from "./uiReducer";




export const rootReducer = combineReducers({
    auth: authReducer,
    employee: employeeReducer,
    ui: uiReducer
})