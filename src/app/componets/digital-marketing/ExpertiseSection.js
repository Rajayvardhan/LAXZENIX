// components/ExpertiseSection.jsx

import React from "react";
import ServiceCard from "./ServiceCard";

const ExpertiseSection = () => {
  const services = [
    {
      title: "Content Creation",
      description:
        "High-quality blog posts, articles, and website copy designed to capture attention, educate your audience, and increase conversions.",
    },
    {
      title: "Video Marketing",
      description:
        "Engaging video content that tells your brand story, boosts social media engagement, and keeps your audience coming back for more.",
    },
    {
      title: "Content Strategy",
      description:
        "We create data-driven content strategies that align with your business goals, audience needs, and SEO objectives for measurable growth.",
    },
  ];

  return (
    <section className="expertise-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6">
            <p className="sub-title">Our Expertise</p>

            <h2 className="main-heading mb-3">
              Our <span>Content Marketing Services</span>
            </h2>

            <p className="desc mb-4">
              At Sevenunique, we offer complete content marketing solutions to help your business attract, engage, and convert your audience. Our team creates content that drives traffic, builds trust, and strengthens your brand online.
            </p>

            {/* Service Cards */}
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="/assets/images/smo/content.jpg"
              className="img-fluid illustration"
              alt="content marketing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;