import React from "react";
 
import "../css/contact.css";
 
export default function App() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">Contact</div>
      <div className="contact-description">
        We offer a multitude of services within our domain.
        If you would like to know more and get a quotation, please send us an email
      </div>
      <div className="contact-block">
        <div className="block-1">
          <div className="address">
            <a href="https://www.google.com/maps/place/Brunel+University+London/@51.5321389,-0.474938,17z/data=!4m5!3m4!1s0x48766e0a6fcc751f:0x43eae5c365df7a7a!8m2!3d51.5321389!4d-0.4727493">
              <i className="fas fa-map-marker-alt"></i>
            </a>
            <div className="address-details">
              <p>Location</p>
              <p>Kingston Ln, London, Uxbridge UB8 3PH</p>
            </div>
          </div>
          <div className="email">
            <a href="mailto:btm@brunel.ac.uk?subject=BTM Query">
              <i className="fas fa-envelope"></i>
            </a>
            <div className="email-details">
              <p>Email</p>
              <p>btm@brunel.ac.uk</p>
            </div>
          </div>
          <div className="phone">
            <a href="tel:01895 266048">
              <i className="fas fa-phone-alt"></i>
            </a>
            <div className="phone-details">
              <p>Call</p>
              <p>01895 266048</p>
            </div>
          </div>
 
          <div className="map">
            <iframe
              title="iframe"
              frameBorder="0"
              // marginWidth="0"
              // marginHeight="0"
              scrolling="yes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9682476991866!2d-0.474937984027514!3d51.53214221671455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e0a6fcc751f%3A0x43eae5c365df7a7a!2sBrunel%20University%20London!5e0!3m2!1sen!2suk!4v1655718106408!5m2!1sen!2suk"
            ></iframe>
          </div>
        </div>

        {/* <div className="block-2">
          <form action="#">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </div>
            </div>
 
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div className="btn-container">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
 
 
 
 