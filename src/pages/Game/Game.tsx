import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectQuestion,
  setStatus,
  addCorrect,
  setOpenMenu,
} from "store/game/gameSlice";
import { useCheckStatusGame } from "hooks/useCheckStatusGame";

import AnswersList from "components/AnswersList";
import Burger from "components/Burger";
import Menu from "components/Menu";

import "./index.scss";

const Game: React.FC = () => {
  const { numberQuestion, questions, openMenu } = useSelector(selectQuestion);

  const dispatch = useDispatch();

  const activeQuestion = useMemo(
    () => questions[numberQuestion],
    [numberQuestion, questions]
  );

  const handleChangeOpen = useCallback(() => {
    dispatch(setOpenMenu(!openMenu));
  }, [dispatch, openMenu]);

  const handleAddCorrect = useCallback(
    (isCorrected: boolean): void => {
      setTimeout(() => {
        if (isCorrected) {
          dispatch(addCorrect());
        } else {
          dispatch(setStatus("END"));
        }
      }, 2000);
    },
    [dispatch]
  );

  useCheckStatusGame();

  return (
    <div className="game">
      <Burger open={openMenu} handleChangeOpen={handleChangeOpen} />

      <div className="game__wrapper">
        <h1 className="game__question">{activeQuestion.question}</h1>

        <AnswersList
          addCorrect={handleAddCorrect}
          activeQuestion={activeQuestion}
        />
      </div>

      <Menu open={openMenu} />
    </div>
  );
};

export default Game;
