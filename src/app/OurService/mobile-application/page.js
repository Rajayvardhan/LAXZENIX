import React from 'react'
import PageBanner from '../../componets/PageBanner'
import ServiceSection from '../../componets/ServiceSection';
import WhyUs from '../../componets/add-on-components/WhyUs';
import FAQSection from '../../componets/Faq';
import BlogSection from '../../componets/HomeCom/BlogSection';
import ContactSection from '../../componets/HomeCom/ContactSection';
import ProcessSection from '../../componets/ProcessSection';
export default function page() {
    const servicesData = [
        {
            title: "Android App Development",
            description:
                "Smart, scalable, and future-ready Android applications designed to deliver seamless performance for startups and enterprises.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "iOS App Development",
            description:
                "High-quality, feature-rich apps for iPhone & iPad with premium UI/UX, ensuring flawless performance and smooth user experience.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/payment-gateway-integration",
            delay: ".5s",
        },
        {
            title: "Hybrid App Development",
            description:
                "Cross-platform apps that work seamlessly on both Android and iOS devices, ensuring a consistent user experience.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/wallet-upi-integration",
            delay: ".7s",
        },
        {
            title: "Enterprise App Solutions",
            description:
                "Secure and powerful mobile apps tailored for corporate and enterprise-level needs to improve productivity and streamline business.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/fraud-detection",
            delay: ".3s",
        },
        {
            title: "E-commerce & On-Demand Apps",
            description:
                "From food delivery and cab booking to shopping apps, we create customised on-demand applications for every industry.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/kyc-compliance-solutions",
            delay: ".5s",
        },
        {
            title: "Custom Mobile App Development",
            description:
                "Tailor-made mobile app solutions for businesses of all sizes, ensuring innovation, flexibility, and long-term scalability.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/kyc-compliance-solutions",
            delay: ".5s",
        },
    ];
    const whyUsData = [
        {
            img: "/assets/image/project-complete.png",
            title: "Expert App Developers",
            desc: "Skilled team in Android, iOS & hybrid app development.",
            delay: ".2s",
        },
        {
            img: "/assets/image/project-complete.png",
            title: "Cutting-Edge Technology",
            desc: "Using Flutter, React Native, Node.js & AI-driven solutions.",
            delay: ".3s",
        },
        {
            img: "/assets/image/award-icon.png",
            title: "Cost-Effective Solutions",
            desc: "Affordable pricing without compromising quality.",
            delay: ".4s",
        },
        {
            img: "/assets/image/exp-icon.png",
            title: "On-Time Delivery",
            desc: "Agile process ensures timely project completion.",
            delay: ".5s",
        },
    ];
    const processSteps = [
        {
            title: "Discovery & Requirement Analysis",
            text: "We start by understanding your business goals, audience needs, and app requirements to build a strong foundation.",
            img: "/assets/images/services/evaluation.png",
        },
        {
            title: "UI/UX Design",
            text: "Our designers craft engaging, user-friendly, and interactive app interfaces to ensure seamless customer experiences.",
            img: "/assets/images/services/web-design.png",
        },
        {
            title: "App Development",
            text: "Skilled developers use the latest technologies like Flutter, React Native, Swift, and Kotlin to build scalable apps.",
            img: "/assets/images/services/web-development.png",
        },
        {
            title: "Testing & Quality Assurance",
            text: "Every app undergoes rigorous testing for performance, speed, and security to ensure a bug-free experience.",
            img: "/assets/images/services/programming.png",
        },
        {
            title: "Deployment & Launch",
            text: "CWe publish your app on the Google Play Store and Apple App Store with proper optimization for visibility.",
            img: "/assets/images/services/testing.png",
        },
        {
            title: "Support & Maintenance",
            text: "Post-launch, we provide regular updates, bug fixes, and performance enhancements for long-term success.",
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
                title="Best Mobile App Development"
                image="/assets/images/services/mobile/banner.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurService" },
                    { label: "Mobile App Development", link: "/OurService/mobile-application" },
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
                                    <h2>Mobile App Development
                                    </h2>
                                </div>
                                <p>At Laxzenix, we deliver cutting-edge mobile app development solutions in India that help businesses reach their target audience and drive conversions. Our expertise includes native and cross-platform app development, UI/UX design, and post-launch support. With a focus on creativity, strategy, and results, we design apps that improve user experience and meet business objectives. Whether you need a mobile app development agency, custom app development platform, or end-to-end app solutions, we have you covered.</p>
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
            {/* Industries we serve */}
            <section className="fancy-text-block light-gray-bg py-5">
                <div className="container-fluid px-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-wrapper mb-40 fadeInLeft">
                                <div className="section-title mb-25">
                                    <span className="sub-title st-one">Technology We Use</span>
                                    <h2>Latest Mobile App Development Technologies</h2>
                                    <p className="blue-dark">
                                        Professional Mobile App Agency to provide solutions
                                    </p>
                                </div>
                                <p>We use cutting-edge mobile app development technologies like Flutter, React Native, Swift, Kotlin, and Node.js to build scalable, secure, and future-ready apps.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".15s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/mobile/flutter.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>Flutter</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 2 */}
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/mobile/kotlin.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>React Native</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 3 */}
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".25s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/mobile/reactnative.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>Swift (iOS)</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Item 4 */}
                                <div className="col-md-6 col-lg-6 col-sm-12">
                                    <div
                                        className="service-item service-style-three mb-30 wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="icon">
                                            <img src="/assets/images/services/mobile/swift.png" alt="" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h3 className="title">
                                                <a href="/service-details" style={{ fontSize: "18px" }}>Kotlin (Android)</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>

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
            <ProcessSection
                subtitle="Our Process"
                title="Our performance marketing process drives measurable growth, higher ROI, and business success through precise strategy and effective execution."
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
