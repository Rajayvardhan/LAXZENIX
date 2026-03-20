import ServiceSection from '../../componets/ServiceSection'
import PageBanner from '../../componets/PageBanner'
import React from 'react'
import Image from 'next/image';
import PixlabServices from '../../componets/add-on-components/DigitalPresence';
import WhyUs from '../../componets/add-on-components/WhyUs';
import WhyPartner from '../../componets/WhyPartners';
import FAQSection from '../../componets/Faq';
import BlogSection from '../../componets/HomeCom/BlogSection';
import ContactSection from '../../componets/HomeCom/ContactSection';

export default function page() {
    const servicesData = [
        {
            title: "API Development",
            description:
                "Custom API development to connect applications, automate processes, and enable secure data exchange across systems.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "API Integration",
            description:
                "Seamless integration of APIs with existing platforms, ensuring smooth communication between software and services.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/payment-gateway-integration",
            delay: ".5s",
        },
        {
            title: "Custom API Solutions",
            description:
                "Tailored API solutions to meet unique business needs, optimize workflows, and deliver scalable, future-ready performance.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/wallet-upi-integration",
            delay: ".7s",
        },
    ];
    const digitalData = [
        { id: "01", icon: "/assets/images/services/api/fingerprint.png", title: "AePS", text: "Secure domain registration and configuration to ensure your website is easily accessible and builds a strong online identity." },
        { id: "02", icon: "/assets/images/services/api/send.png", title: "DMT", text: "Fast, reliable, and secure hosting solutions to guarantee uptime, performance, and protection against potential threats." },
        { id: "03", icon: "/assets/images/services/api/cloud.png", title: "Pancard Verification", text: "Implement flexible cloud infrastructure like AWS to support business growth, scalability, and enhanced operational efficiency." },
        { id: "04", icon: "/assets/images/services/api/user.png", title: "Aadhar Verification", text: "Professional IT consulting to optimize technology usage, improve workflows, and provide actionable insights for your business." },
        { id: "05", icon: "/assets/images/services/api/bus.png", title: "Bus Booking", text: "Refresh your website with modern design, improved UX/UI, and updated features to increase engagement and conversions." },
        { id: "06", icon: "/assets/images/services/api/hotel.png", title: "Hotel Booking", text: "Continuous maintenance, updates, and monitoring to ensure smooth performance, security, and long-term website reliability." },
        { id: "06", icon: "/assets/images/services/api/flight.png", title: "Flight Booking", text: "Continuous maintenance, updates, and monitoring to ensure smooth performance, security, and long-term website reliability." },
        { id: "06", icon: "/assets/images/services/api/cibil.png", title: "Cibil Score", text: "Continuous maintenance, updates, and monitoring to ensure smooth performance, security, and long-term website reliability." },
    ];
    const whyUsData = [
        {
            img: "/assets/image/project-complete.png",
            title: "Trusted API Partner",
            desc: "Reliable and professional API services for local and global businesses",
            delay: ".2s",
        },
        {
            img: "/assets/image/project-complete.png",
            title: "Expert Integration Team",
            desc: "Skilled professionals ensuring seamless integration with existing systems",
            delay: ".3s",
        },
        {
            img: "/assets/image/award-icon.png",
            title: "Secure & Scalable APIs",
            desc: "APIs built with security and scalability to handle growing business needs",
            delay: ".4s",
        },
        {
            img: "/assets/image/exp-icon.png",
            title: "Custom API Solutions",
            desc: "Tailored API solutions designed to optimize workflows and performance",
            delay: ".5s",
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
                title="Expert API Services for Seamless Integration"
                image="/assets/images/services/api/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/OurService" },
                    { label: "API Services" },
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
                                    <h2>API Services for Seamless Integration and Scalability</h2>

                                </div>
                                <p>At Laxzenix, we provide professional API services to help businesses connect systems, automate processes, and enhance efficiency. Our expertise includes API development, integration, and custom API solutions designed to meet the unique needs of startups, enterprises, and tech companies. We focus on security, scalability, and seamless performance, ensuring reliable data exchange across platforms. By leveraging the latest technologies, Laxzenix delivers APIs that are robust, future-ready, and tailored to optimize your digital operations locally and globally.</p>


                                <ul className="list-style-one mb-35">
                                    <li>API Development</li>
                                    <li>API Integration</li>
                                    <li>Custom API Solutions</li>
                                </ul>

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
                title="Our API Services"
                subtitle="Services"
                description="Expert API services to connect systems, automate processes, and enhance efficiency with secure, scalable solutions."
                services={servicesData}
            />
            {/* Technology we use */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Technology We Use</h2>
                                <p>Laxzenix uses modern technologies and frameworks to build secure, scalable, and high-performing API solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/api/java-14-1.svg" width={50} height={50} alt="Razorpay" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/api/next-js.png" width={50} height={50} alt="PayPal" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/api/Laravel.png" width={50} height={50} alt="PayU" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/api/nodejs.png" width={50} height={50} alt="Easebuzz" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/api/react.png" width={50} height={50} alt="fino-payments" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <PixlabServices services={digitalData} />
            <WhyUs
                data={whyUsData}
                subHeading="Agency Statistics"
                heading="Why Clients Trust Laxzenix"
                description="Laxzenix Jaipur delivers the best API services with secure, scalable, and efficient solutions. Our expertise in development, integration, and custom APIs empowers businesses to streamline operations."
            />
            <WhyPartner />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
            <ContactSection />
            <BlogSection />
        </>
    )
}
