import ContactSection from "../../componets/HomeCom/ContactSection";
import FAQSection from "../../componets/Faq";
import ProcessSection from "../../componets/ProcessSection";
import WhyChooseUs from "../../componets/WhyChooseUs";
import Image from "next/image";
import React from "react";
import BlogSection from "../../componets/HomeCom/BlogSection";
import PageBanner from "../../componets/PageBanner";
import ServiceSection from "../../componets/ServiceSection";

export default function page() {
    const faqs = [
        {
            question: "What is SEO?",
            answer: "SEO helps your website rank higher on Google."
        },
        {
            question: "What is SMO?",
            answer: "SMO improves your social media presence."
        },
        {
            question: "Do you provide support?",
            answer: "Yes, we provide full support."
        },
        {
            question: "Do you provide support?",
            answer: "Yes, we provide full support."
        }
    ];
    const servicesData = [
        {
            title: "Search Engine Optimization",
            description:
                "We optimize your website to rank higher on search engines, drive organic traffic, and improve visibility for relevant keywords.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "Social Media Optimization",
            description:
                "Our SMO strategies build brand presence on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Local SEO Services",
            description:
                "We help your business appear in local search results and Google Maps.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Content Marketing Services",
            description:
                "We create high-quality content that educates, engages, and converts.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Website Optimization",
            description:
                "We improve your website’s speed, design, and user experience.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Link Building Services",
            description:
                "Our ethical link-building techniques enhance your site authority.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
    const processSteps = [
        {
            title: "Research",
            text: "In this stage, we collect all the important data required...",
            img: "/assets/images/services/analytics.png",
        },
        {
            title: "Create",
            text: "After research, we define goals and design campaigns...",
            img: "/assets/images/services/database.png",
        },
        {
            title: "Promote",
            text: "We promote campaigns across platforms...",
            img: "/assets/images/services/shopping-online.png",
        },
        {
            title: "Analyze",
            text: "We track performance and measure results...",
            img: "/assets/images/services/analyzing.png",
        },
        {
            title: "Optimize",
            text: "We improve campaigns for better results...",
            img: "/assets/images/services/development-plan.png",
        },
    ];
    return (
        <>
            <PageBanner
                title="Digital Marketing Services That Drive Results"
                image="/assets/images/services/digital-marketing.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/services" },
                    { label: "Digital Marketing" },
                ]}
            />
            {/* Services Card */}
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="Our Digital Marketing Services"
                subtitle="Services"
                description="A full-service digital agency delivering creativity, strategy, and technology under one roof."
                services={servicesData}
            />
            {/* Contact Btn */}
            <div className="py-5" style={{ backgroundColor: "#fafafb" }}>
                <div className="container text-center">

                    <h2
                        className="fw-semibold mx-auto mb-4 blue-dark"
                        style={{

                            fontSize: "clamp(18px, 2.5vw, 36px)",
                            lineHeight: "1.4",
                        }}
                    >
                        Looking for a custom digital marketing strategy tailored to your
                        business goals? Talk to our experts today and discover how we can help
                        you grow.
                    </h2>

                    <a
                        href="/contact"
                        className="main-btn arrow-btn"
                    >
                        Contact Us
                    </a>

                </div>
            </div>
            {/* Whuy Choose Us */}
            <WhyChooseUs
                image="/Digital/digi-1.png"
                title="Why"
                highlight="Choose"
                upperdescription="With a proven track record of success"
                description="As a trusted digital marketing partner, Laxzenix specialises in delivering strategies designed for your specific goals. From SEO to social media, we ensure every campaign is result-driven and growth-focused."
                points={[
                    { text: "Experienced team with a proven track record" },
                    { text: "Custom strategies for every industry and business size", wide: true },
                    { text: "Expertise in SEO, content, paid ads, and social media" },
                    { text: "Transparent reporting with real-time insights" },
                    { text: "ROI-focused, affordable, and scalable marketing packages", wide: true },
                ]}
            />
            {/* Tools We Use */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Tools &Technologies We Use</h2>
                                <p>Professional Digital Marketing Agency to provide solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Hootsuite / Buffer</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Google Analytics</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>BrightLocal / Whitespark</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>HubSpot / Mailchimp</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>GTmetrix / Pingdom</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Ahrefs / SEMrush</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProcessSection subtitle="Our Process"
                title="At Laxzenix, we follow a clear step-by-step process."
                steps={processSteps}
            />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
            <ContactSection />
            <BlogSection />
        </>
    );
}
