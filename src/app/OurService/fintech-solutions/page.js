import ServiceSection from '../../componets/ServiceSection';
import PageBanner from '../../componets/PageBanner'
import React from 'react'
import ProcessSection from '../../componets/ProcessSection';
import Image from 'next/image';
import FAQSection from '../../componets/Faq';
import BlogSection from '../../componets/HomeCom/BlogSection';
import ContactSection from '../../componets/HomeCom/ContactSection';

export default function page() {
    const servicesData = [
        {
            title: "Digital Banking Solutions",
            description:
                "We optimize your website to rank higher on search engines, drive organic traffic, and improve visibility for relevant keywords.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "Payment Gateway Integration",
            description:
                "We integrate secure payment gateways to facilitate seamless transactions.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/payment-gateway-integration",
            delay: ".5s",
        },
        {
            title: "Wallet & UPI Integration",
            description:
                "We integrate digital wallet and UPI payment solutions for seamless transactions.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/wallet-upi-integration",
            delay: ".7s",
        },
        {
            title: "Fraud Detection & Risk Management",
            description:
                "We implement robust fraud detection and risk management systems to protect your business.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/fraud-detection",
            delay: ".3s",
        },
        {
            title: "KYC & Compliance Solutions",
            description:
                "We ensure your business meets all regulatory requirements and maintains compliance.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/kyc-compliance-solutions",
            delay: ".5s",
        },
    ];
    const processSteps = [
        {
            title: "Research & Analysis",
            text: "We start by analyzing your business needs, whether it’s digital banking solutions, payment gateway integration, or wallet & UPI systems. This helps us create a clear project roadmap.",
            img: "/assets/images/services/analytics.png",
        },
        {
            title: "Strategic & Planning",
            text: "Our team builds a fintech strategy that focuses on secure payments, fraud prevention, and regulatory compliance (KYC/AML). Planning ensures efficiency and scalability.",
            img: "/assets/images/services/database.png",
        },
        {
            title: "UX/UI Design",
            text: "We design easy-to-use and secure fintech platforms where customers can make online payments, wallet transfers, and digital banking transactions smoothly.",
            img: "/assets/images/services/shopping-online.png",
        },
        {
            title: "Development & Integration",
            text: "Our experts develop the core system and integrate services like payment gateways, UPI wallets, and compliance automation tools for safe and fast transactions.",
            img: "/assets/images/services/analyzing.png",
        },
        {
            title: "Testing & Risk Management",
            text: "Every fintech solution goes through strict fraud detection, risk management, and performance testing to ensure complete security and transparency.",
            img: "/assets/images/services/development-plan.png",
        },
        {
            title: "Deployment & Support",
            text: "Finally, we launch the solution with continuous monitoring, updates, and support, making your fintech system reliable and future-ready.",
            img: "/assets/images/services/startup.png",
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
                title="Grow with Next-Gen Fintech Solutions"
                image="/assets/images/services/fintech.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurService" },
                    { label: "Fintech Solutions" },
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
                                    <h2>About Fintech Solutions
                                    </h2>
                                </div>
                                <p>At Laxzenix, we deliver cutting-edge fintech solutions in India that help banks, NBFCs, startups, and enterprises digitise financial operations. Our expertise includes digital payments, KYC verification, compliance automation, API banking, loan management software, and fraud detection systems. With a focus on security, scalability, and transparency, we design fintech services that improve efficiency and meet regulatory standards. Whether you need a fintech app developer, digital lending platform, or custom fintech software, Laxzenix ensures innovative, user-friendly, and future-ready solutions for sustainable growth.</p>
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
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="Our Fintech Services"
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
                                    <span className="sub-title st-one">Industries We Serve</span>
                                    <h2>Build Grow & Manage Your Brand Identitys</h2>
                                    <p className="blue-dark">
                                        Professional Design Agency to provide solutions
                                    </p>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo. Nemo enimpsam luptatem quia
                                    voluptas aspernatur aut fugitdolor sit amet
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".15s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/financeBanking.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Finance & Banking</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 2 */}
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/healthcare.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Healthcare</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 3 */}
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".25s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/retailEcommerce.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Retail & E-commerce</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 4 */}
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/realEstate.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Real Estate</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 5 */}
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".35s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/travelHospitality.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Travel & Hospitality</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 6 */}
                                <div className="col-md-6 col-lg-4 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/manufacturing.png" alt=""  width={40} height={40}/>
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{fontSize:"18px"}}>Manufacturing</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our gateway parthners */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Our Gateway Partners</h2>
                                <p>We work with India’s leading payment gateway providers to deliver secure, fast, and reliable digital payment solutions. Our trusted partners include:</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/razorpay.png" width={120} height={40} alt="Razorpay" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/PayPal.png" width={120} height={40} alt="PayPal" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/PayU.png" width={82} height={40} alt="PayU" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/Easebuzz.png" width={120} height={40} alt="Easebuzz" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/fino-payments.png" width={153} height={40} alt="fino-payments" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/cashfree.png" width={120} height={40} alt="cashfree" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/pine-lab.png" width={120} height={70} alt="pine-lab" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/gateway/RBL_Bank.png" width={120} height={40} alt="RBL_Bank" />
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
