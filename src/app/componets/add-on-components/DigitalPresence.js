import Image from "next/image";
import React from "react";

const PixlabServices = ({ services }) => {
    return (
        <section className="pixlab-section">
            <div className="container">

                {/* Heading */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center mb-55 wow fadeInUp">
                            <span className="sub-title st-one">Digital Presence</span>
                            <h2>Enhance Your Digital Presence</h2>
                            <p>
                                We offer a wide range of services to help you establish a strong digital presence and boost your business's online presence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="row g-4 mt-4">
                    {services.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="pixlab-card">
                                <span className="step-no">{item.id}.</span>

                                <div className="pix-icon-container">
                                    {item.icon?.startsWith("/") ? (
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={50}
                                            height={50}
                                        />
                                    ) : (
                                        <span className="icon-emoji">{item.icon}</span>
                                    )}
                                </div>

                                <h3 className="pix-h3">{item.title}</h3>

                                <p className="pix-p">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PixlabServices;