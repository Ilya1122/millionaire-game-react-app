import { useNavigate } from "react-router-dom";

import { routePath } from "router/route-path";

interface HookReturnType {
  redirectToStartGame: () => void;
  redirectToEndGame: () => void;
  redirectToGame: () => void;
}

export const useRedirectRoutes = (): HookReturnType => {
  const navigate = useNavigate();

  const redirectToStartGame = (): void => navigate(routePath.GAME);
  const redirectToEndGame = (): void => navigate(routePath.END);
  const redirectToGame = (): void => navigate(routePath.GAME);

  return {
    redirectToStartGame,
    redirectToEndGame,
    redirectToGame,
  };
};
