import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import WhatIsAPI from '../../../componets/Api/WhatIsAPI'
import WhyChooseAPI from '../../../componets/Api/WhyChooseAPI'
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";
import WhatWeOffer from '../../../componets/Api/WhatWeOffer';
import Integrations from '../../../componets/Api/Integrations';
import ServiceSection from "../../../componets/ServiceSection";
import ContactSection from '../../../componets/HomeCom/ContactSection';
import BlogSection from '../../../componets/HomeCom/BlogSection';
const features = [
    'Payment gateway integrations (Stripe, PayPal, Razorpay)',
    'Cloud service integrations (AWS, Google Cloud, Azure)',
    'E-commerce platform integrations',
    'Social media API connections (Facebook, Twitter, LinkedIn)',
    'CRM and ERP system connections',
    'Analytics and reporting tool connections',
];

const Apicards = [
    {
        title: "Third-party API Integration",
        desc: "Connect your applications with external services, payment gateways, and data providers seamlessly.",
        icon: "bi bi-code-slash",
        iconBg: "#3b82f6",
        bg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
        borderColor: "#bfdbfe",
    },
    {
        title: "Webhook Systems",
        desc: "Real-time event-driven integrations that trigger actions based on external system events.",
        icon: "bi bi-lightning-charge",
        iconBg: "#22c55e",
        bg: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
        borderColor: "#bbf7d0",
    },
    {
        title: "Data Synchronization",
        desc: "Keep your data consistent across multiple systems with automated synchronization processes.",
        icon: "bi bi-database",
        iconBg: "#a855f7",
        bg: "linear-gradient(135deg, #faf5ff, #ede9fe)",
        borderColor: "#d8b4fe",
    },
];

const optimizationData = [
    {
        img: "/assets/images/services/api/payment-gateway.png",
        title: "Payment Gateway Integration",
        desc: "Integrate popular payment gateways like Stripe, PayPal, Razorpay, and more for secure payment processing.",
    },
    {
        img: "/assets/images/services/api/networking.png",
        title: "Social Media Integration",
        desc: "Connect your applications with social media platforms for enhanced user engagement and marketing.",
    },
    {
        img: "/assets/images/services/api/cloud-computing.png",
        title: "Cloud Service Integration",
        desc: "Integrate with cloud platforms like AWS, Google Cloud, and Azure for scalable infrastructure.",
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
export default function page() {
    const cards = [
        {
            title: 'Expert Integration',
            desc: 'Experienced developers with deep knowledge of various APIs and integration patterns.',
            icon: 'bi-activity',
            gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            bg: '#eff6ff',
        },
        {
            title: 'Secure Connections',
            desc: 'Bank-grade security protocols and encryption for all API integrations.',
            icon: 'bi-shield-lock',
            gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
            bg: '#f0fdf4',
        },
        {
            title: '24/7 Monitoring',
            desc: 'Continuous monitoring and alerting to ensure your integrations are always operational.',
            icon: 'bi-lightning-charge',
            gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
            bg: '#fefce8',
        },
        {
            title: 'Fast Implementation',
            desc: 'Quick turnaround times with proven integration templates and frameworks.',
            icon: 'bi-people',
            gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
            bg: '#faf5ff',
        },
    ];
    const items = [
        {
            icon: 'bi-code-slash',
            title: 'API Design & Architecture',
            points: [
                'RESTful API design following industry best practices',
                'GraphQL API development for flexible data queries',
                'Microservices architecture for scalable solutions',
                'API versioning and backward compatibility planning',
            ],
            position: 'left',
        },
        {
            icon: 'bi-shield-lock',
            title: 'Security & Authentication',
            points: [
                'OAuth 2.0 and JWT token-based authentication',
                'API key management and rate limiting',
                'Data encryption and secure transmission protocols',
                'Compliance with financial security standards',
            ],
            position: 'right',
        },
        {
            icon: 'bi-database',
            title: 'Integration & Testing',
            points: [
                'Third-party service integrations and webhooks',
                'Comprehensive API testing and quality assurance',
                'Performance testing and load balancing',
                'Automated testing and CI/CD pipeline setup',
            ],
            position: 'left',
        },
    ];
    const servicesData = [
        {
            title: "Enhanced Functionality",
            description:
                "Add powerful features to your applications without building everything from scratch.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "Cost Efficiency",
            description:
                "Reduce development costs by leveraging existing third-party services and APIs.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Faster Time to Market",
            description:
                "Accelerate your product launch with pre-built integrations and proven solutions.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Scalability",
            description:
                "Scale your applications easily with cloud-based integrations and services.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Better User Experience",
            description:
                "Provide seamless user experiences with integrated payment, social, and cloud services.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Data Insights",
            description:
                "Gain valuable insights by integrating analytics and reporting tools.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
    return (
        <>
            <PageBanner
                title="Connect & Integrate Your Applications"
                image="/assets/images/services/api/gradient-api-illustration.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "API", link: "/OurService/api" },
                    { label: "API Integration", link: "/OurService/api/api-integration" },
                ]}
            />
            <WhatIsAPI
                title={
                    <>
                        What is <span style={{ color: '#5956e9' }}>API Integration</span>
                    </>
                }
                subtitle="API Integration involves connecting different software applications to enable seamless data exchange and functionality."
                cards={Apicards}
                features={features}
            />
            <WhyChooseAPI
                title={
                    <>
                        Why choose <span style={{ color: '#5956e9' }}>our integration services</span>
                    </>
                }
                subtitle="In today's interconnected digital landscape, robust APIs are crucial for business success."
                cards={cards}
                themeBg="linear-gradient(135deg, #fff2e2, #ffe8d1)"
            />
            <WhatWeOffer items={items} />
            <Optimization
                services={optimizationData}
                subtitle="tegration Services"
                title="Comprehensive API integration services tailored for modern applications and business needs."
            />
                <Integrations />
                 {/* Services Card */}
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="API Development Services"
                subtitle="Services"
                description="omprehensive API development services tailored for Finunique and enterprise applications."
                services={servicesData}
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
