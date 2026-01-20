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
             We’re a Creative
 <br />
                   Digital Agency
                </h2>
              </div>

              <h4>Professional Design Agency to provide solutions</h4>

              <p>
                A results-driven digital agency focused on building strong brands and impactful digital experiences. We combine creativity, strategy, and technology to deliver solutions that help businesses grow, connect, and stand out in the digital world.
              </p>

              <ul className="list-style-one mb-35">
                <li>Digital Creative Agency
</li>
                <li>Professional Problem-Solving</li>
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
