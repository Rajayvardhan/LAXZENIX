import Image from "next/image";


export default function CounterSection() {
    return (
        <section className="counter-area counter-area-v1 pt-240 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-55 wow fadeInUp">
                            <span className="sub-title st-one">Agency Statistics</span>
                            <h2>Why Clients Trust Laxzenix

                            </h2>
                            <p>A creative digital agency known for strategic thinking, quality execution, and measurable results.</p>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                            className="counter-item mb-40 wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/project-complete.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h2 className="number">
                                    <span>256</span>+
                                </h2>
                                <p>Project Complete</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                            className="counter-item mb-40 wow fadeInUp"
                            data-wow-delay=".3s"
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/project-complete.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h2 className="number">
                                    <span>783</span>+
                                </h2>
                                <p>Project Complete</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                            className="counter-item mb-40 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/award-icon.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h2 className="number">
                                    <span>97</span>+
                                </h2>
                                <p>Awards Winning</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div
                            className="counter-item mb-40 wow fadeInUp"
                            data-wow-delay=".5s"
                        >
                            <div className="icon">
                                <Image
                                    src="/assets/image/exp-icon.png"
                                    width={80}
                                    height={80}
                                    alt="Strategy Icon"
                                />
                            </div>
                            <div className="text">
                                <h2 className="number">
                                    <span>35</span>+
                                </h2>
                                <p>Years Of Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
