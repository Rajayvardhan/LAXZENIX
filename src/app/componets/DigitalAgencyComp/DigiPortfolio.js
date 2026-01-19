export default function PortfolioAreaV2() {
    return (
        <section className="portfolio-area portfolio-area-v2 pt-75">
            <div className="container">
                {/* Section Title */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-45 wow fadeInUp">
                            <h2>Professional Experience</h2>
                            <p>Professional Design Agency to provide solutions</p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-filter-button text-center mb-30 wow fadeInDown">
                            <ul className="filter-btn mb-30">
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

                {/* Portfolio Grid */}
                <div className="row portfolio-grid">

                    <div className="col-lg-4 col-md-6 col-sm-12 cat-1 portfolio-column cat-3">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".1s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-10.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-2 cat-4">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-11.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-3 cat-4">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".3s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-12.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-3">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".4s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-13.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-5 cat-1">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".5s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-14.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-column cat-4 cat-2">
                        <div className="portfolio-item portfolio-style-two mb-50 wow fadeInUp" data-wow-delay=".6s">
                            <div className="img-holder">
                                <img src="/assets/images/portfolio/img-15.jpg" alt="Portfolio" />
                                <div className="portfolio-hover">
                                    <div className="hover-content">
                                        <a href="#" className="cat-btn">Design</a>
                                        <h4><a href="/project-details">Creative Arts</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
