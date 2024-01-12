import { createSlice } from "@reduxjs/toolkit";

const mainData = {
  data: [],
  crud: [],
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
    getApiCrud: (state, { payload }) => {
      state = { ...state, crud: payload };
      return state;
    },
    sendApi: (state, { payload }) => {
      state = { ...state, crud: [...crud, payload] };
    },
  },
});

export const { getApiData, getApiCrud, sendApi } = MainSlice.actions;
export default MainSlice.reducer;
