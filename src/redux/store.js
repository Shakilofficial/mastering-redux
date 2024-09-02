import { configureStore } from "@reduxjs/toolkit";
// import myLogger from "./middlewares/myLogger";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: composeWithDevTools((getDefaultMiddleware) => getDefaultMiddleware().concat(logger)),
  // Add custom middleware
});
export default store;
