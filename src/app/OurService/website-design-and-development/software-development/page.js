import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import ExpertiseSection from '../../../componets/digital-marketing/ExpertiseSection'
import WhyChooseUs from "../../../componets/WhyChooseUs";
import ProcessSection from "../../../componets/ProcessSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";
import ContactSection from '../../../componets/HomeCom/ContactSection';

export default function page() {

    const processSteps = [
    {
        title: "Requirement Analysis",
        text: "We understand your business goals, user needs, and technical requirements to build the right solution.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "Planning & Architecture",
        text: "We design system architecture, define features, and create a scalable development roadmap.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Development",
        text: "Our developers build high-quality, secure, and scalable software using modern technologies.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Testing & QA",
        text: "We perform rigorous testing to ensure bug-free performance, security, and smooth functionality.",
        img: "/assets/images/services/analyzing.png",
    },
    {
        title: "Deployment & Maintenance",
        text: "We deploy your software and provide ongoing support, updates, and performance optimization.",
        img: "/assets/images/services/development-plan.png",
    },
];
const optimizationData = [
    {
        img: "/assets/images/icon/icon-1.png",
        title: "Custom Software Development",
        desc: "We build tailored software solutions designed specifically for your business needs, ensuring efficiency, scalability, and long-term growth.",
    },
    {
        img: "/assets/images/icon/icon-2.png",
        title: "Web & App Development",
        desc: "Our team develops responsive websites and powerful mobile applications that deliver seamless user experiences across all devices.",
    },
    {
        img: "/assets/images/icon/icon-3.png",
        title: "Scalable & Secure Solutions",
        desc: "We use modern technologies and best practices to create secure, high-performance software that grows with your business.",
    },
];
  const faqs = [
    {
        question: "What is software development?",
        answer: "Software development is the process of designing, building, testing, and maintaining applications or systems to solve business problems.",
    },
    {
        question: "Do you build custom software?",
        answer: "Yes, we create fully customized software solutions based on your specific business requirements.",
    },
    {
        question: "Which technologies do you use?",
        answer: "We use modern technologies like React, Node.js, Laravel, and cloud platforms to build scalable applications.",
    },
    {
        question: "Do you provide support after development?",
        answer: "Yes, we provide ongoing maintenance, updates, and technical support after deployment.",
    }
];
    return (
        <>
           <PageBanner
    title="Custom Software Development That Drives Business Growth"
    image="/assets/images/website/software-b.jpg"
    breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Tech Services", link: "/OurService/tech" },
        { label: "Software Development", link: "/OurService/tech/software-development" },
    ]}
/>
         <section className="content-marketing py-5 bg-light">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="fw-bold main-heading">
                What is <span>Software Development</span>
            </h2>
            <p className="text-muted w-75 mx-auto">
                Software Development is the process of designing, building, testing, and maintaining applications that solve real business problems. At Sevenunique, we create scalable and secure software solutions that improve efficiency, automate workflows, and accelerate business growth.
            </p>
        </div>

        <div className="row g-4">

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Custom Solutions</h5>
                    <p>
                        We build tailor-made software aligned with your business needs, ensuring flexibility, efficiency, and long-term scalability.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>User-Centric Design</h5>
                    <p>
                        Our applications are designed with intuitive UI/UX to ensure seamless user experience and higher engagement.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Performance & Security</h5>
                    <p>
                        We develop high-performance software with strong security measures to protect your data and ensure smooth operations.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Scalable Architecture</h5>
                    <p>
                        Our solutions are built to grow with your business, handling increased users, data, and features effortlessly.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
         


                 <Optimization
    services={optimizationData}
    subtitle="Software Development"
    title="What Makes Us a Trusted Software Development Partner"
/>



            {/* Process */}
         <ProcessSection
    subtitle="Our Development Process"
    title="At Sevenunique, we follow a structured software development lifecycle."
    steps={processSteps}
/>
            {/* Whuy Choose Us */}
        <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
    upperdescription="Building reliable and scalable software solutions"
    description="We specialize in delivering high-quality software solutions tailored to your business goals. From startups to enterprises, our development approach ensures performance, security, and scalability."
    points={[
        { text: "Experienced developers with modern tech expertise" },
        { text: "Custom software solutions for every business need", wide: true },
        { text: "Focus on performance, security, and scalability" },
        { text: "Transparent communication and agile development process" },
        { text: "Affordable and growth-oriented development services", wide: true },
    ]}
/>
  
            <ContactSection />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
