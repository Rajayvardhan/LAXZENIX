import DigitalPresence from '../../componets/add-on-components/DigitalPresence'
import AddOnServices from '../../componets/add-on-components/addonServices'
import PageBanner from '../../componets/PageBanner'
import React from 'react'
import Image from 'next/image'
import WhyUs from '../../componets/add-on-components/WhyUs'
import FAQSection from '../../componets/Faq';
import BlogSection from '../../componets/HomeCom/BlogSection';
import ContactSection from '../../componets/HomeCom/ContactSection';
import PixlabServices from '../../componets/add-on-components/DigitalPresence'

export default function page() {
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
    const servicesData = [
        { id: "01", icon: "🌐", title: "Reliable Domain Setup", text: "Secure domain registration and configuration to ensure your website is easily accessible and builds a strong online identity." },
        { id: "02", icon: "🔐", title: "Secure Hosting Services", text: "Fast, reliable, and secure hosting solutions to guarantee uptime, performance, and protection against potential threats." },
        { id: "03", icon: "☁️", title: "Scalable Cloud Solutions", text: "Implement flexible cloud infrastructure like AWS to support business growth, scalability, and enhanced operational efficiency." },
        { id: "04", icon: "👨‍💻", title: "Expert IT Consulting", text: "Professional IT consulting to optimize technology usage, improve workflows, and provide actionable insights for your business." },
        { id: "05", icon: "🎨", title: "Website Redesigning", text: "Refresh your website with modern design, improved UX/UI, and updated features to increase engagement and conversions." },
        { id: "06", icon: "🤝", title: "Ongoing Support & Care", text: "Continuous maintenance, updates, and monitoring to ensure smooth performance, security, and long-term website reliability." }
    ];
    const whyUsData = [
    {
        img: "/assets/image/project-complete.png",
        title: "Trusted Service Partner",
        desc: "Reliable and professional services for your business",
        delay: ".2s",
    },
    {
        img: "/assets/image/project-complete.png",
        title: "Reliable Cloud Solutions",
        desc: "Secure and scalable cloud infrastructure support",
        delay: ".3s",
    },
    {
        img: "/assets/image/award-icon.png",
        title: "Expert IT Consulting",
        desc: "Optimize technology strategy and workflows efficiently",
        delay: ".4s",
    },
    {
        img: "/assets/image/exp-icon.png",
        title: "Continuous Support",
        desc: "Ongoing maintenance, updates, and technical assistance",
        delay: ".5s",
    },
];
    return (
        <>
            <PageBanner
                title="Enhance Your Digital Presence with Our Add-On Services"
                image="/assets/images/services/addonservices/add.png"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Services", link: "/services" },
                    { label: "Add On Services" },
                ]}
            />
            <AddOnServices />
            <PixlabServices services={servicesData} />
            {/* Technology we use */}
            <section className="partners-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>Technology We Use</h2>
                                <p>We leverage modern technologies like cloud platforms, operating systems, and IT tools to deliver reliable and scalable add-on services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/server.png" width={50} height={50} alt="Razorpay" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/linux.png" width={50} height={50} alt="PayPal" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/windows.png" width={50} height={50} alt="PayU" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/Vmware-logo.png" width={50} height={50} alt="Easebuzz" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/docker.png" width={50} height={50} alt="fino-payments" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/Cloudflare_Logo.png" width={50} height={50} alt="cashfree" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/admin-panel.png" width={50} height={50} alt="pine-lab" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-item" style={{ padding: "33px 20px", fontSize: "17px" }}>
                            <div className="img-holder">
                                <div>
                                    <Image src="/assets/images/services/addonservices/git.png" width={50} height={50} alt="RBL_Bank" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Us Section */}
            <FAQSection
                faqs={faqs}
                description="Here are some common questions about our services."
            />
             <WhyUs
            data={whyUsData}
            subHeading="Agency Statistics"
            heading="Why Clients Trust Laxzenix"
            description="A creative digital agency known for strategic thinking, quality execution, and measurable results."
        />
            <ContactSection />
            <BlogSection />

        </>
    )
}
