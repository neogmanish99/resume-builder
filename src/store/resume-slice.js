import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    fields: [],
  },
  reducers: {
    submitData(state, action) {
      state.fields = action.payload;
    },
  },
});

export const resumeActions = resumeSlice.actions;
export default resumeSlice;
