export default function StudioCounter() {
    return (
        <>
            <section
                className="counter-area counter-area-v3 light-gray-bg pt-120 pb-90 position-relative z-1"
            >
                <div className="shape shape-one"><span></span></div>
                <div className="shape shape-two scene">
                    <span data-depth="3"
                    ><img src="assets/images/shape/shape-15.png" alt=""
                        /></span>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-80 wow fadeInUp">
                                <span className="sub-title st-two">Company Statices</span>
                                <h2 className="font-45">Something Know About Our Achievment</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="counter-item text-center mb-40 mt-lg-30 wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <div className="icon">
                                    <img src="assets/images/icon/icon-16.png" alt="" />
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="count">3654</span>+</h2>
                                    <p className="position">Project Done</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="counter-item text-center mb-40 wow fadeInDown"
                                data-wow-delay=".3s"
                            >
                                <div className="icon">
                                    <img src="assets/images/icon/icon-17.png" alt="" />
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="count">9634</span>+</h2>
                                    <p className="position">Global Parterns</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="counter-item text-center mb-40 mt-lg-3 wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <div className="icon">
                                    <img src="assets/images/icon/icon-18.png" alt="" />
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="count">7856</span>+</h2>
                                    <p className="position">Awards Winning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div
                                className="counter-item text-center mb-40 wow fadeInDown"
                                data-wow-delay=".5s"
                            >
                                <div className="icon">
                                    <img src="assets/images/icon/icon-19.png" alt="" />
                                </div>
                                <div className="text">
                                    <h2 className="number"><span className="count">7851</span>+</h2>
                                    <p className="position">Creative Teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}