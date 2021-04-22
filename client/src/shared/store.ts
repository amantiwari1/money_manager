import {configureStore} from "@reduxjs/toolkit";
import ExampleState from "../reducers/ExampleSlice";

export const store = configureStore({
  reducer: {
    ExampleState: ExampleState,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;