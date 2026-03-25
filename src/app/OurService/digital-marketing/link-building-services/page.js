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
            title: "Research",
            text: "In this stage, we collect all the important data required...",
            img: "/assets/images/services/analytics.png",
        },
        {
            title: "Create",
            text: "After research, we define goals and design campaigns...",
            img: "/assets/images/services/database.png",
        },
        {
            title: "Promote",
            text: "We promote campaigns across platforms...",
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
    const stepsData = [
        {
            title: "Real Estate Firms",
            desc: "Boost local visibility and capture qualified leads with strategic local SEO link-building tailored for property listings and real estate websites.",
        },
        {
            title: "E-Commerce Brands",
            desc: "Increase domain authority and trust to stand out in competitive online markets and improve product ranking visibility.",
        },
        {
            title: "Healthcare Providers",
            desc: "Build credibility and patient trust with authoritative backlinks that help patients find reliable health information and services.",
        },
        {
            title: "Educational Institutions",
            desc: "Strengthen reputation and online visibility for courses, research, and student enrollment through high-quality educational backlinks.",
        },
        {
            title: "Travel & Hospitality",
            desc: "Attract industry-specific backlinks to boost authority, establish thought leadership, and gain client trust in competitive B2B markets.",
        },
        {
            title: "B2B Companies",
            desc: "Rank higher for destination and service searches, driving more bookings and improving your website’s visibility for travelers and guests.",
        },
    ];
    const faqs = [
        {
            question: "What is link building and why is it important for SEO?",
            answer: "Link building is the process of acquiring high-quality backlinks from authoritative websites to your site. These backlinks act as “votes of confidence” for search engines, signaling that your content is trustworthy, valuable, and worth ranking higher. Effective link building can significantly improve your website’s search engine rankings, increase organic traffic, and enhance your online visibility."
        },
        {
            question: "How does Sevenunique approach link-building campaigns?",
            answer: "At Sevenunique, we take a strategic and customized approach to link building. We start with thorough research to identify relevant and authoritative websites in your industry. Our team then creates high-quality content and outreach strategies to secure valuable backlinks that align with your business goals. We focus on white-hat techniques such as guest posting, content-led link building, and influencer marketing to ensure sustainable results."
        },
        {
            question: "What types of businesses can benefit from link-building services?",
            answer: "Link-building services can benefit businesses of all sizes and industries. Whether you are a startup looking to establish your online presence, an agency seeking to improve client SEO performance, or an enterprise aiming to maintain authority in a competitive market, our link-building strategies can help you achieve your goals. We tailor our campaigns to meet the specific needs of each business, ensuring maximum impact and ROI."
        },
    ];
    return (
        <>
            <PageBanner
                title="Link Building Services for Higher Ranking"
                image="/assets/images/services/linkservices/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Digital Marketing", link: "/OurService/digital-marketing" },
                    { label: "Link Building Services", link: "/OurService/digital-marketing/link-building-services" },
                ]}
            />
            <LinkBuildingSection />
            <ProcessSection subtitle="Our Process"
                title="At Laxzenix, we follow a clear step-by-step process."
                steps={processSteps}
            />
            {/* Whuy Choose Us */}
            <WhyChooseUs
                image="/Digital/digi-1.png"
                title="Why"
                highlight="Choose"
                upperdescription="With a proven track record of success"
                description="As a trusted digital marketing partner, Laxzenix specialises in delivering strategies designed for your specific goals. From SEO to social media, we ensure every campaign is result-driven and growth-focused."
                points={[
                    { text: "Experienced team with a proven track record" },
                    { text: "Custom strategies for every industry and business size", wide: true },
                    { text: "Expertise in SEO, content, paid ads, and social media" },
                    { text: "Transparent reporting with real-time insights" },
                    { text: "ROI-focused, affordable, and scalable marketing packages", wide: true },
                ]}
            />
            <StepsOne
                subtitle="Types of Businesses That Need Link Building"
                highlight="Industries We Serve – Link Building"
                description="Sevenunique provides expert link-building services for businesses of all sizes and industries. Whether your goal is building authority, generating leads, or improving online visibility, our strategies help you grow and stand out in search results."
                steps={stepsData}
                showCount={false}
            />
            <LinkBenefits />
            <LinkUs />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
            <ContactSection />
            <BlogSection />
        </>
    )
}
