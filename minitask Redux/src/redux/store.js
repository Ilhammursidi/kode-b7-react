import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slice/slice"
const store = configureStore({
    reducer : {
        survey: surveyReducer
    }
});

export default store;