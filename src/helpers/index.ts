import { rewards } from "helpers/constants";

import { IAnswer } from "store/game/gameTypes";

export const getRewards = (): number[] => {
  const sortingRewards = rewards.map((reward) => +reward).sort((a, b) => b - a);

  return sortingRewards;
};

export const setClassByCorrect = (isCorrect: boolean): string => {
  if (isCorrect) {
    return "correct";
  }

  return "wrong";
};

export const isEqual = (answers: IAnswer[], count: number): boolean => {
  const correctedCount = answers.filter((answer) => answer.correct).length;

  return correctedCount === count;
};

export const getStyleByReward = (
  activeReward: number,
  reward: number
): string => {
  if (activeReward === reward) {
    return "active";
  }

  if (+activeReward > +reward) {
    return "disabled";
  }

  return "";
};
