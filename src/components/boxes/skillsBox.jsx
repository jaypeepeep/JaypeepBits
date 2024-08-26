import React from "react";

const SkillsBox = ({ title, item }) => {
  const boxStyle = {
    flexDirection: "column",
    display: "flex",
  };
  const titleStyle = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "50px",
  };
  const boxItems = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "15px 30px",
  };

  const boxItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imgStyle = {
    height: "150px",
    width: "150px",
  };

  const labelStyle = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  return (
    <div style={boxStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={boxItems}>
        {item.map((skill, index) => (
          <div style={boxItem} key={index}>
            <img alt={skill.alt} src={skill.img} style={imgStyle} />
            <p style={labelStyle}>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBox;
