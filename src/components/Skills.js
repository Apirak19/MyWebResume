import React, {useContext} from "react";
import Skillbar from "./Skillbar";
import { UseStateContext } from "../contexts/ContextProvider";

const Skills = () => {
   const {screenWidth} = useContext(UseStateContext)
  return (
    <section
      id="Skills"
      className={`section w-full overflow-hidden px-0 pt-10
      ${screenWidth > 768 ? "pl-20 " : "pl-0"}
      bg-gradient-to-b from-deep-amber to-gold
      `}
    >
      <div
        className="container w-full border-4 border-blue m-0"
        // data-aos="fade-up"
      >
        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit...</p>
        </div>
        <Skillbar />
        <Skillbar />
        <Skillbar />
        <Skillbar />
        <Skillbar />
      </div>

      {/* CSS */}

      {/* WordPress/CMS */}

      {/* Photoshop */}
    </section>
  );
};

export default Skills;
