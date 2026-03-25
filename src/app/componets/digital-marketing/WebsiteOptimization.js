// components/WebsiteOptimization.jsx

import React from "react";
import FeatureCard from "./FeatureCard";

const WebsiteOptimization = () => {
  const features = [
    {
      icon: "fa-solid fa-gauge-high",
      title: "Speed Optimization",
      description:
        "Ensure your website loads lightning-fast, keeping visitors engaged, reducing bounce rates, and improving rankings on Google.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Conversion Focus",
      description:
        "Implement strategic changes designed to turn more visitors into customers or leads, boosting your business growth.",
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: "Performance Analytics",
      description:
        "Track and analyse your website metrics with data-driven insights to continuously improve performance, user engagement, and conversions.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Technical Excellence",
      description:
        "Ensure your website is secure, reliable, and scalable, with robust technical optimization that supports SEO, fast loading, and a smooth user experience.",
    },
  ];

  return (
    <section className="website-opt py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="main-heading">
            What is <span>Website Optimization?</span>
          </h2>
          <p className="desc w-75 mx-auto">
            Website optimization is a complete process of improving your site’s performance, user experience, and conversion rates. At Sevenunique, we enhance your website with technical improvements, optimized content, and UX enhancements to turn your site into a powerful business asset that drives measurable results and long-term growth.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <FeatureCard {...item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebsiteOptimization;