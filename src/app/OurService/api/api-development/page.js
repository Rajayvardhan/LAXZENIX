import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import WhatIsAPI from '../../../componets/Api/WhatIsAPI'
import WhyChooseAPI from '../../../componets/Api/WhyChooseAPI'
import WhatWeOffer from '../../../componets/Api/WhatWeOffer';
import ApiTypes from '../../../componets/Api/ApiTypes';
import ServiceSection from "../../../componets/ServiceSection";
import FintechApi from '../../../componets/Api/FintechApi';
import Technologies from '../../../componets/Api/Technologies';
import DevelopmentProcess from '../../../componets/Api/DevelopmentProcess';
import FAQSection from "../../../componets/Faq";
const features = [
    'Custom RESTful and GraphQL API development',
    'Secure authentication and authorization systems',
    'Real-time data processing and streaming APIs',
    'Third-party integrations and webhook systems',
    'Comprehensive API documentation and testing',
    'Performance optimization and monitoring',
];

const Apicards = [
    {
        title: "Custom API Development",
        desc: "Tailored API solutions designed specifically for your business requirements.",
        icon: "bi bi-code-slash",
        iconBg: "#3b82f6",
        bg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
        borderColor: "#bfdbfe",
    },
    {
        title: "Security First",
        desc: "Bank-grade security with OAuth, JWT, and API key management.",
        icon: "bi bi-shield-lock",
        iconBg: "#22c55e",
        bg: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
        borderColor: "#bbf7d0",
    },
    {
        title: "Data Integration",
        desc: "Seamless real-time data flow between systems.",
        icon: "bi bi-database",
        iconBg: "#a855f7",
        bg: "linear-gradient(135deg, #faf5ff, #ede9fe)",
        borderColor: "#d8b4fe",
    },
];




export default function page() {
    const cards = [
        {
            title: 'Scalable Architecture',
            desc: 'APIs designed to handle growing traffic and data volumes.',
            icon: 'bi-activity',
            gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            bg: '#eff6ff',
        },
        {
            title: 'Security Compliance',
            desc: 'Bank-grade security with compliance standards.',
            icon: 'bi-shield-lock',
            gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
            bg: '#f0fdf4',
        },
        {
            title: 'Fast Integration',
            desc: 'Quick integration with systems and third-party services.',
            icon: 'bi-lightning-charge',
            gradient: 'linear-gradient(135deg, #eab308, #ca8a04)',
            bg: '#fefce8',
        },
        {
            title: 'Expert Team',
            desc: 'Experienced developers with fintech expertise.',
            icon: 'bi-people',
            gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
            bg: '#faf5ff',
        },
    ];
    const servicesData = [
        {
            title: "Custom API Development",
            description:
                "Tailored API solutions designed specifically for your business requirements and use cases.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "Third-party Integrations",
            description:
                "Seamlessly integrate with third-party services and platforms for enhanced functionality.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "API Security & Authentication",
            description:
                "Ensure your APIs are secure with robust authentication and authorization mechanisms.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "API Documentation",
            description:
                "Comprehensive documentation with interactive examples and SDK generation.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Performance Optimization",
            description:
                "API optimization for speed, scalability, and efficient resource utilization.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "API Testing & QA",
            description:
                "Thorough testing including unit tests, integration tests, and load testing.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
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
    return (
        <>
            <PageBanner
                title="Custom API Development for Modern Applications"
                image="/assets/images/services/api/gradient-api-illustration.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "API", link: "/OurService/api" },
                    { label: "API Development", link: "/OurService/api/api-development" },
                ]}
            />
            <WhatIsAPI
                title={
                    <>
                        What is <span style={{ color: '#5956e9' }}>API Development?</span>
                    </>
                }
                subtitle="API Development involves creating interfaces that allow systems to communicate securely."
                cards={Apicards}
                features={features}
            />
            <WhyChooseAPI
                title={
                    <>
                        Why choose <span style={{ color: '#5956e9' }}>our API services</span>
                    </>
                }
                subtitle="In today's interconnected digital landscape, robust APIs are crucial for business success."
                cards={cards}
                themeBg="linear-gradient(135deg, #fff2e2, #ffe8d1)"
            />
       <WhatWeOffer items={items} />
            <ApiTypes />
            <FintechApi />
            {/* Services Card */}
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="API Development Services"
                subtitle="Services"
                description="omprehensive API development services tailored for fintech and enterprise applications."
                services={servicesData}
            />
            <Technologies />
            <DevelopmentProcess />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />

        </>
    )
}
