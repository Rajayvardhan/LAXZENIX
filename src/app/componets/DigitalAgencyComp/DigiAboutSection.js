export default function AboutAreaV2() {
    return (
        <section className="about-area about-area-v2 pt-130">
            <div className="container">
                <div className="row">
                    {/* Left Image */}
                    <div className="col-lg-5">
                        <div className="img-holder mb-50 wow fadeInLeft">
                            <div className="shape shape-one animate-float-y">
                                <span>
                                    <img
                                        src="/assets/images/shape/shape-5.png"
                                        alt="Shape"
                                    />
                                </span>
                            </div>
                            <img
                                src="/assets/images/about/about-3.jpg"
                                alt="About Image"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-7">
                        <div className="text-wrapper mb-50 wow fadeInRight">
                            <div className="section-title mb-25">
                                <h2>We’re Creative Agency Since 1993</h2>
                                <p className="blue-dark">
                                    Professional Design Agency provide solutions
                                </p>
                            </div>

                            <p>
                                On the other hand denounce with righteous indigna see tion and
                                dislike men who are beguiled and demoralizedes by the charms of
                                pleasure of the moment, so blinded desire that they cannot
                                foresee.
                            </p>

                            <ul className="list-style-one mb-40">
                                <li>Digital Creative Agency</li>
                                <li>Professional Problem Solutions</li>
                                <li>Web Design & Development</li>
                            </ul>

                            <a
                                href="/about"
                                className="main-btn bordered-btn btn-blue"
                            >
                                Learn More Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
