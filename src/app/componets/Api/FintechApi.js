import React from 'react';

const apis = [
  {
    title: 'Payment APIs',
    desc: 'Secure payment processing and gateway integrations',
    icon: 'bi-credit-card',
    color: 'linear-gradient(135deg, #ef4444, #dc2626)',
  },
  {
    title: 'KYC / KYB APIs',
    desc: 'Identity verification and compliance solutions',
    icon: 'bi-person-check',
    color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  },
  {
    title: 'Ecommerce APIs',
    desc: 'Core banking and account management systems',
    icon: 'bi-shop',
    color: 'linear-gradient(135deg, #22c55e, #16a34a)',
  },
  {
    title: 'Utility APIs',
    desc: 'Real-time trading and market data feeds',
    icon: 'bi-graph-up',
    color: 'linear-gradient(135deg, #a855f7, #9333ea)',
  },
];

export default function FintechApi() {
  return (
    <section
      id="fintech-apis"
      className="py-5"
      style={{ background: 'white' }}
    >
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            Fintech <span style={{ color: '#5956e9' }}>API Solutions</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            Specialized API solutions for the financial technology sector with compliance and security focus.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {apis.map((api) => (
            <div key={api.title} className="col-12 col-md-6 col-lg-3">
              <div className="bg-white rounded-4 p-4 shadow fintech-card text-center h-100 border border-light">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mx-auto mb-4"
                  style={{ width: 64, height: 64, background: api.color }}
                >
                  <i className={`bi ${api.icon} fs-4 text-white`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">{api.title}</h5>
                <p className="text-secondary small mb-0" style={{ lineHeight: '1.7' }}>{api.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .fintech-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .fintech-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </section>
  );
}