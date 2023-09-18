import React, { useContext, useState } from "react";
import { UseStateContext } from "../contexts/ContextProvider";
import DynamicText from "./DynamicText";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "react-tooltip";

const Home = () => {
  const { screenWidth } = useContext(UseStateContext);
  const [hoverTextIndex, setHoverTextIndex] = useState(null)
  const [hoverIconIndex, setHoverIconIndex] = useState(null)
  
  const NameText = "Apirak Fakin"
  const NameString = NameText.split("")
  console.log("name:", NameString);
  const ShowName = NameString.join("")
  console.log("linkedname:", ShowName);

  const socialLink = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/",
      icon: <FacebookIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Instragam",
      link: "https://www.instragam.com/",
      icon: <InstagramIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Twitter(X)",
      link: "https://www.twitter.com/",
      icon: <TwitterIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "GitHub",
      link: "https://github.com/Apirak19",
      icon: <GitHubIcon sx={{ fontSize: "3rem" }} />,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/",
      icon: <LinkedInIcon sx={{ fontSize: "3rem" }} />,
    },
  ];
  
  
  return (
    <section
      id="Home"
      className="flex flex-col justify-center w-full h-screen overflow-hidden py-16 px-0 bg-gradient-to-b from-teal-accent to-cyan
      "
    >
      <DynamicText />

      <h1 className="font-bold text-gray-dark py-10 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl">
        by
      </h1>

      <div className="home-contacts">
        <h1 className={`NameText font-bold text-black p-5 
        2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl`}>
          {NameString.map((letter, index) => (
            <span
              key={index}
              className={`inline-block cursor-pointer m-1 transition-transform ease-out duration-75 ${hoverTextIndex === index ? `transform scale-150` : ``}`}
              onMouseOver={()=>setHoverTextIndex(index)}
              onMouseOut={()=>setHoverTextIndex(null)}
          >
            {letter}
          </span>
          ))}
        </h1>

        <div className="social-links flex justify-center p-5">
          {socialLink.map((item, index) => {
            return (
              <>
                <a
                  key={item.title}
                  href={item.link}
                  className={`mx-2 cursor-pointer transition-transform ease-out ${hoverIconIndex === index ? ` transform scale-150` : ``}`}
                  onMouseOver={()=>setHoverIconIndex(index)}
                  onMouseOut={()=>setHoverIconIndex(null)}
                  data-tooltip-id="socialMedia"
                        data-tooltip-content={item.title}
                        target="_blank"
                >
                  {item.icon}
                </a>
                <Tooltip id="socialMedia" place="bottom"/>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
