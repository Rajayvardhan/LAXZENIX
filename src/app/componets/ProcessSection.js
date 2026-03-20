import Image from "next/image";
import "../style/res.css";

export default function ProcessSection({
  subtitle = "Our Process",
  title = "How We Work",
  steps = [],
}) {
  return (
    <section className="process-section pt-100 pb-100">
      <div className="container">
        <div className="text-wrapper mb-50 wow fadeInRight">
          <div className="section-title mb-15 text-center">
            <span className="sub-title st-one">{subtitle}</span>
          <p>{title}</p>
          </div>
        </div>
        <div className="process-timeline">
          <div className="timeline-line"></div>

          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isEven = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`timeline-item ${isEven ? "reverse" : ""}`}
              >
                {/* 1. Content Card */}
                <div className="timeline-content">
                  <div className="process-card">
                    <div className="dot-wrapper">
                      <div className="timeline-dot">
                        <span>{stepNumber}</span>
                      </div>
                    </div>

                    <div className="card-inner-layout">
                      <div className="icon-box">
                        <Image src={step.img} width={60} height={60} alt={step.title} priority />
                      </div>
                      <div className="text-content">
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Empty Space for layout */}
                <div className="timeline-spacer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}