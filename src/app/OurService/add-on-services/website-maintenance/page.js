import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import LinkBuildingSection from '../../../componets/digital-marketing/LinkBuildingSection'
import ProcessSection from '../../../componets/ProcessSection'
import WhyChooseUs from "../../../componets/WhyChooseUs";
import StepsOne from '../../../componets/digital-marketing/StepsOne';
import LinkBenefits from '../../../componets/digital-marketing/LinkBenefits';
import LinkUs from '../../../componets/digital-marketing/LinkUs';
import FAQSection from "../../../componets/Faq";
import ContactSection from "../../../componets/HomeCom/ContactSection";
import BlogSection from "../../../componets/HomeCom/BlogSection";

export default function page() {
   const processSteps = [
    {
        title: "Website Audit",
        text: "We analyze your website for performance issues, security gaps, and areas that need improvement.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "Maintenance Planning",
        text: "We create a customized maintenance plan including updates, backups, and monitoring strategies.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Updates & Fixes",
        text: "We regularly update plugins, fix bugs, and ensure your website stays secure and functional.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Monitoring & Security",
        text: "We continuously monitor uptime, performance, and security to prevent issues before they occur.",
        img: "/assets/images/services/analyzing.png",
    },
    {
        title: "Optimization & Support",
        text: "We optimize speed and performance while providing ongoing technical support whenever needed.",
        img: "/assets/images/services/development-plan.png",
    },
];
   const stepsData = [
    {
        title: "Business Websites",
        desc: "Keep your business website updated, secure, and running smoothly to maintain a strong online presence.",
    },
    {
        title: "E-Commerce Platforms",
        desc: "Ensure your online store remains fast, secure, and fully functional for seamless customer experience.",
    },
    {
        title: "Healthcare Websites",
        desc: "Maintain secure and reliable websites for healthcare providers to ensure patient trust and accessibility.",
    },
    {
        title: "Educational Platforms",
        desc: "Keep e-learning websites updated and optimized for better performance and user experience.",
    },
    {
        title: "Corporate Portals",
        desc: "Ensure high performance, data security, and regular updates for enterprise-level websites.",
    },
    {
        title: "Startups & Agencies",
        desc: "Focus on growth while we handle your website maintenance, updates, and technical support.",
    },
];
   const faqs = [
    {
        question: "What is website maintenance?",
        answer: "Website maintenance involves regular updates, security checks, bug fixes, and performance optimization to keep your website running smoothly."
    },
    {
        question: "Why is website maintenance important?",
        answer: "Regular maintenance ensures your website stays secure, fast, and up-to-date, preventing downtime, security risks, and poor user experience."
    },
    {
        question: "What does your maintenance service include?",
        answer: "Our services include updates, backups, security monitoring, performance optimization, bug fixes, and ongoing technical support."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide continuous monitoring and technical support to ensure your website runs smoothly without interruptions."
    },
];
    return (
        <>
          <PageBanner
    title="Reliable Website Maintenance for Smooth Performance"
    image="/assets/images/website/maint.png"
    breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Tech Services", link: "/OurService/tech" },
        { label: "Website Maintenance", link: "/OurService/tech/website-maintenance" },
    ]}
/>
            
          <ProcessSection 
    subtitle="Our Process"
    title="At Sevenunique, we follow a structured website maintenance approach."
    steps={processSteps}
/>
            {/* Whuy Choose Us */}
          <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
    upperdescription="Reliable and performance-driven maintenance solutions"
    description="Sevenunique Tech Solution Pvt. Ltd. provides complete website maintenance services to ensure your website stays secure, updated, and high-performing. We focus on proactive monitoring, fast issue resolution, and continuous optimization."
    points={[
        { text: "Experienced team for ongoing website maintenance" },
        { text: "Regular updates, backups, and security monitoring", wide: true },
        { text: "Quick bug fixing and performance optimization" },
        { text: "24/7 monitoring and technical support" },
        { text: "Affordable and scalable maintenance plans", wide: true },
    ]}
/>
        <StepsOne
    subtitle="Who Needs Website Maintenance?"
    highlight="Industries We Serve – Website Maintenance"
    description="Sevenunique provides professional website maintenance services for businesses across all industries. Whether you run a small business website or a large enterprise platform, we ensure your website remains secure, fast, and fully functional."
    steps={stepsData}
    showCount={false}
/>
           
          <FAQSection
    faqs={faqs}
    description="Here are some common questions about our website maintenance services."
/>
            <ContactSection />
            <BlogSection />
        </>
    )
}
