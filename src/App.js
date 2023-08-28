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

function App() {
  return (
    <div className="App">
      <h1 className='lg:hidden xl:hidden 2xl:hidden'>menu button</h1>
      {/* neeeeeeeeeeeeeeeeeeeeeeeeeed to be fixed */}
      <header className='fixed top-0 left-0 bottom-0 z-9997 transition-all duration-500 p-15 overflow-y-auto
          md:w-72 md:-left-72
          sm:w-72 sm:-left-72
          xs:w-72 xs:-left-72'>
    <Navbar />


      </header>
    <Home />
    <main id="main" className='lg:ml-72 xl:ml-24'>

    <About />

    <Education />

    <Experience />

    <Skills />




       

      </main>


      <footer id="footer">
        <div className ="container">
          <div className="social-links">
            <a href="/" className="twitter"><TwitterIcon /></a>
            <a href="/" className="facebook"><FacebookIcon /></a>
            <a href="/" className="instagram"><InstagramIcon /></a>
            <a href="/" className="google-plus"><GitHubIcon /></a>
            <a href="/" className="linkedin"><LinkedInIcon /></a>
          </div>
          <div className ="copyright">
            Thank you for visiting
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
