import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useRedirectRoutes } from "hooks/useRedirectRoutes";
import { selectQuestion } from "store/game/gameSlice";

export const useCheckStatusGame = (): void => {
  const { redirectToEndGame } = useRedirectRoutes();
  const { status } = useSelector(selectQuestion);

  useEffect(() => {
    if (status === "END") {
      redirectToEndGame();
    }
  }, [redirectToEndGame, status]);
};
