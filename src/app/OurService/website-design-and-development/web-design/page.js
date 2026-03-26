import ServiceSection from "../../../componets/ServiceSection";
import PageBanner from '../../../componets/PageBanner'
import ProcessSection from "../../../componets/ProcessSection";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import React from 'react'
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";



export default function page() {
   const servicesData = [
    {
        title: "Custom Website Design",
        description:
            "We create visually stunning and user-friendly website designs tailored to your brand identity and business goals.",
        icon: "/assets/image/strategy-icon.jpg",
        link: "/OurService/tech/web-design-development",
        delay: ".3s",
    },
    {
        title: "Responsive Web Development",
        description:
            "Build fully responsive websites that work seamlessly across mobile, tablet, and desktop devices.",
        icon: "/assets/image/product-design-icon.png",
        link: "/OurService/tech/web-development",
        delay: ".5s",
    },
    {
        title: "Frontend Development",
        description:
            "Develop fast and interactive user interfaces using modern technologies like React, HTML, CSS, and JavaScript.",
        icon: "/assets/image/dev-icon.png",
        link: "/OurService/tech/frontend-development",
        delay: ".7s",
    },
    {
        title: "Backend Development",
        description:
            "Create secure and scalable backend systems with APIs, databases, and server-side logic.",
        icon: "/assets/image/strategy-icon.jpg",
        link: "/OurService/tech/backend-development",
        delay: ".3s",
    },
    {
        title: "E-commerce Development",
        description:
            "Build powerful online stores with secure payment integration, product management, and user-friendly shopping experience.",
        icon: "/assets/image/product-design-icon.png",
        link: "/OurService/tech/ecommerce-development",
        delay: ".5s",
    },
    {
        title: "Website Maintenance & Support",
        description:
            "Ensure your website stays updated, secure, and optimized with our ongoing maintenance and support services.",
        icon: "/assets/image/dev-icon.png",
        link: "/OurService/tech/website-maintenance",
        delay: ".7s",
    },
];

const processSteps = [
    {
        title: "Requirement Gathering",
        text: "We understand your business goals, target audience, and project requirements to build the right solution.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "UI/UX Design",
        text: "We design wireframes and visually appealing layouts focused on user experience and brand identity.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Development",
        text: "Our developers build a fast, secure, and scalable website using modern technologies.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Testing",
        text: "We thoroughly test your website for performance, responsiveness, and bug-free functionality.",
        img: "/assets/images/services/analyzing.png",
    },
    {
        title: "Launch & Support",
        text: "We deploy your website and provide ongoing support, updates, and improvements.",
        img: "/assets/images/services/development-plan.png",
    },
];

const optimizationData = [
    {
        img: "/assets/images/icon/icon-1.png",
        title: "UI/UX Focused Design",
        desc: "Sevenunique Tech Solution Pvt. Ltd. delivers modern and intuitive UI/UX designs that enhance user engagement and improve conversion rates. We focus on creating seamless digital experiences that reflect your brand identity.",
    },
    {
        img: "/assets/images/icon/icon-2.png",
        title: "Scalable Web Development",
        desc: "Our web development services are built for performance and scalability. From startups to enterprises, we develop robust websites and web applications that grow with your business needs.",
    },
    {
        img: "/assets/images/icon/icon-3.png",
        title: "End-to-End Solutions",
        desc: "We provide complete website solutions including design, development, deployment, and maintenance. Our team ensures your website performs efficiently and stays updated with the latest technologies.",
    },
];

const faqs = [
    {
        question: "What is website design and development?",
        answer: "It involves creating the visual layout (design) and building the functionality (development) of a website.",
    },
    {
        question: "How long does it take to build a website?",
        answer: "It depends on the complexity, but most websites take between 1 to 4 weeks.",
    },
    {
        question: "Will my website be mobile-friendly?",
        answer: "Yes, all our websites are fully responsive and optimized for all devices.",
    },
    {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer ongoing support, updates, and maintenance services.",
    },
];
    return (
        <>
            <PageBanner
                title="Building Websites That Build Your Business"
                image="/assets/images/website/web-banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/services" },
                    { label: "Website Design & Development" },
                    { label: "Web Design", link: "/services/website-design-and-development/web-design" },
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
                                        src="/assets/images/website/emp.jpg"
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
            <span className="sub-title st-one">What is Web Design & Development?</span>
            <h2>Website Design & Development</h2>
        </div>

        <h4>Professional Web Agency Delivering Smart Digital Solutions</h4>

        <p>
            Website Design & Development is the process of creating visually appealing,
            user-friendly, and high-performing websites that help businesses grow online.
            It includes designing the layout (UI/UX) and developing the functionality
            (frontend & backend) to ensure a seamless user experience.
        </p>

        <p>
            In today’s digital-first world, businesses across India—especially in growing
            cities like Jaipur—need fast, responsive, and SEO-friendly websites to stand
            out from the competition. From modern UI design to scalable web applications,
            every element plays a crucial role in building a strong online presence.
        </p>

       
    </div>
</div>
                    </div>
                </div>
            </section>
            {/* Services Card */}
        <ServiceSection
    containerclass="container"
    colClass="col-lg-4 col-md-6"
    title="Our Website Design & Development Services"
    subtitle="Services"
    description="We provide end-to-end website design and development solutions, combining creativity, modern technologies, and performance-driven strategies to build powerful digital experiences."
    services={servicesData}
/>
           
            {/* Whuy Choose Us */}
         <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
    upperdescription="Building high-performance websites that drive real results"
    description="As a trusted web design and development partner, Sevenunique Tech Solution Pvt. Ltd. specializes in creating modern, scalable, and user-friendly websites tailored to your business goals. From UI/UX design to full-stack development, we ensure every project is optimized for performance, security, and conversions."
    points={[
        { text: "Experienced developers delivering modern and scalable solutions" },
        { text: "Custom website design tailored to your brand and audience", wide: true },
        { text: "Expertise in frontend, backend, and full-stack development" },
        { text: "Mobile-friendly, fast-loading, and SEO-optimized websites" },
        { text: "Affordable, secure, and performance-driven web solutions", wide: true },
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
                                    <p>Moz Pro</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Screaming Frog SEO Spider</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Google Search Console</p>
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
                                    <p>SERPWatcher</p>
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
                    </div>
                </div>
            </section>
          <section className="local-seo pt-125 pb-130">
    <div className="container text-center">

        <h2 className="local-seo__title">What is Website Design & Development?</h2>

        <p className="local-seo__desc">
            Website Design & Development is the process of creating visually appealing,
            responsive, and high-performing websites that help businesses establish a
            strong online presence. It ensures your website not only looks great but also
            functions smoothly to deliver the best user experience and drive conversions.
        </p>

        <div className="row mt-5">

            {[
                {
                    title: "UI/UX Design",
                    icon: "🎨",
                },
                {
                    title: "Responsive Development",
                    icon: "💻",
                },
                {
                    title: "Fast Performance",
                    icon: "⚡",
                },
                {
                    title: "Secure & Scalable",
                    icon: "🔒",
                },
            ].map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 mb-4">
                    <div
                        className="local-seo__card wow fadeInUp"
                        data-wow-delay={`${i * 0.1}s`}
                    >
                        <div className="local-seo__icon">{item.icon}</div>

                        <h4>{item.title}</h4>
                    </div>
                </div>
            ))}

        </div>

    </div>
</section>
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
