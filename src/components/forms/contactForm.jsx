import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <form className="contactForm">
        <h2 className="formTitle">GET IN TOUCH</h2>
        <label className="formLabel" htmlFor="name">
          Your Name
        </label>
        <input
          className="formInput"
          type="text"
          id="name"
          placeholder="What's your name?"
        />

        <label className="formLabel" htmlFor="email">
          Your Email
        </label>
        <input
          className="formInput"
          type="email"
          id="email"
          placeholder="What's your email?"
        />

        <label className="formLabel" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="formTextarea"
          id="message"
          rows="5"
          placeholder="What's your message?"
        ></textarea>

        <button type="submit" className="formButton">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
