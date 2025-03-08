import React from "react";
import "./ContactSection.css";
import ContactForm from "../forms/contactForm.jsx";
import InfoItem from "../items/infoItem.jsx";

// Import images
import mobileIcon from "../../assets/mobile.png";
import emailIcon from "../../assets/email.png";
import facebookIcon from "../../assets/facebookc.png";
import linkedinIcon from "../../assets/linkedinc.png";

const ContactSection = () => {
  return (
    <section id="contact" className="ContactSection">
      <div className="contactContainer">
        <div className="contactContent">
          <div className="contactHeader">
            <h2 className="contactH1">
              LET'S <span className="highlighted">WORK</span>{" "}
              <span className="highlighted">TOGETHER</span>
            </h2>

            <p className="contactP">
              After getting to know me, if you're still interested and would
              like to collaborate on a project or are looking for someone to
              join your team, feel free to reach out! I'm always happy to
              connect, learn, and grow, especially when working with others. I
              look forward to hearing from you! :D
            </p>
          </div>
          <div className="contactBox">
            <div className="contactLeft">
              <div className="contactInformation">
                <h4 className="contactH4">Contact Information</h4>
                <InfoItem
                  iconSrc={mobileIcon}
                  iconAlt="Call Icon"
                  label="Phone"
                  linkText="+63 966 3492 811"
                  linkHref="tel:+639963492811"
                />
                <InfoItem
                  iconSrc={emailIcon}
                  iconAlt="Email Icon"
                  label="Email"
                  linkText="patrick.zutagal@gmail.com"
                  linkHref="mailto:patrick.zutagal@gmail.com"
                />
              </div>
              <div className="socialInformation">
                <h4 className="contactH4">Social Information</h4>
                <InfoItem
                  iconSrc={facebookIcon}
                  iconAlt="Facebook Icon"
                  label="Facebook"
                  linkText="John Patrick Lagatuz"
                  linkHref="https://www.facebook.com/jeypeeps"
                />
                <InfoItem
                  iconSrc={linkedinIcon}
                  iconAlt="Linkedin Icon"
                  label="LinkedIn"
                  linkText="John Patrick Lagatuz"
                  linkHref="https://www.linkedin.com/in/john-patrick-lagatuz"
                />
              </div>
            </div>
            <div className="contactRight">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
