import React from 'react';

const techs = [
  'Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby', 'Express.js', 'Django',
  'Spring Boot', 'Laravel', 'FastAPI', 'GraphQL', 'REST', 'WebSocket', 'Jest'
];

const highlights = [
  {
    icon: 'bi-award',
    title: 'Industry Expertise',
    desc: 'Deep knowledge of Finunique regulations and compliance requirements.',
    color: 'linear-gradient(135deg, #facc15, #ca8a04)',
  },
  {
    icon: 'bi-clock',
    title: 'Fast Delivery',
    desc: 'Rapid development and deployment with agile methodologies.',
    color: 'linear-gradient(135deg, #4ade80, #16a34a)',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Security Focus',
    desc: 'Bank-grade security with encryption and compliance standards.',
    color: 'linear-gradient(135deg, #60a5fa, #2563eb)',
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-5 bg-white">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            Technologies <span style={{ color: '#5956e9' }}>We Use</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            Modern technologies and frameworks for building robust, scalable, and secure APIs.
          </p>
        </div>

        {/* Tech Tags */}
        <div
          className="rounded-4 p-5 mb-5 d-flex flex-wrap justify-content-center gap-3"
          style={{ background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)' }}
        >
          {techs.map((tech) => (
            <span
              key={tech}
              className="tech-tag px-4 py-2 bg-white rounded-pill text-secondary fw-medium shadow-sm mr-3 mb-3"
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #e5e7eb',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom 3 Cards */}
        <div className="row g-4">
          {highlights.map((item) => (
            <div key={item.title} className="col-12 col-md-4">
              <div className="bg-white rounded-4 p-4 shadow border border-light h-100 highlight-card">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-4"
                  style={{ width: 64, height: 64, background: item.color }}
                >
                  <i className={`bi ${item.icon} fs-4 text-white`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-3">{item.title}</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .tech-tag:hover {
          background: #5956e9 !important;
          color: white !important;
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(182,96,61,0.3) !important;
        }
        .highlight-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .highlight-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </section>
  );
}