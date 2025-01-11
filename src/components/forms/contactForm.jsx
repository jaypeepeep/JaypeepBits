import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contactFormContainer">
      <form
        className="contactForm"
        action="https://formspree.io/f/xyzzlneb"
        method="POST"
      >
        <h2 className="formTitle">GET IN TOUCH</h2>

        <label className="formLabel" htmlFor="name">
          Your Name
        </label>
        <input
          className="formInput"
          type="text"
          name="name"
          placeholder="What's your name?"
          required
        />

        <label className="formLabel" htmlFor="email">
          Your Email
        </label>
        <input
          className="formInput"
          type="email"
          name="email"
          placeholder="What's your email?"
          required
        />

        <label className="formLabel" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="formTextarea"
          name="message"
          rows="5"
          placeholder="What's your message?"
          required
        ></textarea>

        <button type="submit" className="formButton">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
