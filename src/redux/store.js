import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add `thunk` to default middleware
  devTools: composeWithDevTools({
    trace: true,
  }),
});

export default store;
