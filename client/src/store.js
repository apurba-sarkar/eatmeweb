import {configureStore} from "@reduxjs/toolkit"
import dishReducer from "./reducers/dishSlice"

const store = configureStore({
    reducer:{
        dish:dishReducer,
    }
})
export default store;