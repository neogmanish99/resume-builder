import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resume-slice";

const store = configureStore({
  reducer: {
    resume: resumeSlice.reducer,
  },
});

export default store;
