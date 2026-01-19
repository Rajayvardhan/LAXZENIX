export default function ServiceSection() {
    return (
        <section className="service-area pt-90 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-55 wow fadeInUp">
                            <span className="sub-title st-one">Services</span>
                            <h2>Creative Design Solutions</h2>
                            <p>Professional Design Agency to provide solutions</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="service-item service-style-one mb-40 wow fadeInDown"
                            data-wow-delay=".3s"
                        >
                            <div className="icon">
                                <i className="flaticon-strategy"></i>
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Strategy</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>Product Management</li>
                                    <li>MVP Definition</li>
                                    <li>Product Strategy</li>
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
                        >
                            <div className="icon">
                                <i className="flaticon-design"></i>
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Product Design</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>Product Management</li>
                                    <li>MVP Definition</li>
                                    <li>Product Strategy</li>
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
                        >
                            <div className="icon">
                                <i className="flaticon-source-code"></i>
                            </div>
                            <div className="text">
                                <h3 className="title">
                                    <a href="/service-details">Development</a>
                                </h3>
                                <ul className="list-style-two">
                                    <li>Product Management</li>
                                    <li>MVP Definition</li>
                                    <li>Product Strategy</li>
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
