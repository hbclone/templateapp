import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IMenu, IMenuItem } from "pages/api/interface/menu";

export const fetchMenu = createAsyncThunk("api/menus", async (_, thunkApi) => {
  try {
    const { status } = thunkApi.getState() as IMenu;
    const response = await axios.get("/menus");
    if (status === "succeeded") {
      return;
    }
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e);
  }
});

export const MenuSlice = createSlice({
  name: "Menu",
  initialState: {
    status: "",
    item: {} as IMenuItem[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMenu.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default MenuSlice.reducer;
