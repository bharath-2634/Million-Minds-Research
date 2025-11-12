import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import postReducer from "./post-slice";


const store = configureStore({
    reducer : {
        auth : authReducer,
        posts : postReducer
    }
})

export default store