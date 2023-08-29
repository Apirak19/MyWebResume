import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const typeItem = ["A", "P", "I", "R", "A", 'k'];
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prevIndex) => (prevIndex + 1) % typeItem.length);
    }, 800);
    return () => clearInterval(interval);
  });
  return (
    <p
      className="text-7xl p-5 mb-16 uppercase text-light-blue-accent
    sm:text-5xl xs:text-9xl"
    >
      {typeItem[typeIndex]}
    </p>
  );
};

export default DynamicText;
