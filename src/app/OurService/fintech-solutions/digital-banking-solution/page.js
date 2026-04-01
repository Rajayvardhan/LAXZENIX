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
            title: "Mobile Banking",
            description:
                "Access your accounts, make payments, and manage transactions securely anytime, anywhere from your mobile device.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "Internet Banking",
            description:
                "Access your accounts, make payments, and manage transactions securely anytime, anywhere from your computer.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Neo-Banking",
            description:
                "Fix website speed, mobile-friendliness, site structure, and indexing issues for smooth performance.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Digital Payments",
            description:
                "Optimize Google My Business, maps listings, and local citations to attract nearby customers in Jaipur & India.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Loan Management",
            description:
                "Create SEO-friendly blogs, landing pages, and product descriptions that rank and convert.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Fraud Detection",
            description:
                "Get transparent reports with clear data on traffic, rankings, and ROI, so you always know your growth.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
    const optimizationData = [
        {
            img: "/assets/images/icon/icon-1.png",
            title: "Digital Banking Solutions",
            desc: "Secure, scalable digital banking services designed to enhance efficiency and customer experience",
        },
        {
            img: "/assets/images/icon/icon-2.png",
            title: "Finunique App Development",
            desc: "Our team of expert developers creates innovative Finunique applications that are secure, user-friendly, and designed to meet the evolving needs of the financial industry.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "API Banking Integration",
            desc: "Seamlessly integrate your banking services with third-party applications and platforms, enabling a more connected and efficient financial ecosystem.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Compliance & Fraud Management",
            desc: "Smart compliance tools and fraud detection systems that protect businesses from financial risks.",
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
                title="Rank Higher. Get Found. Grow Faster."
                image="/assets/images/services/Finunique/digital-banking-solution.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurServices" },
                    // { label: "Finunique Solutions", link: "/OurServices/Finunique-solutions" },
                    { label: "Digital Banking Solution", link: "/OurServices/Finunique-solutions/digital-banking-solution" },
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
                                    <span className="sub-title st-one">What is Digital Banking?</span>
                                    <h2>Transform Your Financial Services
                                    </h2>
                                </div>

                                <h4>About Digital Banking Solutions</h4>
                                <p>Digital banking solutions refer to the use of technology to provide financial services to customers online or through mobile devices. These solutions enable banks to offer a wide range of services, including account management, fund transfers, bill payments, and loan applications, all through digital platforms. By leveraging digital banking solutions, financial institutions can enhance customer experience, improve operational efficiency, and reduce costs.</p>
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
                subtitle="Digital Marketing SEO"
                title="What Makes Us a Trusted Partner for SEO Optimization Services"
            />
            {/* Whuy Choose Us */}
            <WhyChooseUs
                image="/Digital/digi-1.png"
                title="Why"
                highlight="Choose"
                upperdescription="With a proven track record of success"
                description="As a trusted digital marketing partner, Laxzenix specialises in delivering strategies designed for your specific goals. From SEO to social media, we ensure every campaign is result-driven and growth-focused."
                points={[
                    { text: "Trusted Banking Partner" },
                    { text: "Best Digital Service", wide: true },
                    { text: "Secure Finunique Growth" },
                    { text: "Future-Ready Banking" },
                    { text: "Scalable Banking Tech", wide: true },
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
                                    <p>AI/ML</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>OCR</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Encryption</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Blockchain</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>RBI Compliance</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>SEBI Compliance</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>GDPR Compliance</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Scalable Tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process */}
                        <ProcessSection subtitle="Our Process"
                            title="At Laxzenix, we follow a clear step-by-step process."
                            steps={processSteps}
                        />
         <FAQSection
                        faqs={faqs}
                        description="Here are some common questions about our services."
                    />
        </>
    )
}
