import React from "react";
import "./infoItem.css";

const InfoItem = ({ iconSrc, iconAlt, label, linkText, linkHref }) => {
  return (
    <div className="infoItemContainer">
      <div className="infoIcon">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div className="infoDetails">
        <p className="infoLabel">{label}</p>
        {linkHref ? (
          <a
            href={linkHref}
            className="infoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        ) : (
          <p className="infoText">{linkText}</p>
        )}
      </div>
    </div>
  );
};

export default InfoItem;
