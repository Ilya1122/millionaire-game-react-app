export type Status = "START" | "GAME" | "END";

export interface IAnswer {
  correct: boolean;
  answer: string;
}

export interface IQuestion {
  answers: IAnswer[];
  question: string;
}

export interface IInitialState {
  status: Status;
  numberQuestion: number;
  questions: IQuestion[];
  countCorrect: number;
  activeReward: string;
  openMenu: boolean;
}
