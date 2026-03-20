import React from 'react'

export default function WhatWeDo({
    subTitle,
    heading,
    paragraph,
    buttonText,
    buttonLink,
    mainImage,
    shapeOne,
    shapeTwo,
    list,
    reverse = false
}) {
    return (
        <>
            <section className="fancy-text-block light-gray-bg py-5 fancy-text-block-v1">
                <div className="container pt-5">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                          <div className={`col-lg-6 ${reverse ? "order-lg-2" : ""}`}>
                            <div className="text-wrapper mb-40 fadeInLeft">
                                <div className="section-title mb-25">
                                    <span className="sub-title st-one">{subTitle}</span>
                                    <h2>{heading}</h2>

                                    <p className="" style={{ fontWeight: "normal", fontSize: "18px" }}>{paragraph}</p>
                                    <ul className="mt-3 pl-3" style={{listStyleType:"disc"}}>
                                        {list?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>


                                <a href={buttonLink} className="main-btn arrow-btn">
                                    {buttonText}
                                </a>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className={`col-lg-6 ${reverse ? "order-lg-1" : ""}`}>
                            <div className="img-holder position-relative z-1 mb-40 wow fadeInRight">

                                <div className="shape shape-one">
                                    <span>
                                        <img src={shapeOne} alt="" />
                                    </span>
                                </div>

                                <div className="shape shape-two">
                                    <span>
                                        <img src={shapeTwo} alt="" />
                                    </span>
                                </div>

                                <img src={mainImage} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
