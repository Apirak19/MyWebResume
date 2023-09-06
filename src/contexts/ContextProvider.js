import React, {createContext, useEffect, useState} from "react";


const UseStateContext = createContext();

const UseStateProvider = ({children}) => {
    const [showNav, setShowNav] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <UseStateContext.Provider value={{showNav, setShowNav, screenWidth}}>
            {children}
        </UseStateContext.Provider>
    );
};

export {UseStateContext, UseStateProvider};