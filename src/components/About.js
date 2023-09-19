import React, { useContext } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { UseStateContext } from "../contexts/ContextProvider";

const About = () => {
  const { screenWidth } = useContext(UseStateContext);
  const data1 = [
    {
      title: "Birthday:",
      content: "February 19, 1998",
    },
    {
      title: "Age:",
      content: "25",
    },
    {
      title: "City:",
      content: "Nakhon Pathom, Thailand",
    },
    {
      title: "Phone:",
      content: "+66 945531706",
    },
    {
      title: "Website:",
      content: "www.example.com",
    },
  ];

  return (
    <section
      id="About"
      className={`section w-full overflow-hidden px-0 pt-10 
      ${screenWidth > 768 ? "pl-20 pb-20" : "pl-0 pb-10"}
            bg-gradient-to-b from-cyan to-deep-green
      `}
    >
      <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
        About
      </h2>
      <div
        className="section-bg m-5 p-5 rounded-xl shadow-2xl 
                flex flex-col justify-center items-center
                bg-white "
      >
        <div
          className={`content-type text-start 
                    ${
                      screenWidth < 1100
                        ? "flex flex-col"
                        : "grid grid-rows-1 grid-cols-3"
                    }`}
        >
          <div className="row-span-1 col-span-1 w-full">
            <img
              src="images/portrait.jpg"
              className={`w-full ${
                screenWidth < 1100 ? "p-3 " : ""
              }`}
              alt="img"
            />
          </div>

          <div className="text-content row-span-1 col-span-2">
            <h3
              className={`text-4xl font-bold text-true-gray uppercase px-5 pb-3
                            ${screenWidth < 1100 ? " text-center mt-5" : ""}
                            ${
                              screenWidth < 410
                                ? "text-2xl text-center mt-5"
                                : ""
                            }`}
            >
              Web Developer
            </h3>
            <p
              className={`paragraph tracking-tighter
                        ${screenWidth < 1100 ? "px-0" : "px-5"}
                        ${screenWidth < 375 ? "text-sm" : "text-base"}`}
            >
              A dedicated graduate with a Bachelor of Arts and 3 years of
              experience as a Foreign Relations Officer.
            </p>
            <ul
              className={`list py-2 tracking-tighter
            ${screenWidth < 1100 ? "px-0 py-2" : "px-10"}
            ${screenWidth < 375 ? "text-sm" : "text-base"}`}
            >
              {data1.map((item) => {
                return (
                  <li key={item.name}>
                    <ChevronRightIcon />
                    <span className="font-extrabold">{item.title} </span>
                    <span>{item.content}</span>
                  </li>
                );
              })}
            </ul>
            <p
              className={`paragraph tracking-tighter
            ${screenWidth < 1100 ? "px-0 py-2" : "px-5"}
            ${screenWidth < 375 ? "text-sm" : "text-base"}`}
            >
              Driven by a passion for technology, I seek to leverage my
              problem-solving skills and international communication expertise
              and contribute to a collaborative and dynamic workplace
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
