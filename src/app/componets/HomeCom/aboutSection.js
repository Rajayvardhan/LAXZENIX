export default function AboutSection() {
  return (
    <section className="about-area about-area-v1 position-relative pt-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-holder-box mb-50">
              <div className="img-holder wow fadeInLeft">
                <img
                  src="/assets/images/about/about-1.jpg"
                  alt="Image"
                />
              </div>

              <div className="shape shape-one">
                <span className="animate-float-y">
                  <img
                    src="/assets/images/shape/circle-logo-2.png"
                    className="circle-logo"
                    alt="circle logo"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-wrapper mb-50 wow fadeInRight">
              <div className="section-title mb-15">
                <span className="sub-title st-one">About Us</span>
                <h2>
                  We’re Creative <br />
                  Agency Since 1993
                </h2>
              </div>

              <h4>Professional Design Agency to provide solutions</h4>

              <p>
                On the other hand denounce with righteous and dislike men
                who beguile and demoralizes by the charms of pleasure thes
                moment, so blinded by desire that they cannot
              </p>

              <ul className="list-style-one mb-35">
                <li>Digital Creative Agency</li>
                <li>Professional Problem Solutions</li>
                <li>Web Design & Development</li>
              </ul>

              <a
                href="/about"
                className="main-btn bordered-btn btn-blue arrow-btn"
              >
                Learn More Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
