"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQSection({ faqs, description }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-start g-5">

                    {/* Left Side */}
                    <div className="col-md-5">
                        <h3 className="fw-semibold text-dark">Frequently</h3>
                        <h3 className="fw-semibold text-dark">
                            Asked <span style={{ color: "#5956e9" }}>Questions</span>
                        </h3>

                        {description && (
                            <p className="mt-2 text-muted">{description}</p>
                        )}

                        <div className="mt-4 text-center text-md-start">
                            <Image
                                src="/assets/images/services/faq.png"
                                width={500}
                                height={350}
                                alt="faq"
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-7">

                        {faqs?.map((faq, index) => (
                            <div key={index} className="mb-3">

                                {/* Question */}
                                <div
                                    className={`faq-question d-flex justify-content-between align-items-center ${openIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <span>{faq.question}</span>

                                    <div className="icon-box">
                                        <i className={`bi ${openIndex === index ? "bi bi-dash" : "bi bi-plus"}`}></i>
                                    </div>
                                </div>

                                {/* Answer */}
                                {openIndex === index && (
                                    <div
                                        className={`faq-answer ${openIndex === index ? "open" : ""
                                            }`}
                                    >
                                        <div className="faq-content">
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}