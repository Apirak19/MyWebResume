import React, { useContext } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { UseStateContext } from "../contexts/ContextProvider";

const Experience = () => {
  const { screenWidth } = useContext(UseStateContext);
  const workRes = [
    {
      content: `Facilitate effective coordination among teams and departments`,
    },
    {
      content: `Maintain a comprehensive database containing data and activities related to foreign affairs`,
    },
    {
      content: `Perform accurate translation of written materials from Thai to English and vice versa`,
    },
    {
      content: `Summarize minutes of meetings involving international collaboration`,
    },
    {
      content: `Prepare relevant materials for cooperative negotiations with foreign countries`,
    },
  ];
  return (
    <section
      id="Experience"
      className={`section w-full overflow-hidden px-0 pt-10
      ${screenWidth > 768 ? "pl-20 " : "pl-0"}
      bg-gradient-to-b from-amber to-deep-amber
      `}
    >
      <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
        Experience
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
              ? "flex flex-col-reverse justify-center"
              : "grid grid-cols-3"
          }`}
        >
          <div
            className={` 
              ${
                screenWidth < 1100
                  ? "self-center"
                  : "row-span-1 col-span-1 w-full"
              }`}
          >
            <img
              src="/images/dsdw-logo.jpg"
              className="w-2/3 rounded-full shadow-2xl m-5"
              alt=""
            />
          </div>
          <div
            className={`text-format
                ${
                  screenWidth < 1100
                    ? "flex flex-col items-center justify-center"
                    : "row-span-1 col-span-2 w-full"
                }`}
          >
            <div
              className={`text-content h-full flex flex-col items-start justify-center `}
            >
              <h3
                className={`text-2xl font-bold text-true-gray uppercase pb-1
                  ${screenWidth < 1100 ? " text-center mt-5" : ""}
                  ${screenWidth < 410 ? "text-2xl text-center mt-5" : ""}`}
              >
                Foreign Relation Officer
              </h3>
              <h3
                className={`text-2xl font-bold text-true-gray uppercase pb-1
                  ${screenWidth < 1100 ? " text-center mt-5" : ""}
                  ${screenWidth < 410 ? "text-2xl text-center mt-5" : ""}`}
              >
                Department of Social Development and Welfare
              </h3>
              <h3 className="text-2xl font-bold text-gray-dark mb-3">
                (2020-present)
              </h3>

              {workRes.map((item) => {
                return (
                  <p className="text-base text-start">
                    <ChevronRightIcon />
                    {item.content}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
