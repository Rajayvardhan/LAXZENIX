export default function ServiceDetailsPage() {
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
          <a href="service-details.html#" className="panel-close">
            <i className="fal fa-times"></i>
          </a>
        </div>
      </div>
      {/* <header className="theme-header transparent-header">
        <div className="header-navigation navigation-style-v1">
          <div className="nav-overlay"></div>
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <a href="index.html" className="brand-logo">
                  <img src="assets/images/logo/logo-1.png" alt="Site Logo" />
                </a>
              </div>
              <div className="nav-menu">
                <div className="navbar-close">
                  <i className="far fa-times"></i>
                </div>
                <div className="nav-search">
                  <form>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item has-children">
                      <a href="service-details.html#" className="nav-link">
                        Demos
                      </a>
                      <ul className="sub-menu">
                        <li className="has-children">
                          <a href="service-details.html#">Multipage</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index.html">Creative Agency</a>
                            </li>
                            <li>
                              <a href="index-2.html">Digital Agency</a>
                            </li>
                            <li>
                              <a href="index-3.html">Design Studio</a>
                            </li>
                            <li>
                              <a href="index-3-dark.html">Design Studio Dark</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="service-details.html#">Onepage</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="onepage-index-1.html">Creative Agency</a>
                            </li>
                            <li>
                              <a href="onepage-index-2.html">Digital Agency</a>
                            </li>
                            <li>
                              <a href="onepage-index-3.html">Design Studio</a>
                            </li>
                            <li>
                              <a href="onepage-index-3-dark.html">
                                Design Studio Dark
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="service-details.html#" className="active nav-link">
                        Services
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="services.html">Our Service</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="service-details.html#" className="nav-link">
                        Portfolio
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="projects.html">Our Portfolio</a>
                        </li>
                        <li>
                          <a href="project-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="service-details.html#" className="nav-link">
                        Pages
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html">Our Team</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="service-details.html#" className="nav-link">
                        Blog
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blogs.html">Our Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right-nav">
                <ul>
                  <li className="bar-item">
                    <a href="service-details.html#">
                      <img src="assets/images/dot.png" alt="dot" />
                    </a>
                  </li>
                  <li className="navbar-toggle-btn">
                    <div className="navbar-toggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header> */}
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
                <h1>Service Details</h1>
                <ul className="breadcrumbs-link">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Service Details</li>
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
      <section className="features-area pt-210">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-wrapper mb-50 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title st-one">Features</span>
                  <h2>Build Your Business Workflow Faster</h2>
                  <p className="blue-dark">
                    Professional Design Agency to provide solutions
                  </p>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate
                  accusantium doloremque laudantium totam
                </p>
                <a href="about.html" className="main-btn">
                  Discover More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-list mb-50 wow fadeInRight">
                <div className="features-item mb-30">
                  <div className="text">
                    <h4>Workflow</h4>
                    <p>
                      Sit amet consectetur adipiscing elit eiusmod tempor
                      incididunt ut labore dolore
                    </p>
                  </div>
                </div>
                <div className="features-item mb-30">
                  <div className="text">
                    <h4>Design Strategy</h4>
                    <p>
                      Sit amet consectetur adipiscing elit eiusmod tempor
                      incididunt ut labore dolore
                    </p>
                  </div>
                </div>
                <div className="features-item mb-30">
                  <div className="text">
                    <h4>Web Development</h4>
                    <p>
                      Sit amet consectetur adipiscing elit eiusmod tempor
                      incididunt ut labore dolore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-area process-area-v1 pt-90 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Process</span>
                <h2>How Does We Works</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 process-column">
              <div
                className="process-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-7.png" alt="" />
                </div>
                <div className="text">
                  <h4>Project Layouts</h4>
                  <p>
                    Sed ut pericias unde omnis natus error sit voluptate ccusan
                    tium dolore mque laudan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-column">
              <div
                className="process-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".20s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-8.png" alt="" />
                </div>
                <div className="text">
                  <h4>Project Analysis</h4>
                  <p>
                    Sed ut pericias unde omnis natus error sit voluptate ccusan
                    tium dolore mque laudan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-column">
              <div
                className="process-item text-center mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <img src="assets/images/icon/icon-9.png" alt="" />
                </div>
                <div className="text">
                  <h4>Final Results</h4>
                  <p>
                    Sed ut pericias unde omnis natus error sit voluptate ccusan
                    tium dolore mque laudan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-area process-area-v2 dark-blue-bg pt-130 pb-130 position-relative z-1">
        <div className="shape shape-one scene">
          <span data-depth=".5">
            <img src="assets/images/shape/shape-10.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two scene">
          <span data-depth="1">
            <img src="assets/images/shape/shape-11.png" alt="" />
          </span>
        </div>
        <div className="shape shape-three">
          <span></span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title section-title-white text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Working Module</span>
                <h2>Creative Web Design Process</h2>
                <p>Professional Design Agency to provide solutions</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="process-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="process-item mb-65 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="icon">
                        <img src="assets/images/icon/icon-10.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="step">Step 01</span>
                        <h4>Make Smart Plan</h4>
                        <p>
                          Sed ut pericias unde omnis natus error sit volutate
                          cusan dolore mque laudan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="process-item mb-65 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <img src="assets/images/icon/icon-11.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="step">Step 02</span>
                        <h4>Prototype</h4>
                        <p>
                          Sed ut pericias unde omnis natus error sit volutate
                          cusan dolore mque laudan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="process-item mb-65 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="icon">
                        <img src="assets/images/icon/icon-12.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="step">Step 03</span>
                        <h4>Development</h4>
                        <p>
                          Sed ut pericias unde omnis natus error sit volutate
                          cusan dolore mque laudan
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="process-item mb-65 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <img src="assets/images/icon/icon-13.png" alt="" />
                      </div>
                      <div className="text">
                        <span className="step">Step 04</span>
                        <h4>Get Results</h4>
                        <p>
                          Sed ut pericias unde omnis natus error sit volutate
                          cusan dolore mque laudan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-area pt-130 pb-135">
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
                  <a href="project-details.html">Dashboard Design</a>
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
                      <a href="service-details.html#">
                        <i className="fab fa-dribbble"></i>Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html#">
                        <i className="fab fa-instagram"></i>Instagram
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html#">
                        <i className="fab fa-twitter"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html#">
                        <i className="fab fa-behance"></i>Behance
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html#">
                        <i className="fab fa-facebook-f"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a href="service-details.html#">
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
                      <a href="service-details.html#">
                        abillo inventore verita
                      </a>
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
