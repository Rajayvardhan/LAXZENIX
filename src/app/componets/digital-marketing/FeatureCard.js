
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card h-100">
      <div className="icon-box">
        <i className={icon}></i>
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;