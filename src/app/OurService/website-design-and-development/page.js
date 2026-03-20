import ServiceSection from '../../componets/ServiceSection';
import PageBanner from '../../componets/PageBanner'
import React from 'react'
import ProcessSection from '../../componets/ProcessSection';
import BlogSection from '../../componets/HomeCom/BlogSection';
import FAQSection from '../../componets/Faq';
import ContactSection from '../../componets/HomeCom/ContactSection';

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
            title: "Modern & Responsive Website Design",
            description:
                "Create visually appealing, mobile-friendly websites that engage users, enhance brand identity, and drive results.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "E-commerce website development",
            description:
                "Build secure and scalable online stores with seamless shopping experiences and integrated payment gateways.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Custom CRM Solution",
            description:
                "Develop tailored CRM systems to streamline customer management, sales tracking, and business workflows efficiently.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "On demand services",
            description:
                "Deliver bespoke software solutions designed to meet unique business requirements and optimize operations.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
    ];
    const shortServices = [
        servicesData[0],
        servicesData[1],
        servicesData[2],
        servicesData[3],
    ];
    const processSteps = [
        {
            title: "Requirement Analysis",
            text: "Understand client goals, target audience, and project scope to plan a tailored development solution.",
            img: "/assets/images/services/evaluation.png",
        },
        {
            title: "UI/UX Design",
            text: "Create intuitive, responsive, and visually appealing designs for an optimal user experience.",
            img: "/assets/images/services/web-design.png",
        },
        {
            title: "Front-End Development",
            text: "Build dynamic, interactive interfaces using HTML, CSS, JavaScript, React, Tailwind, and Material-UI.",
            img: "/assets/images/services/web-development.png",
        },
        {
            title: "Back-End Development",
            text: "Develop secure, scalable server-side systems with PHP, Laravel, Node.js, NestJS, MySQL, and NoSQL.",
            img: "/assets/images/services/programming.png",
        },
        {
            title: "Testing & QA",
            text: "Conduct functional, performance, security, and compatibility testing for a bug-free, optimized solution.",
            img: "/assets/images/services/testing.png",
        },
        {
            title: "Deployment & Maintenance",
            text: "Launch the website/app and provide ongoing updates, monitoring, and support for smooth operations.",
            img: "/assets/images/services/launch.png",
        },
    ];
    return (
        <>
            <PageBanner
                title="Creative Website Design and Development for Modern Businesses"
                image="/assets/images/services/website-design.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/services" },
                    { label: "Website Design and Development" },
                ]}
            />
            {/* Services Card */}
            <ServiceSection
                containerclass="container-fluid"
                services={shortServices}
                colClass="col-lg-3 col-md-6"
                title="Our Website Development Services"
                subtitle="Services"
                description="A full-service digital agency delivering creativity, strategy, and technology under one roof."
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
                                    <h2>
                                        Web Development services for

                                        High Performing Websites
                                    </h2>
                                </div>

                                <h4>Professional Design Agency to provide solutions</h4>


                                <ul className="list-style-one mb-35">
                                    <li>UI/UX Web Design</li>
                                    <li>Front-End Development</li>
                                    <li>Backend development</li>
                                    <li>Full Stack Development</li>
                                    <li>Web testing</li>
                                    <li>Maintenance & Update</li>
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
            <section className='bg-white'>

            <ProcessSection subtitle="Our Process"
                title="At Laxzenix, we follow a clear step-by-step process."
                steps={processSteps}
            />
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
