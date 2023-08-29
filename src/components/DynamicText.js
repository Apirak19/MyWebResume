import React, { useState, useEffect } from "react";

const DynamicText = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const typeItem = ["Welcome", "to", "my", "Web-Resume"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeIndex((prevIndex) => (prevIndex + 1) % typeItem.length);
    }, 1000);
    return () => clearInterval(interval);
  });
  return <p className="text-5xl p-5"> {typeItem[typeIndex]}</p>;
};

export default DynamicText;
