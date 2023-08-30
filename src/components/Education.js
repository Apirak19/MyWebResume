import React, { useContext } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { UseStateContext } from "../contexts/ContextProvider";

const Education = () => {
  const { screenWidth } = useContext(UseStateContext);
  const eduData = [
    {
      name: "Silpakorn University",
      gradYear: "(2017-2020)",
      grad: "Bachelor of Arts",
      major: "English Major",
      minor: "Information and Technology Minor",
      gpa: "3.21",
      img: "images/SU.png",
    },
    {
      name: "Phrapathom Witthayalai School",
      gradYear: "(2012-2017)",
      grad: "High School Diploma",
      major: "Science and Mathematics Program",
      gpa: "3.39",
      img: "images/PT.png",
    },
  ];
  return (
    <section
      id="Education"
      className={`section w-full overflow-hidden px-0 pt-10
      ${screenWidth > 768 ? "pl-20 " : "pl-0"}
      bg-gradient-to-b from-deep-green to-amber
      `}
    >
      <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
        Education
      </h2>

      {eduData.map((item) => {
        return (
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
              : "grid grid-cols-2"
          }`}
            >
              <div
                className={`text-format
                ${
                  screenWidth < 1100
                    ? "flex flex-col items-center justify-center"
                    : "row-span-1 col-span-1 w-full"
                }`}
              >
                <div
                  className={`text-content flex flex-col items-start`}
                >
                  <h3
                    className={`text-2xl font-bold text-true-gray uppercase px-5 pb-3
                  ${screenWidth < 1100 ? " text-center mt-5" : ""}
                  ${screenWidth < 410 ? "text-2xl text-center mt-5" : ""}`}
                  >
                    {item.name}
                  </h3>

                  <p className="font-extrabold">{item.gradYear}</p>

                  <p className="font-extrabold">{item.grad}</p>

                  <p className="font-extrabold">{item.major}</p>

                  <p className="font-extrabold">{item.minor}</p>

                  <p className="font-extrabold">{item.gpa}</p>
                </div>
              </div>
              <div
                className={` 
              ${
                screenWidth < 1100
                  ? "self-center"
                  : "row-span-1 col-span-1 w-full"
              }`}
              >
                <img
                  src={item.img}
                  className="w-2/3 rounded-full shadow-2xl m-5"
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
