import React from "react";
import {  UseStateProvider } from "./contexts/ContextProvider";

import "./App.css";

// header
import MenuButton from "./components/MenuButton";
import ToTop from "./components/ToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

function App() {
    const smoothScroll = (link) => {
        link = document.querySelectorAll()
    }
    return (
        <UseStateProvider>
            <div className="App font-mono box-border">
                <aside>
                    <MenuButton />
                    <ToTop/>
                    <Navbar />
                </aside>
        

                <Home />

                <main
                    id="main"
                    className="
          "
                >

                    <About />

                    <Education />

                    <Experience />

                    <Skills />

                    <Achievements />
          
                </main>

                <footer id="footer">
                    <div className="">
                        <div className="text-xs py-1 uppercase font-extrabold">Thank you for visiting</div>
                    </div>
                </footer>
            </div>
        </UseStateProvider>
    );
}

export default App;
