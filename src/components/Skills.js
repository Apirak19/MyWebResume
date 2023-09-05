import React, { useContext } from "react";
import { UseStateContext } from "../contexts/ContextProvider";
import Skillbar from "./Skillbar";

import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import TranslateIcon from "@mui/icons-material/Translate";
import GitHubIcon from "@mui/icons-material/GitHub";

const Skills = () => {
    const { screenWidth } = useContext(UseStateContext);
    const skills = [
        {
            title: "JavaScript",
            level: "Intermediate",
            color: "purple",
            img: <JavascriptIcon sx={{ fontSize: "8rem" }} />,
            percent: "60%",
            guage: "2/3",
        },
        {
            title: "HTML",
            level: "Intermediate",
            color: "purple",
            img: <HtmlIcon sx={{ fontSize: "8rem" }} />,
            percent: "80%",
            guage: "4/5",
        },
        {
            title: "CSS",
            level: "Intermediate",
            color: "purple",
            img: <CssIcon sx={{ fontSize: "8rem" }} />,
            percent: "75%",
            guage: "4/5",
        },
        {
            title: "Git",
            level: "Beginner",
            color: "blue",
            img: <GitHubIcon sx={{ fontSize: "8rem" }} />,
            percent: "75%",
            guage: "4/5",
        },
        {
            title: "English",
            level: "Proficient",
            color: "red",
            img: <TranslateIcon sx={{ fontSize: "7rem" }} />,
            percent: "35%",
            guage: "1/2",
        },

    ];
    return (
        <section
            id="Skills"
            className={`section w-full overflow-hidden px-0 pt-10 pb-20
      ${screenWidth > 768 ? "pl-20 " : "pl-0"}
      bg-gradient-to-b from-deep-amber to-gold
      `}
        >
            <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
        Skills
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
