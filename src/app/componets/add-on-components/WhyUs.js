import Image from "next/image";
import React from "react";

const WhyUs = ({ data, heading, subHeading, description }) => {
    return (
        <section className="counter-area counter-area-v1 pt-240 pb-90">
            <div className="container">

                {/* Heading */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-55 wow fadeInUp">
                            <span className="sub-title st-one">{subHeading}</span>
                            <h2>{heading}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="row gap-0">
                    {data?.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 px-0">
                            <div
                                className="counter-item mb-40 h-100 wow fadeInUp"
                                data-wow-delay={item.delay}
                            >
                                <div className="icon">
                                    <Image
                                        src={item.img}
                                        width={80}
                                        height={80}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="text">
                                    <h5 className="fw-semibold mb-2">
                                        {item.title}
                                    </h5>
                                    <p className="mb-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUs;