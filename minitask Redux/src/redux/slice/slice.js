import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    survey: [],
    lastId: 0,
} 

const surveyRokok = createSlice({
    initialState,
    name: "survey",
    reducers: {
        addSmoker: (prevState,{payload}) => {
            return {
                ...prevState,
                survey: [
                    ...prevState.survey,
                    {
                        ...payload,
                        id: prevState.lastId + 1,
                    },
                ],
                lastId: prevState.lastId + 1,
            };
        },
        removeSmoker: (prevState,action) => {
            return {
                ...prevState,
                survey: prevState.survey.filter((rokok) => rokok.id !== action.payload),
            };  
        },
    }

}) 

export const { addSmoker, removeSmoker } = surveyRokok.actions

export default surveyRokok.reducer