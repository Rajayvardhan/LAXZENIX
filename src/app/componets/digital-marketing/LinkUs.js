import React from "react";

const LinkUs = () => {
    const points = [
        "Sevenunique Tech Solution Pvt. Ltd. offers quality SEO link-building services to improve domain authority, search engine performance, and drive quality traffic.",
        "We specialize in authority link-building for agencies with niche-relevant and verified backlinks using advanced outreach techniques.",
        "Our team follows 100% white-hat SEO practices including guest posting, content-led link building, and influencer marketing.",
        "We create customized link-building campaigns tailored to your goals, helping startups, agencies, and enterprises grow with measurable results.",
    ];

    return (
        <section className="linkus-section py-5">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4">
                        <div className="section-title mb-25">
                            <span className="sub-title st-one">WHY CHOOSE US</span>
                            <h2>Why Choose <span>LinkUs</span> for SEO Link Building?</h2>
                            <p className="linkus-desc">
                                Build authority, improve rankings, and drive quality traffic with our expert link-building strategies designed for long-term success.
                            </p>
                        </div>

                        <button className="btn btn-primary px-4 py-2 mt-4">
                            Get Free SEO Consultation
                        </button>
                    </div>

                    {/* Right Cards */}
                    <div className="col-lg-7">
                        <div className="row g-4">

                            {points.map((item, index) => (
                                <div className="col-md-6 mb-3" key={index}>
                                    <div className="linkus-card h-100">
                                        <div className="linkus-icon">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        <p>{item}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LinkUs;