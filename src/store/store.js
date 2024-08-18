import { authService } from "@/services/authService";
import { bookService } from "@/services/bookService";
import { widgetService } from "@/services/widgetService";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    // Add reducers here
    [authService.reducerPath]: authService.reducer,
    [bookService.reducerPath]: bookService.reducer,
    [widgetService.reducerPath]: widgetService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authService.middleware,
      bookService.middleware,
      widgetService.middleware,
    ]),
  // devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

setupListeners(store.dispatch);
