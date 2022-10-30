import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetGame, selectQuestion } from "store/game/gameSlice";
import { useRedirectRoutes } from "hooks/useRedirectRoutes";

import Button from "components/Button";

import "./index.scss";

const GameEnd: React.FC = () => {
  const { activeReward } = useSelector(selectQuestion);
  const { redirectToStartGame } = useRedirectRoutes();
  const dispatch = useDispatch();

  const handleResetGame = (): void => {
    dispatch(resetGame());
    redirectToStartGame();
  };

  return (
    <>
      <h3 className="title__end">Total score:</h3>
      <h2 className="subTitle__end">${activeReward} earned</h2>

      <Button onClick={handleResetGame}>Try again</Button>
    </>
  );
};

export default GameEnd;
