import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import "./index.scss";

const GameLayout: React.FC = memo(() => (
  <main className="layout__game">
    <Outlet />
  </main>
));

export default GameLayout;
