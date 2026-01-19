export default function ServiceAreaV1() {
    return (
        <section className="service-area service-area-v1">
            <div className="container-1350">
                <div className="service-wrapper pt-75 pb-40">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Creative Design Solutions</h2>
                                <p>Professional Design Agency to provide solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* Service 1 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-two mb-40 wow fadeInUp"
                                data-wow-delay=".15s"
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

                        {/* Service 2 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-two mb-40 wow fadeInUp"
                                data-wow-delay=".20s"
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

                        {/* Service 3 */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-two mb-40 wow fadeInUp"
                                data-wow-delay=".25s"
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
            </div>
        </section>
    );
}
