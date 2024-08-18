import { authService } from "@/services/authService";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    // Add reducers here
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authService.middleware]),
});

setupListeners(store.dispatch);
