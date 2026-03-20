export default function ContactSection() {
  return (
    <div className="position-relative">

      {/* Banner */}
      <div
        className="d-flex align-items-center justify-content-center text-center px-3"
        style={{
          height: "350px",
          background: "url('/Digital/contact.png') center/cover no-repeat",
          borderRadius: "10px"
        }}
      >
        <div>
          <h3 className="fw-bold text-white">Contact Us</h3>
          <p className="text-white mt-2">
            Contact Laxzenix Tech for secure, scalable solutions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-semibold">
              Have <span style={{ color: "#b25a33" }}>Questions</span> About <br />
              <strong>Our Services? Contact Us Today</strong>
            </h2>
          </div>

          <div className="col-md-6 position-relative">

            <div
              style={{
                position: "absolute",
                top: "-60px",
                left: "-60px",
                width: "220px",
                height: "220px",
                background: "#f9ede6",
                borderRadius: "50%"
              }}
            />

            <form className="bg-white shadow p-4 rounded position-relative">

              <input className="form-control mb-3" placeholder="Full Name" />
              <input className="form-control mb-3" placeholder="Email" />
              <input className="form-control mb-3" placeholder="Phone" />
              <textarea className="form-control mb-3" rows="4" placeholder="Message" />

              <button
                className="btn w-100 text-white"
                style={{
                  background: "linear-gradient(90deg,#b25a33,#7a4f3a,#1a2e33)"
                }}
              >
                Send
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}