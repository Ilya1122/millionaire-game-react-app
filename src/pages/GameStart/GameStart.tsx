import React from "react";

import { useRedirectRoutes } from "hooks/useRedirectRoutes";

import Button from "components/Button";

import "./index.scss";

const GameStart: React.FC = () => {
  const { redirectToStartGame } = useRedirectRoutes();

  return (
    <>
      <h1 className="game__title">Who wants to be a millionaire?</h1>

      <Button onClick={redirectToStartGame}>Start</Button>
    </>
  );
};

export default GameStart;
