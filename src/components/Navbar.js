import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Navbar = () => {
  return (
          <nav id="navbar" className="navbar nav-menu">
                  <ul>
                          <li><a href="#hero" className="nav-link m-2 p-2 bg-cool-gray rounded-full active">
                                  <HomeIcon /> <span>Home</span>
                          </a></li>

                          <li><a href="#about" className="nav-link p-2 bg-cool-gray rounded-full">
                                  <PersonIcon /> <span>About</span>
                          </a></li>

                          <li><a href="#about" className="nav-link p-2 bg-cool-gray rounded-full">
                                  <PersonIcon /> <span>Education</span>
                          </a></li>

                          <li><a href="#portfolio" className="nav-link p-2 bg-cool-gray rounded-full">
                                  <BusinessCenterIcon /><span>Experience</span>
                          </a></li>

                          <li><a href="#resume" className="nav-link p-2 bg-cool-gray rounded-full">
                                  <BuildIcon /> <span>Skills</span>
                          </a></li>

                          <li><a href="#services" className="nav-link p-2 bg-cool-gray rounded-full">
                                  <EmojiEventsIcon /> <span>Achievements</span>
                          </a></li>
                  </ul>
          </nav>
  )
}

export default Navbar
