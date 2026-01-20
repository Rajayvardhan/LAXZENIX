import StudioBlog from "../componets/StudioComp/studioBlog";
import StudioCounter from "../componets/StudioComp/studioCounter";
import StudioPortfolio from "../componets/StudioComp/studioPortfolio";
import StudioTestimonial from "../componets/StudioComp/studioTestimonial";

export default function OurServicePage() {
  return (
    <>
      <div className="offcanvas-panel">
        <div className="panel-overlay"></div>
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <a href="index.html">
              <img src="assets/images/logo/logo-1.png" alt="Logo" />
            </a>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Us</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsam alias quae cupiditate quas, neque eum magni impedit
              asperiores.
            </p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Contact Us</h5>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt"></i>
                121 King St, Melbourne VIC 3000, Australia.
              </li>
              <li>
                <i className="fal fa-envelope-open"></i>
                <a href="mailto:hello@barky.com"> hello@barky.com</a>
                <a href="mailto:info@barky.com">info@barky.com</a>
              </li>
              <li>
                <i className="fal fa-phone"></i>
                <a href="tel:(312)-895-9800">(312) 895-9800</a>
                <a href="tel:(312)-895-9888">(312) 895-9888</a>
              </li>
            </ul>
          </div>
          <a href="services.html#" className="panel-close">
            <i className="fal fa-times"></i>
          </a>
        </div>
      </div>
      <section className="page-banner bg_cover position-relative z-1">
        <div className="shape shape-one scene">
          <span data-depth="1">
            <img src="assets/images/shape/shape-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two scene">
          <span data-depth="2">
            <img src="assets/images/shape/shape-2.png" alt="" />
          </span>
        </div>
        <div className="shape shape-three scene">
          <span data-depth="3">
            <img src="assets/images/shape/shape-3.png" alt="" />
          </span>
        </div>
        <div className="shape shape-four scene">
          <span data-depth="4">
            <img src="assets/images/shape/shape-2.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="page-title">
                <h1>Services</h1>
                <ul className="breadcrumbs-link">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Services</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="page-banner-img">
                <img src="assets/images/breadcrumb/img-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fancy-text-block fancy-text-block-v2 pt-210 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-holder mb-50 wow fadeInLeft" data-wow-delay=".2s">
                <img src="assets/images/about/img-5.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-wrapper mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="section-title mb-30">
                  <span className="sub-title st-one">What We Do</span>
                  <h2>Popular Solution For Growth Business</h2>
                  <p className="blue-dark">
                    Professional Design Agency to provide solutions
                  </p>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaquepsa
                  quae abillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enimpsam luptate quia
                  voluptas aspernatur aut fugitdolor sit amet
                </p>
                <a href="about.html" className="main-btn arrow-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudioPortfolio />
      <StudioCounter />
     
      <StudioBlog />
      <section className="service-area service-area-v1 bototm-minus-200 position-relative z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Services</span>
                <h2>Creative Design Solutions</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-item service-style-three mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-strategy"></i>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="service-details.html">Strategy</a>
                  </h3>
                  <ul className="list-style-two">
                    <li>Product Management</li>
                    <li>MVP Definition</li>
                    <li>Product Strategy</li>
                  </ul>
                  <a href="service-details.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-item service-style-three mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-design"></i>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="service-details.html">Product Design</a>
                  </h3>
                  <ul className="list-style-two">
                    <li>Product Management</li>
                    <li>MVP Definition</li>
                    <li>Product Strategy</li>
                  </ul>
                  <a href="service-details.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service-item service-style-three mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="icon">
                  <i className="flaticon-source-code"></i>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="service-details.html">Development</a>
                  </h3>
                  <ul className="list-style-two">
                    <li>Product Management</li>
                    <li>MVP Definition</li>
                    <li>Product Strategy</li>
                  </ul>
                  <a href="service-details.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="skill-area skill-area-v1 light-gray-bg pb-90 position-relative z-1">
        <div className="shape shape-one scene">
          <span data-depth="2">
            <img src="assets/images/shape/shape-7.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two scene">
          <span data-depth="3">
            <img src="assets/images/shape/shape-8.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-holder position-relative z-1 mb-50 wow fadeInLeft">
                <div className="shape shape-one animate-float-y">
                  <span>
                    <img src="assets/images/shape/shape-5.png" alt="" />
                  </span>
                </div>
                <img src="assets/images/skill/img-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-wrapper mb-50">
                <div className="section-title mb-30 wow fadeInUp">
                  <span className="sub-title st-one">Best Skills</span>
                  <h2>Experience Team to Provide Ideas</h2>
                  <p className="blue-dark">
                    Professional Design Agency to provide solutions
                  </p>
                </div>
                <div className="skill-list wow fadeInDown">
                  <div className="single-skill">
                    <div className="progress-title">
                      <h5>
                        UX/UI Strategy <span>79%</span>
                      </h5>
                    </div>
                    <div
                      className="progress-bar wow slideInLeft"
                      role="progressbar"
                      style={{ width: "79%" }}
                    ></div>
                    <div className="progress"></div>
                  </div>
                  <div className="single-skill">
                    <div className="progress-title">
                      <h5>
                        Web Development <span>64%</span>
                      </h5>
                    </div>
                    <div
                      className="progress-bar wow slideInLeft"
                      role="progressbar"
                      style={{ width: "64%" }}
                    ></div>
                    <div className="progress"></div>
                  </div>
                  <div className="single-skill">
                    <div className="progress-title">
                      <h5>
                        Product Design <span>93%</span>
                      </h5>
                    </div>
                    <div
                      className="progress-bar wow slideInLeft"
                      role="progressbar"
                      style={{ width: "93%" }}
                    ></div>
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pricing-area pricing-area-v1 dark-blue-bg pattern-bg pt-130 pb-120">
        <div className="shape shape-one scene">
          <span data-depth="1">
            <img src="assets/images/shape/shape-9.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-white text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Pricing Plan</span>
                <h2>Pricing Package</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="pricing-head text-center">
                  <span className="plan">Basic Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>16.95
                  </h2>
                </div>
                <div className="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul className="pricing-list">
                    <li className="check">Web Design</li>
                    <li className="check">Web Development</li>
                    <li className="check">SEO Optimizations</li>
                    <li className="uncheck">Online Support</li>
                    <li className="uncheck">Domain & Hosting</li>
                  </ul>
                  <a
                    href="service-details.html"
                    className="main-btn arrow-btn bordered-btn btn-blue"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="ribbon">Popular</div>
                <div className="pricing-head text-center">
                  <span className="plan">Standard Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>46.95
                  </h2>
                </div>
                <div className="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul className="pricing-list">
                    <li className="check">Web Design</li>
                    <li className="check">Web Development</li>
                    <li className="check">SEO Optimizations</li>
                    <li className="check">Online Support</li>
                    <li className="check">Domain & Hosting</li>
                  </ul>
                  <a
                    href="service-details.html"
                    className="main-btn arrow-btn bordered-btn btn-blue"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="pricing-head text-center">
                  <span className="plan">Silver Plan</span>
                  <h2 className="price">
                    <span className="currency">$</span>96.95
                  </h2>
                </div>
                <div className="pricing-body">
                  <p>Sit amet consectetur adiising seddo eiusmod teme</p>
                  <ul className="pricing-list">
                    <li className="check">Web Design</li>
                    <li className="check">Web Development</li>
                    <li className="check">SEO Optimizations</li>
                    <li className="check">Online Support</li>
                    <li className="check">Domain & Hosting</li>
                  </ul>
                  <a
                    href="service-details.html"
                    className="main-btn arrow-btn bordered-btn btn-blue"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="portfolio-area portfolio-area-v1 pt-130 pb-135">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Latest Work</span>
                <h2>Professional Experience</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="portfolio-slider-one">
            <div className="portfolio-item portfolio-style-one wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-1.jpg" alt="Img" />
                <a
                  href="assets/images/portfolio/img-1.jpg"
                  className="portfolio-hover img-popup"
                >
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="project-details.html">Mobile UI Mockup</a>
                </h3>
                <a href="projects.html" className="cat-link">
                  Creative Design
                </a>
              </div>
            </div>
            <div className="portfolio-item portfolio-style-one wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-2.jpg" alt="Img" />
                <a
                  href="assets/images/portfolio/img-2.jpg"
                  className="portfolio-hover img-popup"
                >
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="project-details.html">Landing Pages</a>
                </h3>
                <a href="projects.html" className="cat-link">
                  Creative Design
                </a>
              </div>
            </div>
            <div className="portfolio-item portfolio-style-one wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-3.jpg" alt="Img" />
                <a
                  href="assets/images/portfolio/img-3.jpg"
                  className="portfolio-hover img-popup"
                >
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="project-details.html">Illustration Design</a>
                </h3>
                <a href="projects.html" className="cat-link">
                  Creative Design
                </a>
              </div>
            </div>
            <div className="portfolio-item portfolio-style-one wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/portfolio/img-4.jpg" alt="Img" />
                <a
                  href="assets/images/portfolio/img-4.jpg"
                  className="portfolio-hover img-popup"
                >
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="project-details.html">Dashboard Design</a>
                </h3>
                <a href="projects.html" className="cat-link">
                  Creative Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
