import React, { useContext, useState } from "react";
import { UseStateContext } from "../contexts/ContextProvider";
import { Tooltip } from "react-tooltip";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MenuButton = () => {
  const { showNav, setShowNav, screenWidth } = useContext(UseStateContext);
  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <>
      <button
        className={`bg-gray-light text-gray-dark rounded-full flex items-center
         z-50 overflow-hidden
        hover:bg-true-gray hover:text-white cursor-pointer
        ${screenWidth <= 768 ? "fixed p-2 right-3 top-3" : "hidden"}
        `}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Menu"
        onClick={toggleNav}
      >
        {showNav ? (
          <CloseIcon sx={{ fontSize: "2rem" }} />
        ) : (
          <MenuIcon sx={{ fontSize: "2rem" }} />
        )}
      </button>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default MenuButton;
