import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store";

import { isEqual } from "helpers";
import { rewards } from "helpers/constants";
import questions from "data/questions.json";

import { IInitialState, Status } from "./gameTypes";

const initialState: IInitialState = {
  status: "START",
  questions,
  numberQuestion: 0,
  countCorrect: 0,
  activeReward: "0",
  openMenu: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    addCorrect: (state) => {
      state.countCorrect += 1;

      if (
        isEqual(questions[state.numberQuestion].answers, state.countCorrect)
      ) {
        if (state.numberQuestion === 11) {
          state.status = "END";
          state.activeReward = rewards[state.numberQuestion];
          state.numberQuestion = 0;

          return;
        }

        state.activeReward = rewards[state.numberQuestion];
        state.countCorrect = 0;
        state.numberQuestion += 1;
      }
    },

    resetGame: (state) => {
      state.status = "GAME";
      state.numberQuestion = 0;
      state.activeReward = "0";
      state.countCorrect = 0;
    },

    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },

    setReward: (state, action: PayloadAction<string>) => {
      state.activeReward = action.payload;
    },

    setOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
  },
});

export const { resetGame, setStatus, addCorrect, setReward, setOpenMenu } =
  gameSlice.actions;

export default gameSlice.reducer;

export const selectQuestion = (state: RootState): IInitialState => state.game;
