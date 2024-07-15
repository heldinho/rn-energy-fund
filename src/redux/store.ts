import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import fundReducer from "./fundSlide";
import articleReducer from "./articleSlide";
import companyReducer from "./companySlide";

export const store = configureStore({
  reducer: {
    user: userReducer,
    fund: fundReducer,
    article: articleReducer,
    company: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
