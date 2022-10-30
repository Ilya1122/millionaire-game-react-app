import React, { memo } from "react";

import Menu from "assets/image/menu.svg";
import CloseMenu from "assets/image/close.svg";

import "./index.scss";

interface BurgerProps {
  open: boolean;
  handleChangeOpen: () => void;
}

const Burger: React.FC<BurgerProps> = memo(({ handleChangeOpen, open }) => (
  <button
    onClick={handleChangeOpen}
    aria-label="menu"
    aria-expanded={open}
    className="burger"
  >
    <img src={open ? CloseMenu : Menu} alt="menu" />
  </button>
));

export default Burger;
