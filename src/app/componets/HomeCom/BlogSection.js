export default function BlogSection() {
  return (
    <section className="blog-area blog-area-v1 light-gray-bg pt-130 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className="section-title text-center mb-55 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <span className="sub-title st-one">Articles News</span>
              <h2>Latest News & Blogs</h2>
             <p>Insights, stories, and updates crafted by our team to help brands stay ahead.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="blog-post-item mb-40 wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="entry-content">
                <a href="#" className="cat-btn">Design</a>
                <h3 className="title">
                  <a href="/blog-details">
                    Everything You Want To Know About
                  </a>
                </h3>
                <p>
                  Sit amet consectete adipising elit wedo eiusmod temeidiunt
                  laboret dolore magna ways
                </p>
                <a href="/blog-details" className="btn-link">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="blog-post-item mb-40 wow fadeInUp"
              data-wow-delay=".30s"
            >
              <div className="entry-content">
                <a href="#" className="cat-btn">Design</a>
                <h3 className="title">
                  <a href="/blog-details">
                    Designing Better Links For Websites And Emails
                  </a>
                </h3>
                <p>
                  Sit amet consectete adipising elit wedo eiusmod temeidiunt
                  laboret dolore magna ways
                </p>
                <a href="/blog-details" className="btn-link">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="blog-post-item mb-40 wow fadeInUp"
              data-wow-delay=".35s"
            >
              <div className="entry-content">
                <a href="#" className="cat-btn">Design</a>
                <h3 className="title">
                  <a href="/blog-details">
                    Everything You Want To Know About
                  </a>
                </h3>
                <p>
                  Sit amet consectete adipising elit wedo eiusmod temeidiunt
                  laboret dolore magna ways
                </p>
                <a href="/blog-details" className="btn-link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="button-box text-center wow fadeInUp">
              <a href="/blogs" className="main-btn arrow-btn">
                View More News
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
