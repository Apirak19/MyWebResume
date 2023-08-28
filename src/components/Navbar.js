import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Navbar = () => {
  return (

          <nav id="navbar" className="navbar nav-menu p-0 m-0 block list-none">
                  <ul className='list-none'>
                          <li className='relative flex-nowrap'>
                                  <a href="#hero" className="nav-link flex items-center 
                                  text-gray-dark text-sm bg-gray-light
                                  p-2 m-0.5 mb-2 h-14 w-full rounded-full
                                   transition duration-300 overflow-hidden
                                   md:p-3 md:m-1
                                   hover:">
                                        <div className='text-xl'>
                                                <HomeIcon /> <span className='pl-1 pr-2'>Home</span>
                                        </div>
                                </a>
                          </li>

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
