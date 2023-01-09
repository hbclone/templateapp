import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorMode {
  mode: boolean;
}
const ColorSlice = createSlice({
  name: "colorMode",
  initialState: {
    mode: false,
  } as ColorMode,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { changeMode } = ColorSlice.actions;
export default ColorSlice.reducer;
