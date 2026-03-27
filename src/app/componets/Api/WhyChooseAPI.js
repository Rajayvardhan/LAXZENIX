import React from 'react';

export default function WhyChooseAPI({ title, subtitle, cards, themeBg }) {
  return (
    <section
      id="why"
    //   style={{ background: themeBg }}
      className="py-5"
    >
      <div className="container py-4">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="fw-bold fs-1" style={{ color: '#0f2f38' }}>
            {title}
          </h2>
          <p className="fs-5 text-secondary mt-3" style={{ maxWidth: '700px' }}>
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className="h-100 rounded-4 p-4 why-card"
                style={{ backgroundColor: card.bg }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-4"
                  style={{
                    width: 64,
                    height: 64,
                    background: card.gradient,
                    transform: 'rotate(3deg)',
                  }}
                >
                  <i className={`bi ${card.icon} fs-4 text-white`}></i>
                </div>

                <h5 className="fw-bold text-dark mb-3">{card.title}</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .why-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .why-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
      `}</style>
    </section>
  );
}