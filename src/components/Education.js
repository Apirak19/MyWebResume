import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Education = () => {
  const eduData = [
    {
      title: "Silpakorn University",
      program: "Bachelor of Arts",
      subject:
        "Faculty of Arts: English Major, Information and Technology Minor",
      gpa: "3.21",
    },
    {
      title: "Phrapathom Witthayalai School",
      program: "Highshool",
      subject: "Mathematic and Science Program",
      gpa: "3.55",
    },
  ];
  return (
    <section
      id="Education"
      className="Education w-full overflow-hidden py-2 px-0 border-4 border-blue"
    >
      <div
        className=""
        // data-aos="fade-up"
      >
        <div className="section-title">
          <h2 className="text-5xl font-bold uppercase my-5">Education</h2>
        </div>

        <div className="grid grid-rows-2 grid-cols-2">
          <div className="row-span-1 col-span-1 text-start">
            <div className="flex">
              <ul>
                <li>
                  <ChevronRightIcon />
                  <span className="font-extrabold">Bachelor of Arts</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <span className="font-extrabold">Silpakorn University</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <span className="font-extrabold">Faculty of Arts: English Major, Information and Technology Minor</span>
                </li>
                <li>
                  <ChevronRightIcon />
                  <span className="font-extrabold">Silpakorn University</span>
                </li>
              </ul>
            </div>

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
        className=""
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
  );
};

export default Education;
