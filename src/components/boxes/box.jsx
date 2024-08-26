import React from "react";

const Box = ({ title, content }) => {
  const boxStyle = {
    border: "2px solid #000",
    borderRadius: "50px",
    flexDirection: "column",
    padding: "50px",
    margin: "20px",
    display: "flex",
  };

  const contentStyle = {
    flexDirection: "column",
    display: "flex",
    marginBottom: "10px",
  };

  const titleStyle = {
    color: "#000",
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    marginTop: "0px",
  };

  const labelStyle = {
    color: "#696969",
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "#000",
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    margin: "0px",
  };

  return (
    <div style={boxStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {content.map((item, index) => (
        <div style={contentStyle} key={index}>
          <p style={labelStyle}>{item.label}</p>
          <p style={descriptionStyle}>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Box;
