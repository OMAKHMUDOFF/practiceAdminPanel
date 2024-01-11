import { createSlice } from "@reduxjs/toolkit";

const mainData = {
  data: [],
};

const MainSlice = createSlice({
  name: "main",
  initialState: mainData,
  reducers: {
    getApiData: (state, { payload }) => {
      state = { ...state, data: payload };
      return state;
    },
  },
});

export const { getApiData } = MainSlice.actions;
export default MainSlice.reducer;
