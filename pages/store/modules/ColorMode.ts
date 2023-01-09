import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColorMode {
  mode: string;
}
const ColorSlice = createSlice({
  name: "colorMode",
  initialState: {
    mode: "dark",
  } as ColorMode,
  reducers: {
    changeMode: (state, action: PayloadAction<ColorMode>) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { changeMode } = ColorSlice.actions;
export default ColorSlice.reducer;
