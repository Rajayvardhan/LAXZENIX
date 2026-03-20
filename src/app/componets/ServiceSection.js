import Image from "next/image";
import React from "react";

const ServiceSection = ({
  title = "Our Services",
  subtitle = "Services",
  description = "",
  services = [],
  colClass = "col-lg-4 col-md-6 col-sm-12",
  containerclass = "container",
}) => {
  return (
    <section className="service-area pt-90 pb-80">
      <div className={containerclass}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp">
              <span className="sub-title st-one">{subtitle}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((item, index) => (
            <div
              className={`${colClass} mb-3`}
              key={index}
            >
              <div
                className="service-item service-style-one mb-40 wow fadeInDown"
                data-wow-delay={item.delay}
                style={{ minHeight: "100%" }}
              >
                <div className="icon">
                  <Image
                    src={item.icon}
                    width={80}
                    height={80}
                    alt={item.title}
                  />
                </div>

                <div className="text">
                  <h3 className="title">
                    <a href={item.link}>{item.title}</a>
                  </h3>

                  <p>{item.description}</p>

                  <a href={item.link} className="btn-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;