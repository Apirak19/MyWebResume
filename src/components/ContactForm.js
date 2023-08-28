import React, { useState } from 'react';

const ContactForm = () => {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
 });

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');
 const [successMessage, setSuccessMessage] = useState('');

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  // You can add your form submission logic here, such as sending the data to the server.
  // For simplicity, let's assume a successful submission after 2 seconds.
  setTimeout(() => {
   setLoading(false);
   setSuccessMessage('Your message has been sent. Thank you!');
  }, 2000);
 };

 return (
  <form
   onSubmit={handleSubmit}
   className="php-email-form"
  >
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
     type="text"
     name="name"
     value={formData.name}
     onChange={handleChange}
     className="form-control"
     placeholder="Your Name"
     required
    />
    <input
     type="email"
     name="email"
     value={formData.email}
     onChange={handleChange}
     className="form-control"
     placeholder="Your Email"
     required
    />
   </div>
   <input
    type="text"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    className="form-control mt-3"
    placeholder="Subject"
    required
   />
   <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows="5"
    className="form-control mt-3"
    placeholder="Message"
    required
   ></textarea>
   <div className="my-3">
    {loading && <div className="loading">Loading</div>}
    {error && <div className="error-message">{error}</div>}
    {successMessage && <div className="sent-message">{successMessage}</div>}
   </div>
   <div className="text-center">
    <button type="submit">Send Message</button>
   </div>
  </form>
 );
};

export default ContactForm;
