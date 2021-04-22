import {createSlice} from "@reduxjs/toolkit";
import ExampleState from "../models/client/ExampleState";

const initialState: ExampleState = {
    example: "this is default example",
    exampleArray: [
        { 
            example: "this is default array example"
        }
    ]
}

export const exampleSlice = createSlice({
    name: "example",
    initialState: initialState,
    reducers: {
       ChangeExample: (state, action) => {
           state.example = action.payload
       }
    }
})


export const {ChangeExample} = exampleSlice.actions

export default exampleSlice.reducer;