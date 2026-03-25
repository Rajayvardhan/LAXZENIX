import React from "react";

export default function StepsOne({
  subtitle,
  highlight,
  description,
  steps = [],
  showCount = true,
}) {
  return (
    <section className="local-process pt-125 pb-130 service-area service-area-v2">
      <div className="container text-start">

        <div className="section-title">
          <span className="sub-title st-one mb-2">{highlight}</span>
          <h2>{subtitle}</h2>
        </div>

        {description && (
          <p
            className="local-process__desc wow fadeInUp"
            data-wow-delay=".1s"
          >
            {description}
          </p>
        )}

        {/* Timeline */}
        <div className="local-process__timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className="local-process__item wow fadeInUp"
              data-wow-delay={`${i * 0.2}s`}
            >
              {showCount && (
  <div className="local-process__circle">{i + 1}</div>
)}

              <div className="local-process__card h-100">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}