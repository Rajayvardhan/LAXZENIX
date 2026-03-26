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
            title: "Keyword Research & Strategy",
            description:
                "Find the most relevant and profitable keywords for your business to target high-intent traffic.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/seo",
            delay: ".3s",
        },
        {
            title: "On-Page Optimization",
            description:
                "Improve titles, meta tags, content, and internal links for better visibility on search engines.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/smo",
            delay: ".5s",
        },
        {
            title: "Technical SEO",
            description:
                "Fix website speed, mobile-friendliness, site structure, and indexing issues for smooth performance.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/local-seo",
            delay: ".7s",
        },
        {
            title: "Local SEO",
            description:
                "Optimize Google My Business, maps listings, and local citations to attract nearby customers in Jaipur & India.",
            icon: "/assets/image/strategy-icon.jpg",
            link: "/OurService/digital-marketing/content-marketing",
            delay: ".3s",
        },
        {
            title: "Content Optimization",
            description:
                "Create SEO-friendly blogs, landing pages, and product descriptions that rank and convert.",
            icon: "/assets/image/product-design-icon.png",
            link: "/OurService/digital-marketing/website-optimization",
            delay: ".5s",
        },
        {
            title: "Analytics & Reporting",
            description:
                "Get transparent reports with clear data on traffic, rankings, and ROI, so you always know your growth.",
            icon: "/assets/image/dev-icon.png",
            link: "/OurService/digital-marketing/link-building",
            delay: ".7s",
        },
    ];
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
    const optimizationData = [
        {
            img: "/assets/images/icon/icon-1.png",
            title: "SEO Optimization",
            desc: "Sevenunique Tech Solution Pvt. Ltd. provides expert SEO optimization services, helping businesses improve their online presence and achieve long-term sustainable growth. Our specialized digital marketing SEO services give your brand visibility with the right audience and can rank within the major search engines.",
        },
        {
            img: "/assets/images/icon/icon-2.png",
            title: "International SEO",
            desc: "ur extensive search engine optimization service includes keyword research, content optimization, and link building, all working together to drive traffic and increase conversions for your website. If you have a business that targets an international audience, we also have our international SEO service, which ensures that your multi-regional and language targeting is effective.",
        },
        {
            img: "/assets/images/icon/icon-3.png",
            title: "Global SEO",
            desc: "As you probably know, we are a reputable global SEO service provider; moreover, we use innovative tools and advanced strategies to ensure that your business is competitive at an eminently global scale. Whether you are a startup looking to grow locally or an enterprise looking to expand globally, our team at Sevenunique Tech will provide you with tailored SEO services that will help you achieve results and pave the way for long-term digital success.",
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
                title="Rank Higher. Get Found. Grow Faster."
                image="/assets/images/seo/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/services" },
                    { label: "Digital Marketing" },
                    { label: "SEO", link: "/services/digital-marketing/seo" },
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
                                    <span className="sub-title st-one">What is SEO?</span>
                                    <h2>Search Engine Optimization (SEO)
                                    </h2>
                                </div>

                                <h4>Professional Design Agency to provide solutions</h4>
                                <p>Search Engine Optimization (SEO) is the process of improving a website’s visibility on search engines like Google so that businesses can attract the right audience and generate organic leads. In today’s competitive digital market, companies across India and especially in growing cities like Jaipur rely on SEO to reach more customers online. From keyword optimization to technical SEO, every step helps boost traffic and credibility. At Our Sevenunique, we combine proven strategies, transparent reporting, and result-driven campaigns, making us the best SEO company in Jaipur trusted for local and national success.</p>
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
            {/* Process */}
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
            <Optimization
                services={optimizationData}
                subtitle="Digital Marketing SEO"
                title="What Makes Us a Trusted Partner for SEO Optimization Services"
            />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
