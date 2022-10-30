import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import Hand from "assets/image/hand.png";

import "./index.scss";

const MainLayout: React.FC = memo(() => (
  <main className="layout">
    <div className="layout__start">
      <img className="layout__image" src={Hand} alt="hand" />

      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  </main>
));

export default MainLayout;
