import React from 'react'

const Contact = () => {
  return (
     <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

           <div className="section-title">
              <h2>Contact</h2>
           </div>

           <div className="row mt-1">

              <div className="col-lg-4">
                 <div className="info">
                    <div className="address">
                       <i className="bi bi-geo-alt"></i>
                       <h4>Location:</h4>
                       <p>A108 Adam Street, New York, NY 535022</p>
                    </div>

                    <div className="email">
                       <i className="bi bi-envelope"></i>
                       <h4>Email:</h4>
                       <p>info@example.com</p>
                    </div>

                    <div className="phone">
                       <i className="bi bi-phone"></i>
                       <h4>Call:</h4>
                       <p>+1 5589 55488 55s</p>
                    </div>

                 </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                 <ContactForm />

              </div>
           </div>
        </div>
     </section> 
  )
}

export default Contact
