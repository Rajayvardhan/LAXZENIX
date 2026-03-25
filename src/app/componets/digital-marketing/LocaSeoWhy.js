import React from "react";

export default function LocaSeoWhy() {
    return (
        <section className="pt-125 pb-130 position-relative overflow-hidden local-seo-why bg-white">

            <div className="local-seo-why__blob local-seo-why__blob--left"></div>
            <div className="local-seo-why__blob local-seo-why__blob--right"></div>

            <div className="container position-relative">
                <div className="section-title">
                    <span className="sub-title st-one mb-2"> Why Choose Us</span>
                    <h2>Local SEO Services</h2>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">

                        {[
                            {
                                icon: "📈",
                                title: "See Real Growth, Not Just Reports",
                                desc: "Join businesses that achieve an average 150% surge in local visibility within six months. We focus on metrics that directly impact your revenue.",
                            },
                            {
                                icon: "👥",
                                title: "Expertise That Understands Your Streets",
                                desc: "Our strategies are built on intimate knowledge of local search trends, consumer habits, and competitive landscapes in your specific area",
                            },
                            {
                                icon: "⭐",
                                title: "Ethical Strategies for Sustainable Success",
                                desc: "We strictly adhere to Google’s guideines, using only white-hat techniques that build lasting authority and keep your business in good standing.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="d-flex mb-4 align-items-start mt-3">

                                <div className="d-flex justify-content-center align-items-center rounded local-seo-why__icon">
                                    {item.icon}
                                </div>

                                <div className="ms-3">
                                    <h5 className="fw-semibold mb-1">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6">

                        <div className="p-4 rounded-4 position-relative local-seo-why__card">

                            <div className="text-center mb-4">
                                <h4 className="fw-bold">
                                    Ready to Dominate Local Search?
                                </h4>
                                <p>
                                    Get a free local SEO audit and discover how we can help your
                                    business grow
                                </p>
                            </div>

                            <div className="row text-center mb-4">
                                <div className="col-6">
                                    <div className="p-3 rounded local-seo-why__stat">
                                        <h3 className="fw-bold">150%</h3>
                                        <small>Avg. Visibility Increase</small>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="p-3 rounded local-seo-why__stat">
                                        <h3 className="fw-bold">90%</h3>
                                        <small>Client Retention Rate</small>
                                    </div>
                                </div>
                            </div>

                            <a href="/contactUs" className="btn w-100 text-white fw-semibold local-seo-why__btn">
                                Start Your Free Audit Today
                            </a>

                            <p className="text-center small mt-3 mb-0">
                                No commitment required • Results in 24-48 hours
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}