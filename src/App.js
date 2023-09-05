import React from "react";
import {  UseStateProvider } from "./contexts/ContextProvider";

import "./App.css";

// header
import MenuButton from "./components/MenuButton";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

function App() {
    return (
        <UseStateProvider>
            <div className="App font-mono box-border">
                <aside>
                    <MenuButton />
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
                        <div className="text-sm p-1 uppercase font-extrabold">Thank you for visiting <span className=""><SentimentVerySatisfiedOutlinedIcon /></span> </div>
                    </div>
                </footer>
            </div>
        </UseStateProvider>
    );
}

export default App;
