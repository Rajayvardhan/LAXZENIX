import React from 'react';

export default function WhatWeOffer({ items }) {  // 👈 props receive
  return (
    <section id="offer" className="py-5 bg-white">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            What we <span style={{ color: '#5956e9' }}>offer</span>
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            Our comprehensive API development services cover the entire lifecycle from design to deployment.
          </p>
        </div>

        <div className="position-relative">

          {/* Line */}
          <div
            className="position-absolute top-0 bottom-0"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              background: 'linear-gradient(to bottom, #5956e9, #09343D)',
              zIndex: 0,
            }}
          />

          {items.map((item) => (   // 👈 props use
            <div key={item.title} className="position-relative d-flex align-items-center mb-5">
              
              {/* LEFT */}
              <div className="w-50 pe-4">
                {item.position === 'left' && <Card item={item} />}
              </div>

              {/* DOT */}
              <div
                className="position-absolute rounded-circle border border-4 border-white shadow"
                style={{
                  width: 28,
                  height: 28,
                  backgroundColor: '#5956e9',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              />

              {/* RIGHT */}
              <div className="w-50 ps-4">
                {item.position === 'right' && <Card item={item} />}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ reusable card component
const Card = ({ item }) => (
  <div className="bg-white rounded-4 p-4 shadow border border-light offer-card">
    <div className="d-flex align-items-center mb-3">
      <div
        className="d-flex align-items-center justify-content-center rounded-3 mr-3"
        style={{
          width: 56,
          height: 56,
          background: 'linear-gradient(135deg, #5956e9, #09343D)',
        }}
      >
        <i className={`bi ${item.icon} fs-5 text-white`}></i>
      </div>
      <h5 className="fw-bold text-dark mb-0">{item.title}</h5>
    </div>

    <ul className="list-unstyled mb-0">
      {item.points.map((p) => (
        <li key={p} className="d-flex mb-2">
          <span
            style={{
              width: 8,
              height: 8,
              backgroundColor: '#5956e9',
              borderRadius: '50%',
              marginTop: '7px',
              marginRight: '8px',
            }}
          />
          <span className="text-secondary small">{p}</span>
        </li>
      ))}
    </ul>
  </div>
);