import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import WebsiteOptimization from '../../../componets/digital-marketing/WebsiteOptimization'
import WebsiteOptimizationServices from '../../../componets/digital-marketing/WebsiteOptimizationServices'
import ProcessSection from "../../../componets/ProcessSection";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import ServiceSection from "../../../componets/ServiceSection";
import BlogSection from "../../../componets/HomeCom/BlogSection";
import ContactSection from "../../../componets/HomeCom/ContactSection";
import FAQSection from "../../../componets/Faq";
export default function page() {
    const processSteps = [
        {
            title: "Research & Analysis",
            text: "Comprehensive keyword research, competitor study, and website audit to identify opportunities.",
            img: "/assets/images/services/analytics.png",
        },
        {
            title: "Strategy & Planning",
            text: "Customized SEO roadmap designed to achieve your business objectives.",
            img: "/assets/images/services/database.png",
        },
        {
            title: "On-Page Optimization",
            text: "Optimization of website content, titles, meta tags, images, and internal linking.",
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
        const servicesData = [
        {
            title: "Faster Loading Speeds",
            description:
                "Reduce bounce rates and keep visitors engaged with a lightning-fast website that loads quickly on all devices.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/contactUs",
            delay: ".3s",
        },
        {
            title: "Improved User Experience (UX)",
            description:
                "Enhance navigation, design, and accessibility to provide a seamless experience that encourages users to stay longer and interact more.",
            icon: "/assets/image/product-design-icon.png",
            link: "/contactUs",
            delay: ".5s",
        },
        {
            title: "Higher Search Engine Rankings",
            description:
                "Boost visibility on Google with SEO-friendly site structure, content, and technical optimizations, helping you attract more organic traffic.",
            icon: "/assets/image/dev-icon.png",
            link: "/contactUs",
            delay: ".7s",
        },
        {
            title: "Increased Conversions",
            description:
                "Turn visitors into leads or customers with optimized landing pages, CTAs, and user flows that maximize conversions.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/contactUs",
            delay: ".3s",
        },
        {
            title: "Mobile Optimization",
            description:
                "Ensure your website performs flawlessly on smartphones and tablets with responsive design and mobile-first optimization.",
            icon: "/assets/image/product-design-icon.png",
            link: "/contactUs",
            delay: ".5s",
        },
        {
            title: "Enhanced Security & Reliability",
            description:
                "Protect your website and build user trust with secure, reliable, and scalable optimization solutions.",
            icon: "/assets/image/dev-icon.png",
            link: "/contactUs",
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
    return (
        <>
            <PageBanner
                title="Website Optimization for Better Performance"
                image="/assets/images/smo/website.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Digital Marketing", link: "/OurService/digital-marketing" },
                    { label: "Website Optimization", link: "/OurService/digital-marketing/website-optimization" },
                ]}
            />
            <WebsiteOptimization />
            <WebsiteOptimizationServices />
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
              {/* Tools We Use */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Industries We Serve</h2>
                                <p>We help businesses across a wide range of industries grow online with tailored digital marketing and website optimisation solutions. Our strategies are designed to meet the unique needs of each sector, driving local and global success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Finance & Banking</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Healthcare</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Retail & E-commerce</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Real Estate</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Travel & Hospitality</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Manufacturing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              {/* Services Card */}
            <ServiceSection
                containerclass="container"
                colClass="col-lg-4 col-md-6"
                title="Our Digital Marketing Services"
                subtitle="Services"
                description="A full-service digital agency delivering creativity, strategy, and technology under one roof."
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
