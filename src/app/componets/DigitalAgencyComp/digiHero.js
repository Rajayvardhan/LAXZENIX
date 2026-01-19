export default function DigiHeroBannerV2() {
    return (
        <section className="hero-banner-v2 position-relative z-1">
            <div className="shape shape-one">
                <span>
                    <img
                        src="/assets/images/hero/hero-two-shape-1.png"
                        alt=""
                    />
                </span>
            </div>

            <div className="shape shape-two">
                <span>
                    <img
                        src="/assets/images/hero/hero-two-shape-2.png"
                        alt=""
                    />
                </span>
            </div>

            <div className="shape shape-three">
                <span>
                    <img
                        src="/assets/images/hero/hero-two-shape-3.png"
                        alt=""
                    />
                </span>
            </div>

            <div className="shape shape-four">
                <span>
                    <img
                        src="/assets/images/hero/dot-pattern.png"
                        alt=""
                    />
                </span>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <span className="sub-title wow fadeInUp">
                                <i className="fas fa-arrow-right"></i> Welcome to Pixlab
                            </span>

                            <h1
                                className="wow fadeInUp"
                                data-wow-delay=".5s"
                            >
                                Brand, Design & Development Agency
                            </h1>

                            <p
                                className="wow fadeInDown"
                                data-wow-delay="1s"
                            >
                                Sit amet consectetur adipiscing elit sed do eiusmod tem
                                porincididunt ut labore dolore magna aliqua.
                            </p>

                            <a
                                href="/about"
                                className="main-btn arrow-btn wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                Discover More
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div
                            className="hero-img wow fadeInRight"
                            data-wow-delay=".9s"
                        >
                            <img
                                src="/assets/images/hero/hero-three-img-1-1.png"
                                alt="Hero"
                            />

                            <div className="hero-shape hero-shape-one animate-float-x">
                                <span>
                                    <img
                                        src="/assets/images/hero/shape-1.png"
                                        alt=""
                                    />
                                </span>
                            </div>

                            <div className="hero-shape hero-shape-two animate-float-y">
                                <span>
                                    <img
                                        src="/assets/images/hero/shape-2.png"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
