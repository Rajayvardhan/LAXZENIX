export default function PortfolioSection() {
  return (
    <section className="portfolio-area portfolio-area-v1 light-gray-bg pt-130 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mb-45 wow fadeInUp">
              <span className="sub-title st-one">Latest Work</span>
              <h2>Professional Experience</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-filter-button mb-50 wow fadeInLeft">
              <ul className="filter-btn mb-20">
                <li data-filter="*" className="active">Show All</li>
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
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".1s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-1.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-1.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Dashboard Design</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-2 cat-4">
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".2s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-2.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-2.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Landing Pages</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-3 cat-4">
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".3s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-3.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-3.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Illustration Design</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-3">
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".4s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-4.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-4.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Dashboard Design</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-5 cat-1">
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".5s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-5.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-5.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Apps Development</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-2">
            <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-wow-delay=".6s">
              <div className="img-holder">
                <img src="/assets/images/portfolio/img-6.jpg" alt="Img" />
                <a href="/assets/images/portfolio/img-6.jpg" className="portfolio-hover img-popup">
                  <div className="hover-content">
                    <i className="far fa-plus"></i>
                  </div>
                </a>
              </div>
              <div className="text">
                <h3 className="title">
                  <a href="/project-details">Website Design</a>
                </h3>
                <a href="/projects" className="cat-link">Creative Design</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
