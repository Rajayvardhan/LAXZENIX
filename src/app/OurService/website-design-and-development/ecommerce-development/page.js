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
        title: "Custom E-commerce Website",
        description:
            "We build fully customized online stores tailored to your brand, products, and target audience.",
        icon: "/assets/image/strategy-icon.jpg",
        link: "/OurService/tech/ecommerce-development",
        delay: ".3s",
    },
    {
        title: "Shopping Cart & Checkout",
        description:
            "Seamless shopping cart and secure checkout experience to boost conversions and reduce cart abandonment.",
        icon: "/assets/image/product-design-icon.png",
        link: "/OurService/tech/checkout-system",
        delay: ".5s",
    },
    {
        title: "Payment Gateway Integration",
        description:
            "Integrate secure payment gateways like Razorpay, Stripe, and PayPal for smooth transactions.",
        icon: "/assets/image/dev-icon.png",
        link: "/OurService/tech/payment-integration",
        delay: ".7s",
    },
    {
        title: "Product Management System",
        description:
            "Easily manage products, categories, inventory, and pricing with a powerful admin panel.",
        icon: "/assets/image/strategy-icon.jpg",
        link: "/OurService/tech/product-management",
        delay: ".3s",
    },
    {
        title: "Mobile Commerce (M-Commerce)",
        description:
            "Optimized mobile shopping experience ensuring your store performs perfectly on all devices.",
        icon: "/assets/image/product-design-icon.png",
        link: "/OurService/tech/mobile-commerce",
        delay: ".5s",
    },
    {
        title: "Maintenance & Support",
        description:
            "Keep your online store secure, updated, and running smoothly with our ongoing support.",
        icon: "/assets/image/dev-icon.png",
        link: "/OurService/tech/ecommerce-support",
        delay: ".7s",
    },
];

const processSteps = [
    {
        title: "Business Analysis",
        text: "We understand your products, target audience, and business model to create the right e-commerce strategy.",
        img: "/assets/images/services/analytics.png",
    },
    {
        title: "UI/UX Design",
        text: "Design engaging and user-friendly shopping experiences that drive conversions.",
        img: "/assets/images/services/database.png",
    },
    {
        title: "Development",
        text: "We build secure and scalable e-commerce platforms with all essential features.",
        img: "/assets/images/services/shopping-online.png",
    },
    {
        title: "Testing",
        text: "We test payment systems, performance, and user experience for a smooth shopping journey.",
        img: "/assets/images/services/analyzing.png",
    },
    {
        title: "Launch & Growth",
        text: "We launch your store and help you scale with continuous improvements and support.",
        img: "/assets/images/services/development-plan.png",
    },
];

const optimizationData = [
    {
        img: "/assets/images/icon/icon-1.png",
        title: "Conversion-Focused Design",
        desc: "We design e-commerce websites that not only look great but are optimized to convert visitors into customers with seamless user journeys.",
    },
    {
        img: "/assets/images/icon/icon-2.png",
        title: "Secure & Scalable Platform",
        desc: "Our e-commerce solutions are built with advanced security and scalability, ensuring safe transactions and future growth.",
    },
    {
        img: "/assets/images/icon/icon-3.png",
        title: "Complete Store Management",
        desc: "From product listings to order tracking and inventory management, we provide end-to-end e-commerce solutions.",
    },
];

const faqs = [
    {
        question: "What is e-commerce development?",
        answer: "It is the process of building online stores where businesses can sell products or services digitally.",
    },
    {
        question: "Which payment gateways do you support?",
        answer: "We integrate Razorpay, Stripe, PayPal, and other secure payment solutions.",
    },
    {
        question: "Will my store be mobile-friendly?",
        answer: "Yes, all our e-commerce websites are fully responsive and optimized for mobile users.",
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer complete maintenance, updates, and technical support.",
    },
];
    return (
        <>
          <PageBanner
    title="Build Your Powerful Online Store"
    image="/assets/images/website/team.webp"
    breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Services", link: "/services" },
        { label: "E-commerce Development" },
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
                                        src="/assets/images/website/e-banner.png"
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
            <span className="sub-title st-one">What is E-commerce Development?</span>
<h2>E-commerce Website Development</h2>

<h4>Build, Scale & Grow Your Online Business</h4>

<p>
    E-commerce development is the process of creating online stores where
    businesses can sell products or services digitally. It includes designing
    user-friendly interfaces, developing secure payment systems, and ensuring
    a smooth shopping experience.
</p>

<p>
    In today’s fast-growing digital market, businesses across India—especially
    in cities like Jaipur—are shifting online to reach more customers and increase
    sales. A well-built e-commerce website helps you manage products, track orders,
    and grow your business efficiently.
</p>

       
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
    title="Our Website Design & Development Services"
    subtitle="Services"
    description="We provide end-to-end website design and development solutions, combining creativity, modern technologies, and performance-driven strategies to build powerful digital experiences."
    services={servicesData}
/>
           
            {/* Whuy Choose Us */}
         <WhyChooseUs
    image="/Digital/digi-1.png"
    title="Why"
    highlight="Choose Us"
   upperdescription="Building high-converting e-commerce stores"
description="We specialize in creating secure, scalable, and conversion-focused e-commerce websites. From design to payment integration, we ensure your online store delivers a seamless shopping experience and drives maximum sales."
points={[
    { text: "Expertise in modern e-commerce platforms and technologies" },
    { text: "Custom online store design for better conversions", wide: true },
    { text: "Secure payment gateway integration" },
    { text: "Mobile-friendly and fast-loading shopping experience" },
    { text: "Scalable solutions to grow your online business", wide: true },
]}
/>
            {/* Tools We Use */}
            <section className="partners-area pt-125 pb-130 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Tools &Technologies We Use</h2>
                               <h2>Technologies We Use</h2>
<p>Modern tools to build powerful e-commerce platforms</p>
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
          <section className="local-seo pt-125 pb-130">
    <div className="container text-center">

        <h2 className="local-seo__title">What is Website Design & Development?</h2>

        <p className="local-seo__desc">
            Website Design & Development is the process of creating visually appealing,
            responsive, and high-performing websites that help businesses establish a
            strong online presence. It ensures your website not only looks great but also
            functions smoothly to deliver the best user experience and drive conversions.
        </p>

        <div className="row mt-5">

            {[
                {
                    title: "UI/UX Design",
                    icon: "🎨",
                },
                {
                    title: "Responsive Development",
                    icon: "💻",
                },
                {
                    title: "Fast Performance",
                    icon: "⚡",
                },
                {
                    title: "Secure & Scalable",
                    icon: "🔒",
                },
            ].map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 mb-4">
                    <div
                        className="local-seo__card wow fadeInUp"
                        data-wow-delay={`${i * 0.1}s`}
                    >
                        <div className="local-seo__icon">{item.icon}</div>

                        <h4>{item.title}</h4>
                    </div>
                </div>
            ))}

        </div>

    </div>
</section>
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
        </>
    )
}
