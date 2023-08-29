import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const typeItem = ["Welcome", "to", "my", "Web-Resume"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prevIndex) => (prevIndex + 1) % typeItem.length);
    }, 3000);
    return () => clearInterval(interval);
  });
  return <p> {typeItem[typeIndex]}</p>;
};

export default DynamicText;
