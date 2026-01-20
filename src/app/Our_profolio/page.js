export default function OurPortfolioPage() {
  return (
    <>
    
     
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
                <h1>Projects</h1>
                <ul className="breadcrumbs-link">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Projects</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="page-banner-img">
                <img src="assets/images/breadcrumb/img-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-area portfolio-area-v1 light-gray-bg pt-210 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title mb-45 text-center wow fadeInUp">
                <span className="sub-title st-one">Latest Work</span>
                <h2>Professional Experience</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-filter-button text-center mb-40 wow fadeInUp">
                <ul className="filter-btn mb-30">
                  <li data-filter="*" className="active">
                    Show All
                  </li>
                  <li data-filter=".cat-1">Design</li>
                  <li data-filter=".cat-2">Branding</li>
                  <li data-filter=".cat-3">Development</li>
                  <li data-filter=".cat-4">SEO</li>
                  <li data-filter=".cat-5">UX/UI Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row portfolio-grid">
            <div className="col-lg-4 col-md-6 col-sm-12 cat-1 portfolio-column cat-3">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".10s"
              >
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
                    <a href="/Our_portfolio_details">Dashboard Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-2 cat-4">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".15s"
              >
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
                    <a href="/Our_portfolio_details">Landing Pages</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-3 cat-4">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".20s"
              >
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
                    <a href="/Our_portfolio_details">Illustration Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-3">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".25s"
              >
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
                    <a href="/Our_portfolio_details">Dashboard Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-5 cat-1">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="img-holder">
                  <img src="assets/images/portfolio/img-5.jpg" alt="Img" />
                  <a
                    href="assets/images/portfolio/img-5.jpg"
                    className="portfolio-hover img-popup"
                  >
                    <div className="hover-content">
                      <i className="far fa-plus"></i>
                    </div>
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="/Our_portfolio_details">Apps Development</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-2">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="img-holder">
                  <img src="assets/images/portfolio/img-6.jpg" alt="Img" />
                  <a
                    href="assets/images/portfolio/img-6.jpg"
                    className="portfolio-hover img-popup"
                  >
                    <div className="hover-content">
                      <i className="far fa-plus"></i>
                    </div>
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="/Our_portfolio_details">Website Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-3">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="img-holder">
                  <img src="assets/images/portfolio/img-7.jpg" alt="Img" />
                  <a
                    href="assets/images/portfolio/img-7.jpg"
                    className="portfolio-hover img-popup"
                  >
                    <div className="hover-content">
                      <i className="far fa-plus"></i>
                    </div>
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="/Our_portfolio_details">Dashboard Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-5 cat-1">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".45s"
              >
                <div className="img-holder">
                  <img src="assets/images/portfolio/img-8.jpg" alt="Img" />
                  <a
                    href="assets/images/portfolio/img-8.jpg"
                    className="portfolio-hover img-popup"
                  >
                    <div className="hover-content">
                      <i className="far fa-plus"></i>
                    </div>
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="/Our_portfolio_details">Apps Development</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-2">
              <div
                className="portfolio-item portfolio-style-one mb-50 wow fadeInUp"
                data-wow-delay=".50s"
              >
                <div className="img-holder">
                  <img src="assets/images/portfolio/img-9.jpg" alt="Img" />
                  <a
                    href="assets/images/portfolio/img-9.jpg"
                    className="portfolio-hover img-popup"
                  >
                    <div className="hover-content">
                      <i className="far fa-plus"></i>
                    </div>
                  </a>
                </div>
                <div className="text">
                  <h3 className="title">
                    <a href="/Our_portfolio_details">Website Design</a>
                  </h3>
                  <a href="projects.html" className="cat-link">
                    Creative Design
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-box text-center wow fadeInUp">
                <a href="projects.html" className="main-btn arrow-btn">
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-area page-footer light-gray-bg">
        <div className="container">
          <div className="footer-top pt-75 pb-40">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer-logo mb-40 wow fadeInLeft">
                  <img
                    src="assets/images/logo/footer-logo-1.png"
                    alt="Brand Logo"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-wrapper mb-40 wow fadeInRight">
                  <h3>
                    Modern Solutionsd For
                    <span className="blue-dark">Creative Agency</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget pt-70 pb-40">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".15s"
                >
                  <h4 className="widget-title">Services</h4>
                  <ul className="widget-nav">
                    <li>
                      <a href="services.html">UX/UI Design</a>
                    </li>
                    <li>
                      <a href="services.html">Web Development</a>
                    </li>
                    <li>
                      <a href="services.html">SEO Optimization</a>
                    </li>
                    <li>
                      <a href="services.html">Product Design</a>
                    </li>
                    <li>
                      <a href="services.html">Logo Design</a>
                    </li>
                    <li>
                      <a href="services.html">Brand Design</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget footer-nav-widget mb-40 wow fadeInUp"
                  data-wow-delay=".20s"
                >
                  <h4 className="widget-title">Links</h4>
                  <ul className="widget-nav">
                    <li>
                      <a href="services.html">About Agency</a>
                    </li>
                    <li>
                      <a href="services.html">Latest News & Blog</a>
                    </li>
                    <li>
                      <a href="services.html">Meet The Team</a>
                    </li>
                    <li>
                      <a href="services.html">Popular Services</a>
                    </li>
                    <li>
                      <a href="services.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="services.html">Need a Career?</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget social-widget mb-40 wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <h4 className="widget-title">Follow</h4>
                  <ul className="social-nav">
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-dribbble"></i>Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-instagram"></i>Instagram
                      </a>
                    </li>
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-twitter"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-behance"></i>Behance
                      </a>
                    </li>
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-facebook-f"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a href="projects.html#">
                        <i className="fab fa-medium-m"></i>Medium
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay=".30s"
                >
                  <div className="newsletter-content">
                    <h3>Subscribe Our Newsletter</h3>
                    <p>
                      Natus errorsit voluptatem accusa dolore mque quae
                      <a href="projects.html#">abillo inventore verita</a>{" "}
                      achitec beatae vitae dicta sunt explicabo.
                    </p>
                    <form>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                        <button className="main-btn">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>&copy; 2022. All rights reserved design by Webtend</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-nav float-lg-right">
                  <ul>
                    <li>
                      <a href="services.html">Setting & Privacy </a>
                    </li>
                    <li>
                      <a href="services.html">Faqs</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
