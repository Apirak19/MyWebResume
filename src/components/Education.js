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
                            className={`content  w-4/5
          ${
                    screenWidth < 1256
                        ? "flex flex-col justify-center"
                        : "grid grid-cols-2"
                    }`}
                        >
                            <div
                                className={`flex-1
              ${
                    screenWidth < 1256
                        ? "flex flex-col items-center justify-center"
                        : "row-span-1 col-span-1 w-full"
                    }`}
                            >
                                <img
                                    src={item.img}
                                    className="w-2/3 rounded-full shadow-2xl m-5"
                                    alt=""
                                />
                            </div>
                            <div
                                className={`text-format w-full
                ${
                    screenWidth < 1256
                        ? "flex flex-col items-center justify-center"
                        : "row-span-1 col-span-1 "
                    }`}
                            >
                                <div
                                    className={`text-content w-full h-full flex flex-col
                  ${screenWidth < 1256 ? " justify-center" : ""}`}
                                >
                                    <h3
                                        className={`text-2xl font-bold text-true-gray uppercase pt-5 pb-1
                  ${screenWidth < 1256 ? " text-center mt-5" : "text-start"}
                  ${screenWidth < 410 ? "text-2xl text-center mt-5" : ""}`}
                                    >
                                        {item.name}
                                    </h3>

                                    <h4
                                        className={`text-2xl font-bold text-true-gray uppercase
                  ${screenWidth < 1256 ? " text-center" : "text-start"}
                  ${screenWidth < 410 ? "text-2xl text-center" : ""}`}
                                    >
                                        {item.gradYear}
                                    </h4>
                                    <div
                                        className={`flex flex-col 
                  ${screenWidth < 1256 ? " justify-center" : "text-start"}
                  ${screenWidth < 600 ? " text-base" : "text-xl font-extrabold"}
                  `}
                                    >
                                        <p className="   mt-3">{item.grad}</p>

                                        <p className="  ">{item.major}</p>

                                        <p className=" ">{item.minor}</p>

                                        <p className="  ">GPA: {item.gpa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Education;
