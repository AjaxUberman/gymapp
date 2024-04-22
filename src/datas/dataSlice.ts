import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  firstSelection: string | null;
  secondSelection: string | null;
  weight: string | null;
  height: string | null;
  bmr: string | null;
}

const initialState: dataState = {
  firstSelection: null,
  secondSelection: null,
  weight: null,
  height: null,
  bmr: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFirstData: (state, action: PayloadAction<string>) => {
      state.firstSelection = action.payload;
    },
    setSecondData: (state, action: PayloadAction<string>) => {
      state.secondSelection = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
      state.weight = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload;
    },
    setBmr: (state, action: PayloadAction<string>) => {
      state.bmr = action.payload;
    },
  },
});

export const { setFirstData, setSecondData, setWeight, setBmr, setHeight } =
  dataSlice.actions;
export default dataSlice.reducer;
