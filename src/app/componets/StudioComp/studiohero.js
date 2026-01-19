"use client";

export default function StudioHeroV3() {
    return (
        <section className="hero-banner-v3 dark-blue-bg position-relative z-1">
            {/* Background Pattern */}
            <div
                className="hero-pattern bg_cover"
                style={{
                    backgroundImage:
                        "url(/assets/images/hero/hero-pattern.png)",
                }}
            ></div>

            {/* Floating Shapes (Parallax) */}
            <div className="shape shape-one scene">
                <span data-depth="1">
                    <img src="/assets/images/shape/shape-15.png" alt="" />
                </span>
            </div>

            <div className="shape shape-two scene">
                <span data-depth="1.2">
                    <img src="/assets/images/shape/shape-17.png" alt="" />
                </span>
            </div>

            <div className="shape shape-three scene">
                <span data-depth="1.5">
                    <img src="/assets/images/shape/shape-13.png" alt="" />
                </span>
            </div>

            <div className="shape shape-four scene">
                <span data-depth="3">
                    <img src="/assets/images/shape/shape-15.png" alt="" />
                </span>
            </div>

            <div className="shape shape-five scene">
                <span data-depth="2">
                    <img src="/assets/images/shape/shape-14.png" alt="" />
                </span>
            </div>

            <div className="shape shape-six scene">
                <span data-depth="6">
                    <img src="/assets/images/shape/shape-16.png" alt="" />
                </span>
            </div>

            {/* Content */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <a
                                href="https://www.youtube.com/watch?v=AT6oSIDbGkw"
                                className="video-popup wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <i className="fas fa-play"></i>
                            </a>

                            <h1 className="wow fadeInUp" data-wow-delay=".5s">
                                We’re Digital Web <br /> Design Agency
                            </h1>

                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium totam rem
                            </p>

                            <a
                                href="/services"
                                className="main-btn bordered-btn btn-white arrow-btn wow fadeInUp"
                                data-wow-delay=".7s"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div
                            className="hero-img wow fadeInRight"
                            data-wow-delay=".5s"
                        >
                            <img
                                src="/assets/images/hero/hero-two-img-1.png"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
