"use client";

import Image from "next/image";
import "../style/res.css";

export default function ProcessSection({
  subtitle = "Our Process",
  title = "How We Work",
  steps = [],
}) {
  return (
    <section className="process">
      <div className="process__container">

        <div className="process__header wow animate__animated animate__fadeInUp">
          <span className="process__subtitle">{subtitle}</span>
          <h2 className="process__title">{title}</h2>
        </div>

        <div className="process__timeline">
          <div className="process__line wow animate__animated animate__fadeInDown"></div>

          {steps.map((step, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`process__row ${isRight ? "process__row--right" : ""}`}
              >
                <div
                  className={`process__card wow animate__animated ${
                    isRight ? "animate__fadeInRight" : "animate__fadeInLeft"
                  }`}
                  data-wow-delay={`${index * 0.2}s`}
                >
                  {/* Badge */}
                  <div
                    className="process__badge wow animate__animated animate__zoomIn"
                    data-wow-delay={`${index * 0.25}s`}
                  >
                    {index + 1}
                  </div>

                  <div className="process__content">
                    <div className="process__icon">
                      <Image
                        src={step.img}
                        width={48}
                        height={48}
                        alt={step.title}
                      />
                    </div>

                    <div className="process__text">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                </div>

                <div className="process__spacer"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}