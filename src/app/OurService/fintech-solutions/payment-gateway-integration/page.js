import React from 'react'
import PageBanner from '../../../componets/PageBanner';
import ServiceSection from "../../../componets/ServiceSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import ProcessSection from "../../../componets/ProcessSection";
import FAQSection from "../../../componets/Faq";
export default function page() {
    const servicesData = [
        {
            title: "Multi-Currency Support",
            description:
                "Accept global payments with seamless multi-currency processing to expand your business reach.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "One-Click Payments",
            description:
                "Offer quick checkout experiences with secure one-click payments for returning customers.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Easy Refunds",
            description:
                "Simplify customer service with instant and transparent refund processing.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Recurring Billing",
            description:
                "utomate subscription payments with reliable recurring billing solutions.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "PCI-DSS Compliance",
            description:
                "Ensure payment safety with industry-standard PCI-DSS compliance and robust encryption.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Real-Time Analytics",
            description:
                "Track transactions, revenue, and customer trends with detailed reporting and insights.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
    const optimizationData = [
        {
            img: "/assets/images/icon/icon-1.png",
            title: "Custom Gateway Integration",
            desc: "Tailored payment gateway solutions designed to fit your business needs with secure and seamless transactions.",
        },
        {
            img: "/assets/images/icon/icon-2.png",
            title: "API Integration",
            desc: "Smooth API integration that connects your systems with banks, wallets, and payment providers for fast processing.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Mobile Payment Solutions",
            desc: "Enable secure mobile transactions with user-friendly payment solutions for Android and iOS platforms.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "International Payment Setup",
            desc: "Expand globally with multi-currency and cross-border payment support for international customers.",
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
                title="Seamless & Secure Payment Gateway Integration."
                image="/assets/images/services/fintech/payment-gateway-integration.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurServices" },
                    { label: "Payment Gateway Integration", link: "/OurServices/fintech-solutions/payment-gateway-integration" },
                ]}
            />
            {/* About */}
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
                                    <span className="sub-title st-one">Payment Gateway Integration?</span>
                                    <h2>Transform Your Financial Services
                                    </h2>
                                </div>

                                <h4>About Payment Gateway Integration</h4>
                                <p>Payment gateway integration refers to the process of connecting a merchant's website or application to a payment processor that facilitates online transactions. This integration allows customers to securely make payments using various payment methods, such as credit cards, debit cards, or digital wallets. By implementing seamless payment gateway integration, businesses can enhance the user experience, increase conversion rates, and ensure secure transactions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Card */}
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="Key Features"
                subtitle="Services"
                description="A full-service digital agency delivering creativity, strategy, and technology under one roof."
                services={servicesData}
            />
            <Optimization
                services={optimizationData}
                subtitle="Our Core Services"
                title="Explore secure, scalable, and flexible payment gateway services tailored to your business needs."
            />
            {/* Whuy Choose Us */}
            <WhyChooseUs
                image="/Digital/digi-1.png"
                title="Why"
                highlight="Choose"
                upperdescription="With a proven track record of success"
                description="As a trusted digital marketing partner, Laxzenix specialises in delivering strategies designed for your specific goals. From SEO to social media, we ensure every campaign is result-driven and growth-focused."
                points={[
                    { text: "Trusted Expertise" },
                    { text: "eamless Checkout", wide: true },
                    { text: "Global Scalability" },
                    { text: "Advanced Security" },
                    { text: "24/7 Dedicated Support", wide: true },
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
                                    <p>PCI-DSS Compliance</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Data Encryption</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Tokenization</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Two-Factor Authentication (2FA)</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Fraud Detection</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Yoast SEO / RankMath</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Secure APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process */}
            <ProcessSection subtitle="Our Process"
                title="Payment Gateway Integration Process"
                steps={processSteps}
            />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
