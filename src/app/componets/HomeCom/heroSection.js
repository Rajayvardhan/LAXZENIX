export default function HeroBanner() {
  return (
    <section className="hero-banner-v1 position-relative">
      <div className="bg-one"></div>
      <div className="bg-two"></div>

      <div className="hero-img hero-img-one scene">
        <span data-depth=".5">
          <img
            src="/assets/images/hero/hero-one-img-1.jpg"
            className="wow fadeInLeft"
            alt="hero image"
          />
        </span>
      </div>

      <div className="hero-img hero-img-two scene">
        <span data-depth=".2">
          <img
            src="/assets/images/hero/hero-one-img-2.jpg"
            className="wow fadeInLeft"
            alt="hero image"
          />
        </span>
      </div>

      <div className="hero-img hero-img-three scene">
        <span data-depth=".3">
          <img
            src="/assets/images/shape/circle-logo-1.png"
            className="wow fadeInLeft"
            alt="hero image"
          />
        </span>
      </div>

      <div className="shape shape-one scene">
        <span data-depth="1">
          <img src="/assets/images/shape/shape-1.png" alt="shape" />
        </span>
      </div>

      <div className="shape shape-two scene">
        <span data-depth="2">
          <img src="/assets/images/shape/shape-2.png" alt="shape" />
        </span>
      </div>

      <div className="shape shape-three scene">
        <span data-depth="3">
          <img src="/assets/images/shape/shape-3.png" alt="shape" />
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="hero-content">
            <h1 className="wow fadeInUp" data-wow-delay=".5s">
                Brand, Design <br /> & Development <br /> Agency
              </h1>

              <p className="wow fadeInDown" data-wow-delay="1s">
          From strategy and design to development and marketing, we craft digital experiences that drive real business results.
              </p>

              <a
                href="/contact"
                className="main-btn arrow-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                Let’s Talk Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
