import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container text-center">
        <h2 className="display-4">Contact Me</h2>
        <p className="lead mt-3">Feel free to reach out to me for any inquiries, collaborations, or questions!</p>
        <form>
          <input type="text" placeholder="09815125282" className="form-control mb-2" />
          <input type="email" placeholder="Mabermal@gbox.ncf.edu.ph" className="form-control mb-2" />
          <textarea placeholder="Your Message" className="form-control mb-3"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
