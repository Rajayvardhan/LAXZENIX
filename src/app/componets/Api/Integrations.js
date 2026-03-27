import React from 'react';

const integrations = [
  { name: 'Stripe',        icon: 'bi-credit-card',  color: '#3b82f6' },
  { name: 'PayPal',        icon: 'bi-credit-card',  color: '#2563eb' },
  { name: 'Razorpay',      icon: 'bi-credit-card',  color: '#6366f1' },
  { name: 'AWS',           icon: 'bi-cloud',        color: '#f97316' },
  { name: 'Google Cloud',  icon: 'bi-cloud',        color: '#3b82f6' },
  { name: 'Azure',         icon: 'bi-cloud',        color: '#2563eb' },
  { name: 'Facebook',      icon: 'bi-people',       color: '#2563eb' },
  { name: 'Twitter',       icon: 'bi-twitter-x',    color: '#60a5fa' },
  { name: 'LinkedIn',      icon: 'bi-linkedin',     color: '#1d4ed8' },
  { name: 'Salesforce',    icon: 'bi-building',     color: '#3b82f6' },
  { name: 'HubSpot',       icon: 'bi-building',     color: '#f97316' },
  { name: 'Zapier',        icon: 'bi-link-45deg',   color: '#f97316' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-5 bg-white">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            Popular <span style={{ color: '#5956e9' }}>Integrations</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            We integrate with the most popular and reliable third-party services and platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3 mb-3">
          {integrations.map((item) => (
            <div key={item.name} className="col mb-3">
              <div className="bg-white rounded-4 p-3 shadow border border-light text-center integration-card h-100">

                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mx-auto mb-3 integration-icon"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: item.color,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <i className={`bi ${item.icon} text-white`} style={{ fontSize: '18px' }}></i>
                </div>

                {/* Name */}
                <p
                  className="fw-semibold mb-0 integration-name"
                  style={{ fontSize: '13px', color: '#1f2937' }}
                >
                  {item.name}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .integration-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .integration-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        .integration-card:hover .integration-icon {
          transform: scale(1.1);
        }
        .integration-card:hover .integration-name {
          color: #5956e9 !important;
        }
      `}</style>
    </section>
  );
}