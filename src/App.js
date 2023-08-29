import React, {useState} from 'react';

import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// header
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () =>{
    setShowNav(prevState => !prevState)
  }
  return (
    <div className="App">
      <button className='bg-gray-light text-gray-dark rounded-full flex items-center
      fixed p-2 right-3 top-3 z-50 overflow-hidden
      hover:bg-true-gray hover:text-white cursor-pointer
      md:hidden lg:hidden xl:hidden 2xl:hidden'
      onClick={toggleNav}>
        {showNav ? <CloseIcon sx={{ fontSize: '2rem' }} /> : <MenuIcon sx={{ fontSize: '2rem' }} />}
      </button>
      
      <header className={` fixed top-0 left-0 bottom-0 z-48 p-15 w-48
        flex flex-col justify-center
        transition-all duration-500 overflow-hidden
        ${showNav ? 'sm:w-72' : 'sm:w-0 sm:bg-white sm:shadow-2xl'} 
        ${showNav ? 'xs:w-72' : 'xs:w-0 xs:bg-white xs:shadow-2xl'} 
       xs:bg-white xs:shadow-2xl`
       }>

        <div className={` p-15 
        transition-all duration-500  overflow-y-auto
        sm:w-50 ${showNav ? 'sm:-left-0' : 'sm:-left-72' }
        xs:w-50 ${showNav ? 'xs:-left-0' : 'xs:-left-72' }`}>

          <Navbar />

        </div>
      </header>

      <Home />
      <main id="main" className='md:ml-40 lg:ml-40 xl:ml-40 2xl:ml-40 border-4 border-red'>

        <About />

        <Education />

        <Experience />

        <Skills />
      </main>


      <footer id="footer">
        <div className="container">
          <div className="social-links">
            <a href="/" className="twitter"><TwitterIcon /></a>
            <a href="/" className="facebook"><FacebookIcon /></a>
            <a href="/" className="instagram"><InstagramIcon /></a>
            <a href="/" className="google-plus"><GitHubIcon /></a>
            <a href="/" className="linkedin"><LinkedInIcon /></a>
          </div>
          <div className="copyright">
            Thank you for visiting
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
