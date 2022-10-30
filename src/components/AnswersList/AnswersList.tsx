import React, { memo } from "react";

import { IQuestion } from "store/game/gameTypes";

import AnswerButton from "components/AnswerButton";

import "./index.scss";

interface AnswersListProps {
  activeQuestion: IQuestion;
  addCorrect: (isCorrect: boolean) => void;
}

const AnswersList: React.FC<AnswersListProps> = memo(
  ({ activeQuestion, addCorrect }) => (
    <div className="answers__list">
      {activeQuestion.answers.map((answer, index) => (
        <AnswerButton
          key={answer.answer}
          addCorrect={addCorrect}
          answer={answer}
          index={index}
        />
      ))}
    </div>
  )
);

export default AnswersList;
