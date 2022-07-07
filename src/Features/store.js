import { configureStore } from "@reduxjs/toolkit";
import passangerSlice from "../Features/PassngerSlice";
const store = configureStore({
  reducer: {
    passangerSlice,
  },
});

export default store;
