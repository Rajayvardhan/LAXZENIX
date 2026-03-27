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
        title: "System Audit & Assessment",
        text: "We thoroughly analyze your website, application, or system to identify issues, performance gaps, and improvement areas.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "Maintenance Planning",
        text: "We create a customized maintenance plan including updates, monitoring, backups, and security enhancements.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Regular Updates & Fixes",
        text: "We perform timely updates, bug fixes, and ensure your system stays secure, stable, and up-to-date.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Performance Monitoring",
        text: "We continuously monitor system performance, uptime, and security to ensure smooth operation.",
        img: "/assets/images/services/analyzing.png",
    },
    {
        title: "Optimization & Support",
        text: "We optimize system performance and provide ongoing technical support to resolve issues quickly.",
        img: "/assets/images/services/development-plan.png",
    },
];
   const optimizationData = [
    {
        img: "/assets/images/icon/icon-1.png",
        title: "Website Maintenance",
        desc: "Sevenunique Tech Solution Pvt. Ltd. offers reliable website maintenance services to ensure your website remains updated, secure, and fully functional. We handle regular updates, backups, bug fixes, and performance optimization so your business runs smoothly online.",
    },
    {
        img: "/assets/images/icon/icon-2.png",
        title: "Technical Support",
        desc: "Our dedicated technical support team is available to resolve issues quickly and efficiently. From troubleshooting errors to fixing downtime and improving performance, we ensure minimal disruption to your business operations.",
    },
    {
        img: "/assets/images/icon/icon-3.png",
        title: "Security & Backup Services",
        desc: "We provide advanced security monitoring and regular data backups to protect your website and applications from threats, data loss, and cyber-attacks. Your business data stays safe and recoverable at all times.",
    },
];
    const faqs = [
    {
        question: "What is website maintenance?",
        answer: "Website maintenance includes regular updates, bug fixes, security checks, and performance optimization to keep your website running smoothly."
    },
    {
        question: "Why is maintenance important?",
        answer: "Regular maintenance ensures your website stays secure, fast, and up-to-date, preventing downtime and security risks."
    },
    {
        question: "Do you provide 24/7 support?",
        answer: "Yes, we provide ongoing technical support to resolve issues and ensure uninterrupted performance."
    },
    {
        question: "Do you offer backup services?",
        answer: "Yes, we provide regular backups to protect your data and ensure quick recovery in case of any issues."
    }
];
    return (
        <>
      <PageBanner
    title="Reliable Maintenance & Support for Seamless Performance"
    image="/assets/images/website/support-vec.png"
    breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Tech Services", link: "/OurService/tech-services" },
        { label: "Maintenance & Support", link: "/OurService/tech-services/maintenance-support" },
    ]}
/>
     <section className="content-marketing py-5 bg-light">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="fw-bold main-heading">
                What is <span>Maintenance & Support</span>
            </h2>
            <p className="text-muted w-75 mx-auto">
                Maintenance & Support ensures your website, application, or software runs smoothly, securely, and efficiently. At Sevenunique, we provide continuous monitoring, updates, and technical assistance to keep your digital platforms optimized and error-free.
            </p>
        </div>

        <div className="row g-4">

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Regular Maintenance</h5>
                    <p>
                        We perform routine updates, bug fixes, and system checks to ensure your platform stays stable and performs at its best.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>24/7 Monitoring</h5>
                    <p>
                        Continuous monitoring helps us detect issues early and resolve them before they impact your users or business operations.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Performance Optimization</h5>
                    <p>
                        We optimize speed, performance, and functionality to provide a seamless user experience and improved efficiency.
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="cm-card h-100">
                    <h5>Security & Backup</h5>
                    <p>
                        Protect your system with regular backups, security patches, and proactive measures against threats and data loss.
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>
          
            {/* Process */}
         <ProcessSection
    subtitle="Our Process"
    title="We follow a structured maintenance and support workflow."
    steps={processSteps}
/>
            {/* Whuy Choose Us */}
            <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
    upperdescription="Reliable support with proven expertise"
    description="Sevenunique Tech Solution Pvt. Ltd. is a trusted partner for maintenance and support services. We ensure your systems remain secure, updated, and high-performing with proactive monitoring and expert assistance."
    points={[
        { text: "Experienced technical support team" },
        { text: "Proactive monitoring and quick issue resolution", wide: true },
        { text: "Regular updates, backups, and security enhancements" },
        { text: "Transparent communication and reporting" },
        { text: "Cost-effective and scalable support solutions", wide: true },
    ]}
/>
           <Optimization
    services={optimizationData}
    subtitle="Maintenance & Support"
    title="What Makes Us a Trusted Partner for Maintenance & Support"
/>
            <ContactSection />
          <FAQSection
    faqs={faqs}
    description="Here are some common questions about our maintenance and support services."
/>
        </>
    )
}
