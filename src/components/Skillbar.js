import React from "react";

const Skillbar = (skills) => {
  const { title, level, color, img, percent, guage } = skills;
  return (
    <div className="sm:w-full w-full p-2 bg-light-yellow rounded-4xl flex flex-col justify-center items-center shadow-photo hover:shadow-button cursor-pointer">
      <div className="skill-detail flex justify-center items-center w-full ">
        <div className="skill-icon rounded-4xl w-32 h-32 m-2 bg-navajowhite shadow-button">
          {img}
        </div>
        <div className="skill-text w-[65%] px-3 ">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold ">{title}</h1>
            <h2 className={`text-lg font-semibold text-${color}`}>({level})</h2>
          </div>
        </div>
      </div>

      <div className="skill-gauge w-[95%] flex justify-center items-center my-2">
        <div className="bg-cool-gray relative h-4 w-full rounded-2xl mx-2">
          <div
            className={`bg-light-blue-accent absolute top-0 left-0 flex h-full w-${guage} items-center justify-center rounded-2xl text-xs font-semibold text-white`}
          ></div>
        </div>
        <p className="text-red mx-2">{percent}</p>
      </div>
    </div>
  );
};

export default Skillbar;
