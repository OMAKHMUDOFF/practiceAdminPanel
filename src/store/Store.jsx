import { configureStore } from "@reduxjs/toolkit";
import MainReducers from "./reducers/MainReducers";

const store = configureStore({
  reducer: {
    MainRex: MainReducers,
  },
});

export default store;
