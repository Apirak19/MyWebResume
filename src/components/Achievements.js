import React, { useContext } from "react";
import Skillbar from "./Skillbar";
import { UseStateContext } from "../contexts/ContextProvider";

import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AnimationIcon from '@mui/icons-material/Animation';

const Skills = () => {
  const { screenWidth } = useContext(UseStateContext);
  const skills = [
    {
      title: "Hello World!",
      level: "Common",
      color: "green",
      img: <WavingHandIcon sx={{ fontSize: "8rem" }} />,
      percent: "95%",
      guage: "5/6",
    },
    {
      title: "Make it flex",
      level: "Uncommon",
      color: "blue",
      img: <IntegrationInstructionsIcon sx={{ fontSize: "8rem" }} />,
      percent: "80%",
      guage: "4/5",
    },
    {
      title: "Move! Move!",
      level: "Rare",
      color: "purple",
      img: <AnimationIcon sx={{ fontSize: "8rem" }} />,
      percent: "50%",
      guage: "1/2",
    },
    {
      title: "TOEIC 950/990",
      level: "Rare",
      color: "purple",
      img: <img src="/images/toeic-logo.jpg"  className="rounded-full p-1"/>,
      percent: "35%",
      guage: "1/3",
    },

  ];
  return (
    <section
      id="Achievements"
      className={`section w-full overflow-hidden px-0 pt-10 pb-20
      ${screenWidth > 768 ? "pl-20 " : "pl-0"}
      bg-gradient-to-b from-deep-amber to-gold
      `}
    >
      <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
      Achievements
      </h2>

      <div
        className="section-bg m-5 p-5 rounded-xl shadow-2xl 
          flex flex-col justify-center items-center
          bg-white "
      >
        <div
          className={`content  w-full
          ${
            screenWidth < 1100
              ? "flex justify-center items-center flex-wrap"
              : "flex justify-center items-center flex-wrap"
          }`}
        >
          {skills.map((item) => {
            return (
              <div className="m-2">
                <Skillbar
                  title={item.title}
                  level={item.level}
                  color={item.color}
                  img={item.img}
                  percent={item.percent}
                  guage={item.guage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
