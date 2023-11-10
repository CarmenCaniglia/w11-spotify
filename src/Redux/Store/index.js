import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../Reducers/Player";

const store = configureStore({
  reducer: playerReducer,
});

export default store;
