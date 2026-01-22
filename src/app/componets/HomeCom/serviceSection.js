import Image from "next/image";

export default function ServiceSection() {
    return (
        <section className="service-area pt-90 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-55 wow fadeInUp">
                            <span className="sub-title st-one">Services</span>
                            <h2>Smart Design. Powerful Digital Solutions.</h2>
                            <p>
                                A full-service digital agency delivering creativity, strategy, and technology under one roof.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="service-item service-style-one mb-40 wow fadeInDown"
                            data-wow-delay=".3s"
                            style={{ minHeight: "70vh" }}
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/strategy-icon.jpg"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Strategy</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>Product Planning</li>
                                    <li>MVP Definition</li>
                                    <li>Product Roadmap</li>
                                </ul>
                                <a href="/service-details" className="btn-link">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="service-item service-style-one mb-40 wow fadeInDown"
                            data-wow-delay=".5s"
                            style={{ minHeight: "70vh" }}
                        >
                            <div className="icon">
                               <Image
                                    src="/assets/image/product-design-icon.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Product Design</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>UX & UI Design</li>
                                    <li>MVP Planning</li>
                                    <li>Design-Led Strategy</li>
                                </ul>
                                <a href="/service-details" className="btn-link">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="service-item service-style-one mb-40 wow fadeInDown"
                            data-wow-delay=".7s"
                            style={{ minHeight: "70vh" }}
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/dev-icon.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Development</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>Custom Web & App Development</li>
                                    <li>MVP Development</li>
                                    <li>Scalable Solutions</li>
                                </ul>
                                <a href="/service-details" className="btn-link">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
