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
        title: "Requirement Analysis",
        text: "We understand your business needs to recommend the right domain name and hosting solution.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "Domain Registration",
        text: "We help you choose and register a secure, brand-friendly domain for your business.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Hosting Setup",
        text: "We configure fast, secure, and reliable hosting tailored to your website requirements.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Deployment",
        text: "We connect your domain with hosting and deploy your website smoothly without downtime.",
        img: "/assets/images/website/analyzing.png",
    },
    {
        title: "Maintenance & Support",
        text: "We provide ongoing monitoring, updates, backups, and technical support to keep your website running smoothly.",
        img: "/assets/images/services/development-plan.png",
    },
];
   const stepsData = [
    {
        title: "Startups & Small Businesses",
        desc: "Get your business online with affordable domain registration and reliable hosting solutions tailored for startups.",
    },
    {
        title: "E-Commerce Websites",
        desc: "Ensure fast loading speed, uptime, and secure transactions with high-performance hosting for online stores.",
    },
    {
        title: "Corporate Websites",
        desc: "Maintain a professional online presence with secure and scalable hosting infrastructure for enterprise needs.",
    },
    {
        title: "Bloggers & Personal Brands",
        desc: "Launch your personal website or blog with easy-to-manage hosting and a unique domain name.",
    },
    {
        title: "Developers & Agencies",
        desc: "Flexible hosting environments with full control, scalability, and support for multiple client projects.",
    },
    {
        title: "Educational Platforms",
        desc: "Host e-learning platforms and institutional websites with reliable uptime and performance optimization.",
    },
];
   const faqs = [
    {
        question: "What is a domain name?",
        answer: "A domain name is your website’s address on the internet (like www.yourbusiness.com) that users type to access your site.",
    },
    {
        question: "What is web hosting?",
        answer: "Web hosting is a service that stores your website files and makes them accessible on the internet.",
    },
    {
        question: "Do I need both domain and hosting?",
        answer: "Yes, a domain gives your website an address, and hosting stores your website data—both are required to run a website.",
    },
    {
        question: "Do you provide support and maintenance?",
        answer: "Yes, we offer complete support including setup, security, backups, and ongoing maintenance.",
    },
];
    return (
        <>
         <PageBanner
    title="Reliable Domain & Hosting Services for Your Business"
    image="/assets/images/website/hosting.png"
    breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Tech Services", link: "/OurService/tech" },
        { label: "Domain & Hosting", link: "/OurService/tech/domain-hosting" },
    ]}
/>
           
          <ProcessSection
    subtitle="Our Process"
    title="At Sevenunique, we follow a structured approach to domain and hosting setup."
    steps={processSteps}
/>
            {/* Whuy Choose Us */}
          <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
    upperdescription="Reliable, secure, and scalable hosting solutions"
    description="We provide fast, secure, and scalable domain and hosting services to help your business stay online 24/7. From domain registration to server management, we ensure performance, uptime, and complete technical support."
    points={[
        { text: "Fast and secure hosting with high uptime guarantee" },
        { text: "Affordable domain registration and management", wide: true },
        { text: "Scalable hosting solutions for growing businesses" },
        { text: "Expert support for setup, migration, and maintenance" },
        { text: "Regular backups and advanced security protection", wide: true },
    ]}
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
