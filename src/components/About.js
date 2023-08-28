import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const About = () => {
  return (
    <section id="about" className ="about border-blue border-4">
          <div className ="container" 
          // data-aos="fade-up"
          >

            <div className ="section-title">
              <h2>About</h2>
            </div>

            <div className ="flex">
              <div className="lg:w-1/3 px-4 bg-deep-red">
                <img src="../src/assets/images/portrait.jpg" 
                className ="w-full " alt="" />
              </div>

              <div className="lg:w-1/3 pt-4 lg:pt-0">
                <h3>Web Developer.</h3>
                <p className="italic">
              Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                </p>

                <div className ="flex">
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
                    </ul>
                  </div>

                  <div className="lg:w-1/2">
                    <ul>
                      <li>
                        <ChevronRightIcon /> <strong>Phone:</strong>
                        <span>+66 945531706</span>
                      </li>

                      <li>
                        <ChevronRightIcon /> <strong>Website:</strong>
                        <span>www.example.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>

          </div>
        </section>
  )
}

export default About
