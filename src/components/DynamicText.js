import React, { useState, useEffect, useContext } from "react";
import { UseStateContext } from "../contexts/ContextProvider";

const DynamicText = () => {
  const { screenWidth } = useContext(UseStateContext);
  const [typeIndex, setTypeIndex] = useState(0);
  const typeItem = [
    "M ",
    "MY ",
    "MY W",
    "MY WE",
    "MY WEB",
    "MY WEB-",
    "MY WEB-R",
    "MY WEB-RE",
    "MY WEB-RES",
    "MY WEB-RESU",
    "MY WEB-RESUM",
    "MY WEB-RESUME",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prevIndex) => (prevIndex + 1) % typeItem.length);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <p
      className="p-5 py-10 uppercase text-white font-extrabold 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl
      "
    >
      {typeItem[typeIndex]}
    </p>
  );
};

export default DynamicText;
