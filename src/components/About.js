import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const About = () => {
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
  ];
  const data2 = [
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
      className="about w-full h-screen overflow-hidden py-10 px-0"
    >
      <div
        className="container"
        // data-aos="fade-up"
      >
        <div className="section-title">
          <h2 className="text-3xl font-bold uppercase mb-5 mt-5 relative">
            About
          </h2>
        </div>

        <div className="flex w-full">
          <div className="px-4">
            <img src="images/portrait.jpg" className="w-full " alt="img" />
          </div>

          <div className="flex flex-col text-start">
            <h3 className="relative text-2xl font-bold text-true-gray">
              Web Developer
            </h3>
            <p className="italic mt-3 mb-3">
              Innovative and deadline-driven Graphic Designer with 3+ years of
              experience designing and developing user-centered digital/print
              marketing material from initial concept to final, polished
              deliverable.
            </p>

            <div className="flex">
              <div className="lg:w-1/2">
                <ul>
                  {data1.map((item) => {
                    return (
                      <li>
                        <ChevronRightIcon /> <strong>{item.title}</strong>
                        <span>{item.content}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="lg:w-1/2">
                <ul>
                  {data2.map((item) => {
                    return (
                      <li>
                        <ChevronRightIcon /> <strong>{item.title}</strong>
                        <span>{item.content}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p>
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
