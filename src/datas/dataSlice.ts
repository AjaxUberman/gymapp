import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface dataState {
  firstSelection: string | null;
}

// Define the initial state using that type
const initialState: dataState = {
  firstSelection: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFirstData: (state, action: PayloadAction<string>) => {
      state.firstSelection = action.payload;
    },
  },
});

export const { setFirstData } = dataSlice.actions;
export default dataSlice.reducer;
