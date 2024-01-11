import { createSlice } from "@reduxjs/toolkit";

const mainData = {
  data: [],
};

const MainSlice = createSlice({
  name: "main",
  initialState: mainData,
  reducers: {
    getApiData: (state, { payload }) => {
      let { bSellersApi, bOffersApi, goodsApi } = payload;
      state = { ...state, data: [...bSellersApi, ...bOffersApi, ...goodsApi] };
      return state;
    },
  },
});

export const { getApiData } = MainSlice.actions;
export default MainSlice.reducer;
