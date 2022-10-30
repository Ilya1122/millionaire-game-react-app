import React, { memo } from "react";

import { useDeviceSize } from "hooks/useDiviceSize";

import RewardsList from "components/RewardsList";

import "./index.scss";

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = memo(({ open }) => {
  const width = useDeviceSize();

  if (width < 1200) {
    return (
      <div className={`menu ${open ? "menu__open" : ""}`}>
        <RewardsList />
      </div>
    );
  }

  return <RewardsList />;
});

export default Menu;
