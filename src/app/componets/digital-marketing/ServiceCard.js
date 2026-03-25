import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-box">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;