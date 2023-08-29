import React, { useState } from "react";
import { UseStateProvider } from "./contexts/ContextProvider";

import "./App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// header
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";

function App() {
  return (
    <UseStateProvider>
      <div className="App">
        <head>
        <MenuButton />
        <Navbar />
        </head>

        <Home />
        
        <main
          id="main"
          className="md:ml-40 lg:ml-40 xl:ml-40 2xl:ml-40 border-4 border-red"
        >

          <About />

          <Education />

          <Experience />

          <Skills />
        </main>

        <footer id="footer">
          <div className="container">
            <div className="social-links">
              <a href="/" className="twitter">
                <TwitterIcon />
              </a>
              <a href="/" className="facebook">
                <FacebookIcon />
              </a>
              <a href="/" className="instagram">
                <InstagramIcon />
              </a>
              <a href="/" className="google-plus">
                <GitHubIcon />
              </a>
              <a href="/" className="linkedin">
                <LinkedInIcon />
              </a>
            </div>
            <div className="copyright">Thank you for visiting</div>
          </div>
        </footer>
      </div>
    </UseStateProvider>
  );
}

export default App;
