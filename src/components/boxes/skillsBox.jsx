import React from "react";

const SkillsBox = ({ title, item }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  };

  const titleStyle = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "40px",
    marginTop: "40px",
  };

  const boxItems = {
    display: "grid",
    gap: "15px 20px",
    width: "100%",
    justifyContent: "center",
  };

  const boxItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
  };

  const labelStyle = {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "400",
    marginTop: "10px",
  };

  return (
    <div style={boxStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={boxItems} className="skillsGrid">
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
