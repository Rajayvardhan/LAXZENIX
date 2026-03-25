import React from "react";

const LinkBuildingSection = () => {
    return (
        <section className="link-building-section py-5 fade-in-up">
            <div className="container">
                <div className="section-title mb-25">
                    <span className="sub-title st-one">What is Link Building?</span>
                    <h2>Build Grow & Manage Your Brand Identitys</h2>
                    <p className="">
                        Link building is the process of acquiring high-quality backlinks from authoritative websites to your site. These backlinks act as “votes of confidence” for search engines, signaling that your content is trustworthy, valuable, and worth ranking higher. At Sevenunique, we help businesses build strong backlink profiles to improve SEO performance and online visibility.
                    </p>
                </div>

                <div className="row g-4 mb-5">

                    <div className="col-md-4">
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fa-solid fa-link"></i>
                            </div>
                            <h5>Authority Building</h5>
                            <p>
                                Establish your website as a trusted source in your industry with links from high-authority sites.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <h5>Search Engine Rankings</h5>
                            <p>
                                Boost your position in search results for target keywords, helping more potential customers find your business online.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-card">
                            <div className="icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h5>Referral Traffic</h5>
                            <p>
                                Drive qualified visitors directly from reputable websites, increasing traffic and potential conversions.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="stats-wrapper">
                    <div className="row text-center">

                        <div className="col-md-4 stat-item">
                            <h2>67%</h2>
                            <p>of marketers say link building is the most challenging SEO tactic</p>
                        </div>

                        <div className="col-md-4 stat-item">
                            <h2>3x</h2>
                            <p>more likely to rank on page 1 with quality backlinks</p>
                        </div>

                        <div className="col-md-4 stat-item">
                            <h2>45%</h2>
                            <p>of SEO experts believe backlinks have the highest ROI</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default LinkBuildingSection;