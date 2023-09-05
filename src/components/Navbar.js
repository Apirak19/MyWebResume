import React, { useState, useContext } from "react";
import { UseStateContext } from "../contexts/ContextProvider";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";

const Navbar = () => {
    const { showNav, screenWidth } = useContext(UseStateContext);
    const list = [
        {
            title: "Home",
            icon: <HomeIcon sx={{ fontSize: "2rem" }} />,
            link: "#Home",
        },
        {
            title: "About",
            icon: <PersonIcon sx={{ fontSize: "2rem" }} />,
            link: "#About",
        },
        {
            title: "Education",
            icon: <SchoolIcon sx={{ fontSize: "2rem" }} />,
            link: "#Education",
        },
        {
            title: "Experience",
            icon: <BusinessCenterIcon sx={{ fontSize: "2rem" }} />,
            link: "#Experience",
        },
        {
            title: "Skills",
            icon: <BuildIcon sx={{ fontSize: "2rem" }} />,
            link: "#Skills",
        },
        {
            title: "Achievements",
            icon: <EmojiEventsIcon sx={{ fontSize: "2rem" }} />,
            link: "#Achievements",
        },
    ];
    return (
        <nav
            className={`fixed top-0 left-0 bottom-0 p-15
        flex flex-col justify-center 
        transition-all duration-500 
        ${
        showNav
            ? screenWidth < 768
                ? "w-80 bg-white shadow-2xl"
                : "w-56 bg-none"
            : screenWidth < 768
                ? "w-0"
                : ""
        } `}
        >
            <div
                className={`
        transition-all duration-500  overflow-y-auto overflow-x-hidden
        sm:w-50 ${showNav ? "sm:-left-0" : "sm:-left-72"}
        xs:w-50 ${showNav ? "xs:-left-0" : "xs:-left-72"}`}
            >
                <div id="navbar" className="m-0 p-1 block list-none ">
                    <ul className={`p-1 ${screenWidth < 768 ? "m-5" : ""} 
          `}>
                        {list.map((item) => {
                            return (
                                <li className="relative flex-nowrap my-2">
                                    <a
                                        href={item.link}
                                        className={`nav-link group flex justify-start items-center
                    text-gray-dark text-sm bg-gray-light
                    ml-2 h-14 rounded-full
                    transition duration-300 
                    ${screenWidth >= 768 ? "p-2 m-1 w-14" : "w-64"}
                    hover:text-white hover:bg-true-gray hover:w-full`}
                                    >
                                        <div
                                            className={`${
                                                screenWidth < 768 ? "ml-7 mr-1" : "ml-1"
                                            } mr-1`}
                                        >
                                            {item.icon}
                                        </div>
                                        <span
                                            className={`mx-5 text-xl hidden
                      xs:block sm:block group-hover:text-white group-hover:block 
                                          `}
                                        >
                                            {item.title}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
