import { configureStore } from "@reduxjs/toolkit";
import Ui from "./Ui";

const store = configureStore({
  reducer: {
    UI: Ui,
  },
});

export default store;
