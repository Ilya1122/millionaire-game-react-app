import React, { useState, useCallback } from "react";

import { IAnswer } from "store/game/gameTypes";
import { setClassByCorrect } from "helpers";
import { alphabet } from "helpers/constants";

import AnswerButtonSVG from "components/SVG/AnswerButtonSVG";

import "./index.scss";

interface AnswerButtonProps {
  addCorrect: (isCorrect: boolean) => void;
  answer: IAnswer;
  index: number;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({
  addCorrect,
  answer,
  index,
}) => {
  const [activeStyle, setActiveStyle] = useState("");
  const latter = alphabet[index];

  const handleSelect = useCallback(() => {
    addCorrect(answer.correct);
    setActiveStyle("selected");

    setTimeout(() => {
      setActiveStyle(setClassByCorrect(answer.correct));
    }, 1000);
  }, [addCorrect, answer.correct]);

  return (
    <button
      disabled={!!activeStyle}
      className={`answer__button ${activeStyle}`}
      onClick={handleSelect}
    >
      <AnswerButtonSVG />

      <div className="answer__button__block">
        <span className="answer__button__letter">{latter}</span>
        <span className="answer__button__text">{answer.answer}</span>
      </div>
    </button>
  );
};

export default AnswerButton;
