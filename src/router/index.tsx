import { createBrowserRouter, Navigate } from "react-router-dom";

import { routePath } from "./route-path";

import GameStart from "pages/GameStart";
import Game from "pages/Game";
import GameEnd from "pages/GameEnd";

import MainLayout from "layouts/MainLayout";
import GameLayout from "layouts/GameLayout";

export const router = createBrowserRouter([
  {
    path: routePath.START,
    element: <MainLayout />,
    children: [
      {
        path: routePath.START,
        element: <GameStart />,
      },
      {
        path: routePath.END,
        element: <GameEnd />,
      },
    ],
  },
  {
    element: <GameLayout />,
    path: routePath.GAME,
    children: [
      {
        path: routePath.GAME,
        element: <Game />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
