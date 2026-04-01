import React from 'react'
import PageBanner from '../../../componets/PageBanner';
import ServiceSection from "../../../componets/ServiceSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import ProcessSection from "../../../componets/ProcessSection";
import FAQSection from "../../../componets/Faq";
import ContactSection from '../../../componets/HomeCom/ContactSection';
import BlogSection from '../../../componets/HomeCom/BlogSection';
export default function page() {
    const servicesData = [
        {
            title: "Real-Time Monitoring",
            description:
                "Accept global payments with seamless multi-currency processing to expand your business reach.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "AI/ML-Based Detection",
            description:
                "Offer quick checkout experiences with secure one-click payments for returning customers.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Transaction Scoring",
            description:
                "Simplify customer service with instant and transparent refund processing.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Alerts & Notifications",
            description:
                "utomate subscription payments with reliable recurring billing solutions.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Compliance Ready",
            description:
                "Ensure payment safety with industry-standard PCI-DSS compliance and robust encryption.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
    ];
    const optimizationData = [
        {
            img: "/assets/images/icon/icon-1.png",
            title: "Fraud Detection Systems",
            desc: "Advanced tools that monitor transactions in real-time and stop fraudulent activities instantly.",
        },
        {
            img: "/assets/images/icon/icon-2.png",
            title: "Risk Analytics",
            desc: "Data-driven insights and predictive analytics to identify threats and minimize financial risks.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Identity Verification",
            desc: "AI-powered KYC and verification tools to ensure only genuine users access your services.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Compliance Monitoring",
            desc: "Automated compliance checks that align with PCI-DSS, RBI, GDPR, and other regulatory standards.",
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
                title="Fraud Detection & Risk Management Solutions"
                image="/assets/images/services/Finunique/fraud-detection-and-risk-management.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurServices" },
                    { label: "Fraud Detection & Risk Management", link: "/OurServices/Finunique-solutions/fraud-detection-and-risk-management" },
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
                                    <span className="sub-title st-one">Fraud Detection & Risk Management</span>
                                    <h2>Sevenunique, we provide advanced Fraud Detection & Risk Management
                                    </h2>
                                </div>

                                <h4>About Fraud Detection & Risk Management</h4>
                                <p>services that make digital payments faster, safer, and more convenient. Our solutions allow banks, NBFCs, startups, and enterprises to offer seamless payment experiences through mobile wallets and UPI platforms. From instant peer-to-peer transfers to merchant payments, we ensure secure, reliable, and scalable systems. With features like real-time transaction tracking, fraud detection, and easy onboarding, our wallet and UPI integration solutions deliver the best digital banking service for businesses and customers alike.</p>
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
           
            {/* Whuy Choose Us */}
            <WhyChooseUs
                image="/Digital/digi-1.png"
                title="Why"
                highlight="Choose"
                upperdescription="With a proven track record of success"
                description="As a trusted digital marketing partner, Laxzenix specialises in delivering strategies designed for your specific goals. From SEO to social media, we ensure every campaign is result-driven and growth-focused."
                points={[
                    { text: "Proven Expertise" },
                    { text: "AI-Powered Tools", wide: true },
                    { text: "Regulatory Compliance" },
                    { text: "24/7 Monitoring" },
                    { text: "24/7 Monitoring", wide: true },
                ]}
            />
             <Optimization
                services={optimizationData}
                subtitle="Our Core Services"
                title="Explore secure, scalable, and flexible payment gateway services tailored to your business needs."
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
                                    <p>AI/ML</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Blockchain Security</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Two-Factor Authentication</p>
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
                                    <p>AML/KYC Compliance</p>
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
            <ContactSection />
            <BlogSection />
        </>
    )
}
