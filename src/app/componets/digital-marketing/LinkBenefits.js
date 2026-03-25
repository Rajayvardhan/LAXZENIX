import Link from "next/link";
import React from "react";

const LinkBenefits = () => {
    return (
        <section className="benefits-section py-5">
            <div className="container">
                <div className="section-title mb-25">
                    <span className="sub-title st-one">BENEFITS</span>
                    <h2>Benefits of <span>Link Building</span></h2>
                    <p className="blue-dark">
                        Build authority, boost rankings, and drive qualified traffic with Sevenunique’s expert link-building services. Quality backlinks improve SEO, increase visibility, and create long-term value for your website.
                    </p>
                </div>

                <div className="row g-4 mb-5">

                    <div className="col-md-6 col-lg-3">
                        <div className="benefit-card">
                            <i className="fa-solid fa-chart-line"></i>
                            <h5>Higher Search Rankings</h5>
                            <p>Quality backlinks are one of Google’s top ranking factors, helping your website climb search results and attract more organic visitors.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="benefit-card">
                            <i className="fa-solid fa-arrow-trend-up"></i>
                            <h5>Increased Organic Traffic</h5>
                            <p>Better rankings lead to more visibility and qualified traffic from search engines, bringing potential customers directly to your site.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="benefit-card">
                            <i className="fa-solid fa-shield-check"></i>
                            <h5>Enhanced Domain Authority</h5>
                            <p>Strengthen your website’s overall authority and credibility in your industry through strategic backlink placements.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="benefit-card">
                            <i className="fa-solid fa-bullhorn"></i>
                            <h5>Brand Exposure</h5>
                            <p>Get your brand in front of new audiences via high-authority website placements, improving recognition and trust.</p>
                        </div>
                    </div>

                </div>

                <div className="stats-box text-center mb-5">
                    <h5 className="mb-4">Proven Results</h5>
                    <div className="row">

                        <div className="col-md-3 stat-item">
                            <h3>+40%</h3>
                            <p>Organic Traffic Increase</p>
                        </div>

                        <div className="col-md-3 stat-item">
                            <h3>+25%</h3>
                            <p>Domain Authority Boost</p>
                        </div>

                        <div className="col-md-3 stat-item">
                            <h3>+60%</h3>
                            <p>Keyword Rankings Improved</p>
                        </div>

                        <div className="col-md-3 stat-item">
                            <h3>+35%</h3>
                            <p>Lead Generation Increase</p>
                        </div>

                    </div>
                </div>

                <div className="text-center">
                    <p className="section-desc mb-4">
                        Unlike paid advertising, quality backlinks provide lasting SEO value, driving leads, conversions, and sustainable growth over time.
                    </p>

                    <Link href="/contactUs" className="btn btn-primary px-4 py-2">
                        Start Building Your Authority
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default LinkBenefits;