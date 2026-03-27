export default function WhatIsAPI({ title, subtitle, cards, features }) {
  return (
    <section id="what" className="py-5 bg-white">
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
        <div className="row g-4 mb-5">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-lg-4">
              <div
                className="h-100 rounded-4 p-4 border "
                style={{
                  background: card.bg,
                  borderColor: card.borderColor,
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-4"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: card.iconBg,
                  }}
                >
                  <i className={`${card.icon} fs-3 text-white`}></i>
                </div>

                <h5 className="fw-bold text-dark mb-3">{card.title}</h5>
                <p className="text-secondary mb-0">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-4 p-4 p-md-5 shadow border border-light">
          <h4 className="fw-bold mb-4" style={{ color: '#0f2f38' }}>
            Key Features
          </h4>

          <div className="row g-3">
            {features.map((item, index) => (
              <div key={index} className="col-12 col-md-6 d-flex align-items-center gap-3 mb-3">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                  style={{ width: 28, height: 28, backgroundColor: '#5956e9' }}
                >
                  <i className="bi bi-check-circle-fill text-white" style={{ fontSize: '14px' }}></i>
                </div>
                <span className="text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}