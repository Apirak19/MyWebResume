import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  return (
          <section id="hero" className="flex flex-col justify-center">
                  <div className="container"
                  // data-aos="zoom-in" 
                  // data-aos-delay="100"
                  >
                          <h1>Apirak Fakin</h1>
                          <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                          <div className="social-links">
                                  <a href="/" className="twitter"><TwitterIcon /></a>
                                  <a href="/" className="facebook"><FacebookIcon /></a>
                                  <a href="/" className="instagram"><InstagramIcon /></a>
                                  <a href="/" className="google-plus"><GitHubIcon /></a>
                                  <a href="/" className="linkedin"><LinkedInIcon /></a>
                          </div>
                  </div>
          </section>
  )
}

export default Home
