import React from "react";
import DynamicText from "./DynamicText";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
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
       
      <h1 className="text-3xl font-bold text-gray-dark py-10">by</h1>

      <div className="home-contacts">
      <h1 className="text-5xl font-bold text-black p-5">Apirak Fakin</h1>

      <div className="social-links flex justify-center p-5">
        {socialLink.map((item) => {
          return (
            <a href={item.link} className="twitter">
              {item.icon}
            </a>
          );
        })}
      </div>

      </div>
    </section>
  );
};

export default Home;
