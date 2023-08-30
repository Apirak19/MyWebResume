import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const typeItem = ["M ","MY ", "MY W", "MY WE", "MY WEB", "MY WEB-", 'MY WEB-R','MY WEB-RE','MY WEB-RES','MY WEB-RESU','MY WEB-RESUM','MY WEB-RESUME'];
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prevIndex) => (prevIndex + 1) % typeItem.length);
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <p
      className="text-7xl p-5 py-10 uppercase text-white font-extrabold
    sm:text-5xl xs:text-9xl"
    >
      {typeItem[typeIndex]}
    </p>
  );
};

export default DynamicText;
