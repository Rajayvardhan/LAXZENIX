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
                title="Content Marketing That Drives Real Growth"
                image="/assets/images/smo/content-marketing.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Digital Marketing", link: "/OurService/digital-marketing" },
                    { label: "Content Marketing", link: "/OurService/digital-marketing/content-marketing-services" },
                ]}
            />
            <section className="content-marketing py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold main-heading">
                            What is <span>Content Marketing</span>
                        </h2>
                        <p className="text-muted w-75 mx-auto">
                            Content Marketing is the art of creating and sharing valuable content to attract, engage, and retain your audience. At Sevenunique, we help businesses grow online by producing content that drives traffic, builds trust, and strengthens brand authority.
                        </p>
                    </div>
                    <div className="row g-4">

                        <div className="col-md-6 col-lg-3">
                            <div className="cm-card h-100">
                                <h5>Strategic Planning</h5>
                                <p>
                                    We develop targeted content strategies aligned with your business goals and audience needs to ensure every piece of content delivers results.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="cm-card h-100">
                                <h5>Audience Engagement</h5>
                                <p>
                                    Create meaningful connections with your audience through blogs, social media posts, and videos that build loyalty and trust in your brand.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="cm-card h-100">
                                <h5>Measurable Growth</h5>
                                <p>
                                    Track the performance of your content and optimize continuously to ensure higher engagement, more leads, and improved ROI.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="cm-card h-100">
                                <h5>Brand Authority</h5>
                                <p>
                                    Establish your business as a thought leader in your industry with high-quality content that attracts attention, shares knowledge, and builds credibility.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ExpertiseSection />
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
            <Optimization
                services={optimizationData}
                subtitle="Digital Marketing SEO"
                title="What Makes Us a Trusted Partner for SEO Optimization Services"
            />
            <ContactSection />
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
