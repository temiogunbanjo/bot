import { createSlice } from "@reduxjs/toolkit";
import { getAllSchools } from "../actions/general.action";

const initialState = {
  schools: {
    isLoading: false,
    data: [],
  },
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CLIENT LOGIN
    builder
      .addCase(getAllSchools.fulfilled, (state, { payload, ...rest }) => {
        console.log("fulfilled", state, payload);
        state.schools.isLoading = false;
        state.schools.data = payload;
      })
      .addCase(getAllSchools.pending, (state, action) => {
        state.schools.isLoading = true;
      })
      .addCase(getAllSchools.rejected, (state, { error }) => {
        console.log("rejected");
        state.schools.isLoading = false;
      });
  },
});

export default generalSlice;
