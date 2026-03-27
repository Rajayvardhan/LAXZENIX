"use client";
import React, { useState } from 'react';

const apiTypes = [
  {
    title: 'REST APIs',
    icon: 'bi-diagram-3',
    color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    features: [
      'Standard HTTP methods (GET, POST, PUT, DELETE)',
      'Stateless architecture for scalability',
      'JSON/XML data formats',
      'Cacheable responses for performance',
      'Easy integration with web and mobile apps',
    ],
    bestFor: 'Traditional web applications, mobile apps, and simple data operations with standard CRUD operations.',
    performance: 85,
    complexity: 30,
    complexityLabel: 'Low',
    featureColor: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  },
  {
    title: 'GraphQL APIs',
    icon: 'bi-git',
    color: 'linear-gradient(135deg, #22c55e, #16a34a)',
    features: [
      'Fetch exactly the data you need',
      'Single endpoint for all queries',
      'Strongly typed schema definition',
      'Real-time updates with subscriptions',
      'Reduces over-fetching and under-fetching',
    ],
    bestFor: 'Complex applications needing flexible queries, multiple data sources, and rapid frontend iteration.',
    performance: 90,
    complexity: 60,
    complexityLabel: 'Medium',
    featureColor: 'linear-gradient(135deg, #22c55e, #16a34a)',
  },
  {
    title: 'Real-time APIs',
    icon: 'bi-activity',
    color: 'linear-gradient(135deg, #a855f7, #9333ea)',
    features: [
      'WebSocket-based live connections',
      'Instant data push to clients',
      'Event-driven architecture',
      'Low latency communication',
      'Ideal for chat, notifications, live feeds',
    ],
    bestFor: 'Live dashboards, chat apps, gaming, stock tickers, and any use case requiring instant updates.',
    performance: 95,
    complexity: 75,
    complexityLabel: 'High',
    featureColor: 'linear-gradient(135deg, #a855f7, #9333ea)',
  },
];

export default function ApiTypes() {
  const [active, setActive] = useState(0);
  const selected = apiTypes[active];

  return (
    <section
      id="api-types"
      className="py-5 position-relative overflow-hidden"
    >
      {/* Dot pattern bg */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'radial-gradient(#5956e9 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: 0,
        }}
      />

      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            API <span style={{ color: '#5956e9' }}>Types</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            We develop various types of APIs to meet different business requirements and use cases.
          </p>
        </div>

        {/* Main Card */}
        <div
          className=""
        //   style={{
        //     background: 'rgba(255,255,255,0.85)',
        //     border: '1px solid rgba(182,96,61,0.2)',
        //   }}
        >
          {/* Tab Buttons */}
          <div className="row g-3 mb-4">
            {apiTypes.map((type, index) => (
              <div key={type.title} className="col-12 col-lg-4">
                <div
                  className="position-relative"
                  onClick={() => setActive(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className="rounded-3 p-3 d-flex align-items-center gap-3 api-tab bg-white"
                    style={{
                      border: active === index
                        ? '2px solid #5956e9'
                        : '2px solid #e5e7eb',
                      background: active === index
                        ? 'rgba(182,96,61,0.06)'
                        : 'rgba(255,255,255,0.6)',
                      transition: 'all 0.3s ease',
                      transform: active === index ? 'scale(1.03)' : 'scale(1)',
                      borderRadius:"15px"
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded flex-shrink-0 mr-3"
                      style={{ width: 56, height: 56, background: type.color }}
                    >
                      <i className={`bi ${type.icon} fs-5 text-white`}></i>
                    </div>
                    <div>
                      <h6
                        className="fw-bold mb-0"
                        style={{ color: active === index ? '#5956e9' : '#0f2f38' }}
                      >
                        {type.title}
                      </h6>
                      <small className="text-secondary">Click to learn more</small>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  {active === index && (
                    <div
                      className="position-absolute start-50 translate-middle-x"
                      style={{
                        bottom: '-10px',
                        width: 16,
                        height: 16,
                        backgroundColor: '#5956e9',
                        transform: 'translateX(-50%) rotate(45deg)',
                        zIndex: 1,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          <div
            className="rounded-4 p-4 p-md-5 mt-3"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(182,96,61,0.15)',
            }}
          >
            <div className="row g-4">

              {/* Left — Features */}
              <div className="col-12 col-lg-6">
                <h4 className="fw-bold mb-4 d-flex align-items-center gap-2" style={{ color: '#0f2f38' }}>
                  <i className={`bi ${selected.icon} fs-4 mr-3`} style={{ color: '#5956e9' }}></i>
                  {selected.title}
                </h4>
                <div className="d-flex flex-column gap-3">
                  {selected.features.map((feature, i) => (
                    <div key={feature} className="d-flex align-items-start gap-3 feature-item">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 mr-2 mb-3"
                        style={{
                          width: 26,
                          height: 26,
                          background: selected.featureColor,
                          marginTop: '2px',
                        }}
                      >
                        <span className="text-white fw-bold" style={{ fontSize: '11px' }}>{i + 1}</span>
                      </div>
                      <span className="text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Stats */}
              <div className="col-12 col-lg-6 d-flex flex-column gap-3">

                {/* Best For */}
                <div
                  className="rounded-3 p-4"
                  style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', border: '1px solid #bfdbfe' }}
                >
                  <h6 className="fw-semibold mb-2" style={{ color: '#0f2f38' }}>Best For</h6>
                  <p className="text-secondary small mb-0">{selected.bestFor}</p>
                </div>

                {/* Performance */}
                <div
                  className="rounded-3 p-4"
                  style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}
                >
                  <h6 className="fw-semibold mb-2" style={{ color: '#0f2f38' }}>Performance</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-grow-1 rounded-pill bg-light" style={{ height: '8px' }}>
                      <div
                        className="rounded-pill h-100"
                        style={{
                          width: `${selected.performance}%`,
                          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                          transition: 'width 0.5s ease',
                        }}
                      />
                    </div>
                    <span className="fw-semibold small" style={{ color: '#0f2f38' }}>{selected.performance}%</span>
                  </div>
                </div>

                {/* Complexity */}
                <div
                  className="rounded-3 p-4"
                  style={{ background: 'linear-gradient(135deg, #faf5ff, #ede9fe)', border: '1px solid #d8b4fe' }}
                >
                  <h6 className="fw-semibold mb-2" style={{ color: '#0f2f38' }}>Complexity</h6>
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-grow-1 rounded-pill bg-light" style={{ height: '8px' }}>
                      <div
                        className="rounded-pill h-100"
                        style={{
                          width: `${selected.complexity}%`,
                          background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                          transition: 'width 0.5s ease',
                        }}
                      />
                    </div>
                    <span className="fw-semibold small" style={{ color: '#0f2f38' }}>{selected.complexityLabel}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .api-tab:hover {
          border-color: rgba(182,96,61,0.4) !important;
          background: rgba(182,96,61,0.04) !important;
        }
        .feature-item:hover span {
          color: #5956e9 !important;
          transition: color 0.2s ease;
        }
      `}</style>
    </section>
  );
}