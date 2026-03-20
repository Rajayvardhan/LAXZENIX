import WhatWeDo from '../../componets/WhatWeDo'
import PageBanner from '../../componets/PageBanner'
import React from 'react'
import WhyUs from '../../componets/add-on-components/WhyUs';
import ProcessSection from '../../componets/ProcessSection';
import { ChevronRight } from 'lucide-react';
import FAQSection from '../../componets/Faq';
import BlogSection from '../../componets/HomeCom/BlogSection';
import ContactSection from '../../componets/HomeCom/ContactSection';
export default function page() {
    const servicesData = [
        {
            heading: "Facebook / Twitter Paid Marketing",
            description: "Boost brand awareness...",
            paragraph: "Social media platforms are powerful tools...",
            list: [
                "Audience-specific campaigns tailored for conversions",
                "High-quality visuals and ad creatives to grab attention",
                "Retargeting and lookalike ads to increase ROI",
                "Budget optimization to reduce advertising costs",
                "Real-time analytics and performance monitoring"
            ],
            image: "/assets/images/about/img-4.jpg"
        },
        {
            heading: "Google AdWords Express Services",
            description: "Quick visibility...",
            paragraph: "For small and medium businesses...",
            list: [
                "Fast campaign setup with immediate results",
                "Local & global targeting options",
                "Retargeting strategies to re-engage potential leads",
                "Cost-efficient keyword optimization strategies",
                "Mobile-friendly and responsive ads",
                "Continuous monitoring to improve performance"
            ],
            image: "/assets/images/services/performance-marketing/GoogleAdWords.jpg"
        },
        {
            heading: "Lead Based Marketing",
            description: "Generate high-quality leads...",
            paragraph: "Generating quality leads...",
            list: [
                "Targeted lead generation campaigns for quality prospects",
                "Verified leads with high conversion potential",
                "Multi-channel approach for maximum reach",
                "Landing page optimization for better conversions",
                "Transparent reports with lead tracking insights"
            ],
            image: "/assets/images/services/performance-marketing/LeadBasedMarketing.jpg"
        },
        {
            heading: "Google Display & Search Ads",
            description: "Increase visibility...",
            paragraph: "Google Display Ads...",
            list: [
                "Eye-catching display ads for wide brand awareness",
                "Keyword-focused search ads for higher conversions",
                "Retargeting strategies to re-engage potential leads",
                "Smart bidding and budget optimization",
                "Transparent reporting with measurable results"
            ],
            image: "/assets/images/services/performance-marketing/GoogleDisplay.jpg"
        }
    ];
    const whyUsData = [
        {
            img: "/assets/image/project-complete.png",
            title: "ROI-Focused Campaigns",
            desc: "Strategies designed to maximize your return on every ad spend.",
            delay: ".2s",
        },
        {
            img: "/assets/image/project-complete.png",
            title: "Targeted Audience Reach",
            desc: "Reach high-intent customers precisely when they’re ready to buy.",
            delay: ".3s",
        },
        {
            img: "/assets/image/award-icon.png",
            title: "Data-Driven Insights",
            desc: "Optimize campaigns in real-time with actionable analytics.",
            delay: ".4s",
        },
        {
            img: "/assets/image/exp-icon.png",
            title: "Multi-Channel Marketing",
            desc: "Engage customers across search, social, and display networks.",
            delay: ".5s",
        },
    ];
    const processSteps = [
        {
            title: "Discovery & Planning",
            text: "We analyze your business, goals, and target audience to create a clear roadmap for success.",
            img: "/assets/images/services/evaluation.png",
        },
        {
            title: "Strategy Development",
            text: "Crafting data-driven marketing strategies that focus on reaching the right audience with maximum impact.",
            img: "/assets/images/services/web-design.png",
        },
        {
            title: "Campaign Execution",
            text: "Implementing campaigns across multiple channels to ensure consistent brand visibility and engagement.",
            img: "/assets/images/services/web-development.png",
        },
        {
            title: "Performance Tracking",
            text: "Monitoring every campaign in real-time to measure results, track KPIs, and ensure effective ROI.",
            img: "/assets/images/services/programming.png",
        },
        {
            title: "Optimization & Growth",
            text: "Continuously refining strategies and campaigns to maximize performance, growth, and measurable business success.",
            img: "/assets/images/services/testing.png",
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
                title="Maximize Your Growth with Laxzenix Performance Marketing"
                image="/assets/images/services/performance-marketing/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurService" },
                    { label: "Performance Marketing" },
                ]}
            />
            {/* Aboutus */}
            <section className="about-area bg-white about-area-v1 position-relative pt-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="img-holder-box mb-50">
                                <div className="img-holder wow fadeInLeft">
                                    <img
                                        src="/assets/images/about/about-1.jpg"
                                        alt="Image"
                                    />
                                </div>

                                <div className="shape shape-one">
                                    <span className="animate-float-y">
                                        <img
                                            src="/assets/images/shape/circle-logo-2.png"
                                            className="circle-logo"
                                            alt="circle logo"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="text-wrapper mb-50 wow fadeInRight">
                                <div className="section-title mb-15">
                                    <span className="sub-title st-one">About Us</span>
                                    <h2>Performance Marketing Services
                                    </h2>
                                </div>
                                <p>At Laxzenix, we deliver cutting-edge performance marketing solutions in India that help businesses reach their target audience and drive conversions. Our expertise includes digital advertising, social media marketing, content marketing, and data analytics. With a focus on creativity, strategy, and results, we design marketing campaigns that improve brand awareness and meet business objectives. Whether you need a performance marketing agency, digital advertising platform, or custom marketingIn digital marketing, businesses no longer just want traffic—they want measurable results. That’s where Performance Marketing Services come in. Unlike traditional advertising, performance marketing focuses on generating specific outcomes like clicks, leads, app installs, or sales. You only pay when the desired action is achieved, making it one of the most cost-effective and ROI-driven marketing models. At Laxzenix Tech Solutions, our experts use data-driven strategies to run campaigns that are transparent, trackable, and designed to scale your business faster.</p>
                                <a
                                    href="/about"
                                    className="main-btn bordered-btn btn-blue arrow-btn"
                                >
                                    Learn More Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyUs
                data={whyUsData}
                subHeading="Agency Statistics"
                heading="Why Clients Trust Laxzenix"
                description="Laxzenix Jaipur delivers the best API services with secure, scalable, and efficient solutions. Our expertise in development, integration, and custom APIs empowers businesses to streamline operations."
            />
            {/* What We Do */}
            {servicesData.map((item, index) => (
                <WhatWeDo
                    key={index}
                    subTitle="What We DO"
                    heading={item.heading}
                    description={item.description}
                    paragraph={item.paragraph}
                    list={item.list}
                    buttonText="Get Started"
                    buttonLink="/contact"
                    mainImage={item.image}   // ✅ dynamic image
                    shapeOne="/assets/images/shape/circle-logo-2.png"
                    shapeTwo="/assets/images/shape/shape-6.png"
                    reverse={index % 2 !== 0}
                />
            ))}

            <ProcessSection
                subtitle="Our Process"
                title="Our performance marketing process drives measurable growth, higher ROI, and business success through precise strategy and effective execution."
                steps={processSteps}
            />
            {/* our gateway parthners */}
            <section className="partners-area pt-125 pb-130">
                <div className="container-fluid px-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Tools &Platforms
                                    We Use</h2>
                                <p>We work with India’s leading payment gateway providers to deliver secure, fast, and reliable digital payment solutions. Our trusted partners include:</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div className='d-flex align-items-center'>
                                    <ChevronRight />
                                    Google Ads & Analytics
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div className='d-flex align-items-center'>
                                    <ChevronRight />
                                    Facebook & Instagram Ads
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div className='d-flex align-items-center'>
                                    <ChevronRight />
                                    LinkedIn Campaign Manager
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div className='d-flex align-items-center'>
                                    <ChevronRight />
                                    PPC & Display Networks
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div className='d-flex align-items-center'>
                                    <ChevronRight />
                                    CRM & Automation Tools
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <FAQSection
                                        faqs={faqs}
                                        description="Here are some common questions about our services."
                                    />
                                    <ContactSection />
                        <BlogSection />
        </>
    )
}
