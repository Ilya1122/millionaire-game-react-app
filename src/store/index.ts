import { combineReducers, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "store/game/gameSlice";
import { IInitialState } from "store/game/gameTypes";

interface RootStates {
  game: IInitialState;
}

const rootState = combineReducers({
  game: gameReducer,
});

export const store: Store<RootStates> = configureStore({
  reducer: rootState,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),

  devTools: process.env.NODE_ENV !== "production",
});

// Store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
