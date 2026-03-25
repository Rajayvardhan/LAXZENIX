import React from 'react'
import ServiceSection from "../../../componets/ServiceSection";
import PageBanner from '../../../componets/PageBanner'
import ProcessSection from "../../../componets/ProcessSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";
import SMOSection from '../../../componets/digital-marketing/SMOSection';
import { BsFacebook } from "react-icons/bs";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";


export default function page() {
    const servicesData = [
        {
            title: "Keyword Research & Strategy",
            description:
                "Find the most relevant and profitable keywords for your business to target high-intent traffic.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "On-Page Optimization",
            description:
                "Improve titles, meta tags, content, and internal links for better visibility on search engines.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Technical SEO",
            description:
                "Fix website speed, mobile-friendliness, site structure, and indexing issues for smooth performance.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Local SEO",
            description:
                "Optimize Google My Business, maps listings, and local citations to attract nearby customers in Jaipur & India.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Content Optimization",
            description:
                "Create SEO-friendly blogs, landing pages, and product descriptions that rank and convert.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Analytics & Reporting",
            description:
                "Get transparent reports with clear data on traffic, rankings, and ROI, so you always know your growth.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
    const processSteps = [
        {
            title: "Research & Analysis",
            text: "Comprehensive keyword research, competitor study, and website audit to identify opportunities.",
            img: "/assets/images/services/analytics.png",
        },
        {
            title: "Strategy & Planning",
            text: "Customized SEO roadmap designed to achieve your business objectives.",
            img: "/assets/images/services/database.png",
        },
        {
            title: "On-Page Optimization",
            text: "Optimization of website content, titles, meta tags, images, and internal linking.",
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
    const optimizationData = [
        {
            img: "/assets/images/icon/icon-1.png",
            title: "Essential Criteria for Choosing SMO Company",
            desc: "Sevenunique Tech Solution Pvt. Ltd. provides expert SEO optimization services, helping businesses improve their online presence and achieve long-term sustainable growth. Our specialized digital marketing SEO services give your brand visibility with the right audience and can rank within the major search engines.",
        },
        {
            img: "/assets/images/icon/icon-2.png",
            title: "International SEO",
            desc: "ur extensive search engine optimization service includes keyword research, content optimization, and link building, all working together to drive traffic and increase conversions for your website. If you have a business that targets an international audience, we also have our international SEO service, which ensures that your multi-regional and language targeting is effective.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Global SEO",
            desc: "As you probably know, we are a reputable global SEO service provider; moreover, we use innovative tools and advanced strategies to ensure that your business is competitive at an eminently global scale. Whether you are a startup looking to grow locally or an enterprise looking to expand globally, our team at Sevenunique Tech will provide you with tailored SEO services that will help you achieve results and pave the way for long-term digital success.",
        },
    ];
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
    return (

        <>
            <PageBanner
                title="Grow your brand with result-driven SMO services"
                image="/assets/images/smo/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Digital Marketing", link: "/OurService/digital-marketing" },
                    { label: "Social Media Optimization", link: "/services/digital-marketing/Social-Media-Optimization" },
                ]}
            />

            <SMOSection />
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="Our Digital Marketing Services"
                subtitle="Services"
                description="A full-service digital agency delivering creativity, strategy, and technology under one roof."
                services={servicesData}
            />
            {/* Process */}
            <ProcessSection subtitle="Our Process"
                title="At Laxzenix, we follow a clear step-by-step process."
                steps={processSteps}
            />
            {/* Industries we serve */}
            <section className="fancy-text-block light-gray-bg py-5">
                <div className="container-fluid px-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-wrapper mb-40 fadeInLeft">
                                <div className="section-title mb-25">
                                    <span className="sub-title st-one">Benefits of Using SMO Services</span>
                                    <h2>Benefits of Using SMO Services</h2>
                                </div>
                                <ul className="list-style-one mb-35">
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Boost Brand Visibility across Facebook, Instagram, LinkedIn & more.</li>
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Higher Engagement Rates with targeted SMO campaigns.</li>
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Increased Website Traffic & qualified lead generation.</li>
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Stronger Customer Relationships & long-term loyalty.</li>
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Improved Online Reputation & brand credibility.</li>
                                    <li className='fw-normal' style={{ fontWeight: "400" }}>Cost-Effective SMO Marketing with measurable ROI.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".15s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/financeBanking.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>200% Community Growth</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 2 */}
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/healthcare.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>150% Engagement</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 3 */}
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".25s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/retailEcommerce.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>110%Leads</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 4 */}
                                <div className="col-md-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/realEstate.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>200% Brand Recognition</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><BsFacebook /> FaceBook</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><RiLinkedinBoxFill /> Linkedin</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><FaWhatsapp /> Whatsapp</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><FaInstagramSquare /> Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><BsTwitterX /> Twitter</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p className='d-flex align-items-center justify-content-between' style={{ gap: "10px" }}><FaDiscord /> Discord</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Optimization
                services={optimizationData}
                subtitle="Social Media Optimization"
                title="SMO Services That Drive Real Results"
            />
               <FAQSection
                            faqs={faqs}
                            description="Here are some common questions about our services."
                        />
        </>
    )
}
