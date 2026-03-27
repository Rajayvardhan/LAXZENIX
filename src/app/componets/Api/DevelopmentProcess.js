import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Requirements Analysis',
    desc: 'Understanding your business needs and technical requirements',
    icon: 'bi-file-text',
    color: '#3b82f6',
  },
  {
    step: '02',
    title: 'API Design',
    desc: 'Creating API specifications and architecture planning',
    icon: 'bi-code-slash',
    color: '#22c55e',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Building the API with security and performance in mind',
    icon: 'bi-wrench',
    color: '#eab308',
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    desc: 'Comprehensive testing and production deployment',
    icon: 'bi-check-circle',
    color: '#a855f7',
  },
];

export default function DevelopmentProcess() {
  return (
    <section
      id="development-process"
      className="py-5"
    >
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            Development <span style={{ color: '#5956e9' }}>Process</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            Our systematic approach ensures high-quality API development from concept to deployment.
          </p>
        </div>

        {/* Steps */}
        <div className="row g-4">
          {steps.map((process, index) => (
            <div key={process.step} className="col-12 col-md-6 col-lg-3">
              <div className="text-center process-card h-100 p-3">

                {/* Circle + Icon */}
                <div className="position-relative d-inline-block mb-4">

                  {/* Step Circle */}
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto fw-bold text-white shadow step-circle"
                    style={{
                      width: 90,
                      height: 90,
                      backgroundColor: process.color,
                      fontSize: '1.5rem',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {process.step}
                  </div>

                  {/* Small Icon Badge */}
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center rounded-circle bg-white shadow"
                    style={{
                      width: 36,
                      height: 36,
                      top: -4,
                      right: -4,
                      border: '3px solid #fff2e2',
                    }}
                  >
                    <i className={`bi ${process.icon}`} style={{ color: '#5956e9', fontSize: '14px' }}></i>
                  </div>

                  {/* Connector Line — only lg, not last */}
                  {index < steps.length - 1 && (
                    <div
                      className="d-none d-lg-block position-absolute"
                      style={{
                        top: '50%',
                        right: '-60px',
                        width: '40px',
                        height: '3px',
                        background: 'linear-gradient(to right, #5956e9, transparent)',
                      }}
                    />
                  )}
                </div>

                {/* Title */}
                <h5 className="fw-bold mb-2 process-title" style={{ color: '#1f2937' }}>
                  {process.title}
                </h5>

                {/* Desc */}
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.7' }}>
                  {process.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .process-card:hover .step-circle {
          transform: scale(1.1);
        }
        .process-card:hover .process-title {
          color: #5956e9 !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </section>
  );
}