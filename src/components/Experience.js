import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Experience = () => {
  const text = [
    {
      title: `Lead in the design, development, and implementation of the graphic,
  layout, and production communication materials`,
    },
    {
      title: ` Delegate tasks to the 7 members of the design team and provide
      counsel on all aspects of the project.`,
    },
    {
      title: `Supervise the assessment of all graphic materials in order to ensure
      quality and accuracy of the design`,
    },
    {
      title: `Oversee the efficient use of production project budgets ranging from
      $2,000 - $25,000`,
    },
  ];
  return (
    <section
      id="Experience"
      className="w-full overflow-hidden py-16 px-0
      md:pl-20 lg:pl-20 xl:pl-20 2xl:pl-20
      bg-gradient-to-b from-amber to-deep-amber"
    >
      <h2 className="section-title text-5xl text-white font-bold uppercase pt-5">
        Experience
      </h2>

      <div
        className="mt-5 mx-5 mb-5 pb-5 rounded-xl shadow-2xl flex justify-center 
      sm:flex-col xs:flex-col items-center bg-white "
      >
        <div className="text-start">
          <div className="text-4xl font-bold text-gray-dark">
            <h1 className="">Foreign Relation Officer</h1>
            <h1>(2020-present)</h1>
          </div>
          <p>
            <ChevronRightIcon />
            Facilitate effective coordination among teams and departments
          </p>
          <p>
            <ChevronRightIcon />
            Maintain a comprehensive database containing data and activities
            related to foreign affairs
          </p>
          <p>
            <ChevronRightIcon />
            Perform accurate translation of written materials from Thai to
            English and vice versa
          </p>
          <p>
            <ChevronRightIcon />
            Summarize minutes of meetings involving international collaboration
          </p>
          <p>
            <ChevronRightIcon />
            Prepare relevant materials for cooperative negotiations with foreign
            countries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
