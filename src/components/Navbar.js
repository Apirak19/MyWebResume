import React, {useState, useContext} from 'react'
import { UseStateContext } from '../contexts/ContextProvider';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
        const {showNav, setShowNav } = useContext(UseStateContext)
        const list = [
                {
                        title: 'Home',
                        icon: <HomeIcon sx={{ fontSize: '2rem' }} />
                },
                {
                        title: 'About',
                        icon: <PersonIcon sx={{ fontSize: '2rem' }} />
                },
                {
                        title: 'Education',
                        icon: <SchoolIcon sx={{ fontSize: '2rem' }} />
                },
                {
                        title: 'Experience',
                        icon: <BusinessCenterIcon sx={{ fontSize: '2rem' }} />
                },
                {
                        title: 'Skills',
                        icon: <BuildIcon sx={{ fontSize: '2rem' }} />
                },
        ]
        return (
<header className={` fixed top-0 left-0 bottom-0 z-48 p-15 w-48
        flex flex-col justify-center
        transition-all duration-500 overflow-hidden
        ${showNav ? 'sm:w-72' : 'sm:w-0 sm:bg-white sm:shadow-2xl'} 
        ${showNav ? 'xs:w-72' : 'xs:w-0 xs:bg-white xs:shadow-2xl'} 
       xs:bg-white xs:shadow-2xl`
        }>
        

<div className={` p-15 
        transition-all duration-500  overflow-y-auto
        sm:w-50 ${showNav ? 'sm:-left-0' : 'sm:-left-72'}
        xs:w-50 ${showNav ? 'xs:-left-0' : 'xs:-left-72'}`}>
                <nav id="navbar" className="navbar nav-menu p-2 m-0 block list-none ">
                        <ul className=''>
                                {list.map((item)=>{
                                        return <li className = 'relative flex-nowrap my-2 pr-2' >
                                                <a href="#hero" className="nav-link group flex items-center 
                                                text-gray-dark text-sm bg-gray-light
                                                p-2 m-1 mb-2 h-14 w-full rounded-full z-49
                                                transition duration-300 overflow-hidden
                                                md:p-3 md:m-1 md:w-14
                                                lg:p-3 lg:m-1 lg:w-14
                                                xl:p-3 xl:m-1 xl:w-14
                                                2xl:p-3 2xl:m-1 2xl:w-14
                                                hover:text-white hover:bg-true-gray hover:w-full">
                                                        {item.icon}
                                                        <span className={`'pl-1 pr-2 text-xl 
                                          group-hover:text-white group-hover:block
                                          md:hidden lg:hidden xl:hidden 2xl:hidden'
                                          `}>
                                                                {item.title}
                                                        </span>
                                                </a>
                                </li>
                                })}

                        </ul>
                </nav>
                </div>
                </header>
        )
}

export default Navbar
