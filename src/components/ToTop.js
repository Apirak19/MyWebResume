import React from "react";
import { Tooltip } from "react-tooltip";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Link } from "react-scroll";

const ToTop = () => {
  return (
    <Link to="Home" smooth={true} offset={10} duration={500}>
      <button
        className="bg-gray-light text-gray-dark rounded-full flex items-center
         z-50 overflow-hidden
        hover:bg-true-gray hover:text-white cursor-pointer
        fixed p-2 right-3 bottom-8 shadow-button"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Back to Top"
      >
        <KeyboardDoubleArrowUpIcon />
      </button>
      <Tooltip id="my-tooltip" />
    </Link>
  );
};

export default ToTop;
