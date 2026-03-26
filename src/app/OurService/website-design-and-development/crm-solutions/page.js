import ServiceSection from "../../../componets/ServiceSection";
import PageBanner from "../../../componets/PageBanner";
import ProcessSection from "../../../componets/ProcessSection";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import React from "react";
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";

export default function page() {
  const servicesData = [
    {
      title: "Custom CRM Development",
      description:
        "We build tailored CRM solutions to manage your leads, customers, and business processes efficiently.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/crm-development",
      delay: ".3s",
    },
    {
      title: "Lead Management System",
      description:
        "Capture, track, and nurture leads with a centralized system to improve conversion rates.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/lead-management",
      delay: ".5s",
    },
    {
      title: "Sales Automation",
      description:
        "Automate sales workflows, follow-ups, and pipelines to increase team productivity and revenue.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/sales-automation",
      delay: ".7s",
    },
    {
      title: "Customer Data Management",
      description:
        "Store and manage customer information securely with easy access and real-time updates.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/customer-management",
      delay: ".3s",
    },
    {
      title: "CRM Integration",
      description:
        "Integrate CRM with your website, apps, email systems, and third-party tools for seamless operations.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/crm-integration",
      delay: ".5s",
    },
    {
      title: "Support & Maintenance",
      description:
        "Keep your CRM system optimized, secure, and updated with our ongoing support services.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/crm-support",
      delay: ".7s",
    },
  ];

  const processSteps = [
    {
      title: "Requirement Analysis",
      text: "We understand your business processes, workflows, and CRM requirements.",
      img: "/assets/images/services/analytics.png",
    },
    {
      title: "System Design",
      text: "We design a user-friendly CRM interface tailored to your operations.",
      img: "/assets/images/services/database.png",
    },
    {
      title: "Development",
      text: "We build a secure and scalable CRM system with custom features.",
      img: "/assets/images/services/shopping-online.png",
    },
    {
      title: "Testing",
      text: "We ensure the CRM system works smoothly without bugs or performance issues.",
      img: "/assets/images/services/analyzing.png",
    },
    {
      title: "Deployment & Training",
      text: "We deploy the CRM and provide training for your team to use it effectively.",
      img: "/assets/images/services/development-plan.png",
    },
  ];

  const optimizationData = [
    {
      img: "/assets/images/icon/icon-1.png",
      title: "Centralized Data Management",
      desc: "Manage all your customer data, leads, and interactions in one centralized platform for better decision-making.",
    },
    {
      img: "/assets/images/icon/icon-2.png",
      title: "Automation & Efficiency",
      desc: "Automate repetitive tasks like follow-ups, emails, and reporting to save time and increase productivity.",
    },
    {
      img: "/assets/images/icon/icon-3.png",
      title: "Scalable CRM Solutions",
      desc: "Our CRM systems are built to scale with your business, ensuring long-term growth and flexibility.",
    },
  ];

  const faqs = [
    {
      question: "What is a CRM system?",
      answer:
        "A CRM system helps businesses manage customer relationships, track leads, and improve sales processes.",
    },
    {
      question: "Can CRM be customized for my business?",
      answer:
        "Yes, we build fully customized CRM solutions based on your specific business needs.",
    },
    {
      question: "Will CRM integrate with my website or apps?",
      answer:
        "Yes, we provide seamless integration with websites, mobile apps, and third-party tools.",
    },
    {
      question: "Do you provide training and support?",
      answer:
        "Yes, we offer complete training and ongoing support for your CRM system.",
    },
  ];
  return (
    <>
      <PageBanner
        title="Smart CRM Solutions to Grow Your Business"
        image="/assets/images/website/web-banner.jpg"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/services" },
          { label: "CRM Solutions" },
        ]}
      />
      {/* About */}
      <section className="about-area bg-white about-area-v1 position-relative pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-holder-box mb-50">
                <div className="img-holder wow fadeInLeft">
                  <img src="/assets/images/website/crm.jpg" alt="Image" />
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
                  <span className="sub-title st-one">What is CRM?</span>
                  <h2>CRM Solutions</h2>

                  <h4>Manage Customers. Boost Sales. Grow Faster.</h4>

                  <p>
                    CRM (Customer Relationship Management) is a system that
                    helps businesses manage customer interactions, track leads,
                    and streamline sales processes. It centralizes all your
                    customer data, making it easier to improve relationships and
                    increase conversions.
                  </p>

                  <p>
                    In today’s competitive business environment, companies
                    across India—especially in growing markets like Jaipur—use
                    CRM systems to automate workflows, improve customer
                    engagement, and drive revenue growth. A powerful CRM
                    solution ensures better decision-making and long-term
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     {/* CRM Features Section */}
      <section className="features-area pt-125 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <span className="sub-title st-one">Core Features</span>
                <h2>Powerful CRM Features</h2>
                <p>
                  Everything you need to manage customers, automate sales, and
                  grow faster
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              {
                title: "Lead Tracking",
                desc: "Track and manage leads efficiently from first contact to conversion.",
                icon: "📊",
              },
              {
                title: "Sales Pipeline",
                desc: "Visualize and manage your sales stages to close deals faster.",
                icon: "📈",
              },
              {
                title: "Automation Tools",
                desc: "Automate follow-ups, emails, and repetitive tasks effortlessly.",
                icon: "⚙️",
              },
              {
                title: "Real-Time Analytics",
                desc: "Get insights into performance with powerful dashboards and reports.",
                icon: "📉",
              },
              {
                title: "Multi-User Access",
                desc: "Allow teams to collaborate with role-based access control.",
                icon: "👥",
              },
              {
                title: "Cloud-Based System",
                desc: "Access your CRM anytime, anywhere with secure cloud technology.",
                icon: "☁️",
              },
            ].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 bg-[#e2ebf8]">
                <div
                  className="features-item mb-40 wow fadeInUp"
                  data-wow-delay={`${i * 0.1}s`}
                >
                  <div className="icon">
                    <span style={{ fontSize: "32px" }}>{item.icon}</span>
                  </div>
                  <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    

      {/* Tools We Use */}
      <section className="partners-area pt-125 pb-130 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55 wow fadeInUp">
                <h2>Technologies We Use</h2>
                <p>Advanced tools to build powerful CRM systems</p>
              </div>
            </div>
          </div>
          <div className="partners-wrapper wow fadeInUp">
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
              <div className="img-holder">
                <div>
                  <p>Moz Pro</p>
                </div>
              </div>
            </div>
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
              <div className="img-holder">
                <div>
                  <p>Screaming Frog SEO Spider</p>
                </div>
              </div>
            </div>
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
              <div className="img-holder">
                <div>
                  <p>Google Search Console</p>
                </div>
              </div>
            </div>
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
              <div className="img-holder">
                <div>
                  <p>Yoast SEO / RankMath</p>
                </div>
              </div>
            </div>
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
              <div className="img-holder">
                <div>
                  <p>SERPWatcher</p>
                </div>
              </div>
            </div>
            <div
              className="partner-item"
              style={{ padding: "33px 20px", fontSize: "17px" }}
            >
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
          <h2 className="local-seo__title">
            What is Website Design & Development?
          </h2>

          <p className="local-seo__desc">
            Website Design & Development is the process of creating visually
            appealing, responsive, and high-performing websites that help
            businesses establish a strong online presence. It ensures your
            website not only looks great but also functions smoothly to deliver
            the best user experience and drive conversions.
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
  );
}
