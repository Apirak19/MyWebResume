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
      className="about w-full overflow-hidden py-2 px-0 border-4 border-blue"
    >
      <div className="w-full">
          <h2 className="text-5xl font-bold uppercase my-5">About</h2>

        <div
          className={`grid grid-rows-1 grid-cols-3 text-start mt-16
        ${screenWidth < 786 ? "flex flex-col" : ""} `}
        >
          <div className="row-span-1 col-span-1">
            <img src="images/portrait.jpg" className="w-full " alt="img" />
          </div>

          <div className="row-span-1 col-span-2">
            <h3 className="text-4xl font-bold text-true-gray uppercase px-10">
              Web Developer
            </h3>
            <p className="italic py-3 px-10">
              Innovative and deadline-driven Graphic Designer with 3+ years of
              experience designing and developing user-centered digital/print
              marketing material from initial concept to final, polished
              deliverable.
            </p>
            <ul>
              {data1.map((item) => {
                return (
                  <li className="pt-1 px-10">
                    <ChevronRightIcon />
                    <span className="font-extrabold">{item.title}</span>
                    <span>{item.content}</span>
                  </li>
                );
              })}
            </ul>
            <p className="py-3 px-10">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
