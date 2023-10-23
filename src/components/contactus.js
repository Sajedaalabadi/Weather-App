import React from "react";
import "../Css/contactus.css"; 

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-icons">
        <div className="phone">
          <i className="fa fa-phone"></i>
          <p>0788888000</p> 
        </div>
        <div className="email">
          <i className="fa fa-envelope"></i>
          <p>Islam@example.com</p> 
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
