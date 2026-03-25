import React from 'react'
import PageBanner from '../../../componets/PageBanner'
import ProcessSection from "../../../componets/ProcessSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";
import StepsOne from '../../../componets/digital-marketing/StepsOne';
import LocaSeoWhy from '../../../componets/digital-marketing/LocaSeoWhy';
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
    const stepsData = [
        {
            title: "Audit & Analysis",
            desc: "We review your SEO performance, Google Business Profile, and competitors to find improvement areas.",
        },
        {
            title: "Strategy Development",
            desc: "We create a customised SEO plan with keywords, optimisations, and review strategy.",
        },
        {
            title: "Implementation",
            desc: "We optimise your website, listings, and Google profile for better visibility.",
        },
        {
            title: "Monitor & Optimize",
            desc: "We track rankings, traffic, and leads to ensure long-term SEO success.",
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
                title="Grow your brand with result-driven SMO services"
                image="/assets/images/smo/banner.jpg"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Digital Marketing", link: "/OurService/digital-marketing" },
                    { label: "Social Media Optimization", link: "/services/digital-marketing/Social-Media-Optimization" },
                ]}
            />
            <section className="local-seo pt-125 pb-130     ">
                <div className="container text-center">

                    <h2 className="local-seo__title">What is Local SEO?</h2>

                    <p className="local-seo__desc">
                        Local SEO helps your business appear when people nearby search for
                        products or services you offer. It ensures local customers can find you
                        easily online, leading to more calls, visits, and sales.
                    </p>

                    <div className="row mt-5">

                        {[
                            {
                                title: "Google Business Profile Optimization",
                                icon: "📍",
                            },
                            {
                                title: "Local Keywords",
                                icon: "🔍",
                            },
                            {
                                title: "Online Reviews",
                                icon: "⭐",
                            },
                            {
                                title: "Mobile-Friendly Website",
                                icon: "📱",
                            },
                        ].map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 mb-4">
                                <div className="local-seo__card wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>

                                    <div className="local-seo__icon">{item.icon}</div>

                                    <h4>{item.title}</h4>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
            {/* Process */}
            <ProcessSection subtitle="Our Process"
                title="At Laxzenix, we follow a clear step-by-step process."
                steps={processSteps}
            />
            <StepsOne
                subtitle="How Our Local SEO Works "
                highlight="Local SEO Works"
                // description="Our simple 4-step process is designed to improve your local search rankings and attract more customers in your area."
                steps={stepsData}
                showCount={true}
            />
            <LocaSeoWhy />
            <Optimization
                            services={optimizationData}
                            subtitle="Digital Marketing SEO"
                            title="What Makes Us a Trusted Partner for SEO Optimization Services"
                        />
            {/* Tools We Use */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Industries We Help with Local SEO Services?</h2>
                                <p>Partner with a team that delivers measurable results and understands your local market</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>E-commerce </p>
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
                                    <p>Education</p>
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
                                    <p>Automotive</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Food & Beverage</p>
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <p>Travel & Tourism</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              <ContactSection />
              <FAQSection
                            faqs={faqs}
                            description="Here are some common questions about our services."
                        />
        </>
    )
}
