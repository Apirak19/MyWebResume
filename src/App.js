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

  <header id="header">
    <Navbar />
  </header>

    <Home />
      
    <main id="main">

    <About />

    <Education />

    <Experience />

    <hr />
    <hr />
    <hr />
    <hr />
    <Skills />


        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className ="contact">
          <div className ="container" data-aos="fade-up">

            <div className ="section-title">
              <h2>Contact</h2>
            </div>

            <div className ="row mt-1">

              <div className ="col-lg-4">
                <div className ="info">
                  <div className ="address">
                    <i className ="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className ="email">
                    <i className ="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className ="phone">
                    <i className ="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                </div>

              </div>

              <div className ="col-lg-8 mt-5 mt-lg-0">

                <ContactForm />

              </div>

            </div>

          </div>
        </section> 

      </main>


      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className ="container">
          <h3>Brandon Johnson</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div className="social-links">
            <a href="/" className="twitter"><TwitterIcon /></a>
            <a href="/" className="facebook"><FacebookIcon /></a>
            <a href="/" className="instagram"><InstagramIcon /></a>
            <a href="/" className="google-plus"><GitHubIcon /></a>
            <a href="/" className="linkedin"><LinkedInIcon /></a>
          </div>
          <div className ="copyright">
            &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </div>
  );
}

export default App;
