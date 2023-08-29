import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Education = () => {
  return (
    <>
      <section
        id="Education"
        className="Education flex flex-col item-center w-full h-screen overflow-hidden py-16 px-0"
      >
        <div
          className="container"
          // data-aos="fade-up"
        >
          <div className="section-title">
            <h2>Education</h2>
          </div>

          <div className="flex">
            <div className="lg:w-1/3 pt-4 lg:pt-0">
              <h3>Silpakorn University</h3>
              <div className="flex">
                <div className="lg:w-1/2">
                  <ul>
                    <li>
                      <ChevronRightIcon /> <strong>Birthday:</strong>
                      <span>February 19, 1998</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>Age:</strong>
                      <span>25</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>City:</strong>
                      <span>Nakhon Pathom, Thailand</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>City:</strong>
                      <span>Nakhon Pathom, Thailand</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 px-4 bg-deep-red">
              <img
                src="../src/assets/images/portrait.jpg"
                className="w-full "
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="container"
          // data-aos="fade-up"
        >
          <div className="flex">
            <div className="lg:w-1/3 px-4 bg-deep-red">
              <img
                src="../src/assets/images/portrait.jpg"
                className="w-full "
                alt=""
              />
            </div>
            <div className="lg:w-1/3 pt-4 lg:pt-0">
              <h3>Phrapathom Witthayalai School</h3>
              <div className="flex">
                <div className="lg:w-1/2">
                  <ul>
                    <li>
                      <ChevronRightIcon /> <strong>Birthday:</strong>
                      <span>February 19, 1998</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>Age:</strong>
                      <span>25</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>City:</strong>
                      <span>Nakhon Pathom, Thailand</span>
                    </li>

                    <li>
                      <ChevronRightIcon /> <strong>City:</strong>
                      <span>Nakhon Pathom, Thailand</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Education2" className="Education"></section>
    </>
  );
};

export default Education;
