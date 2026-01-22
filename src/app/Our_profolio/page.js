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
    
    </>
  );
}
