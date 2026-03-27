import React from "react";
import ServiceSection from "../../../componets/ServiceSection";
import PageBanner from "../../../componets/PageBanner";
import ProcessSection from "../../../componets/ProcessSection";
import Optimization from "../../../componets/digital-marketing/optimization";
import FAQSection from "../../../componets/Faq";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";

import { MdSpeed } from "react-icons/md";

export default function page() {
  const servicesData = [
    {
      title: "IT Strategy & Consulting",
      description:
        "We help businesses define a clear IT strategy aligned with their goals to improve efficiency, scalability, and digital transformation.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/it-consulting",
      delay: ".3s",
    },
    {
      title: "Technology Advisory",
      description:
        "Get expert guidance on selecting the right technologies, tools, and platforms to enhance your business operations.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/technology-advisory",
      delay: ".5s",
    },
    {
      title: "IT Infrastructure Consulting",
      description:
        "We design and optimize your IT infrastructure to ensure high performance, reliability, and scalability.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/it-infrastructure",
      delay: ".7s",
    },
    {
      title: "Digital Transformation",
      description:
        "Transform your business with modern digital solutions, automation, and innovative technologies.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/digital-transformation",
      delay: ".3s",
    },
    {
      title: "Risk & Compliance Consulting",
      description:
        "Identify risks and ensure compliance with industry standards to keep your business secure and legally aligned.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/risk-compliance",
      delay: ".5s",
    },
    {
      title: "Ongoing IT Support & Consulting",
      description:
        "Continuous consulting and support to optimize performance, resolve issues, and guide future technology decisions.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/it-support",
      delay: ".7s",
    },
  ];
  const processSteps = [
    {
      title: "Business Analysis",
      text: "We understand your business goals, challenges, and current IT setup to identify gaps and opportunities.",
      img: "/assets/images/services/analytics.png",
    },
    {
      title: "Strategy Development",
      text: "We create a customized IT strategy aligned with your long-term business objectives.",
      img: "/assets/images/services/database.png",
    },
    {
      title: "Solution Design",
      text: "We recommend and design the right technology solutions to improve efficiency and performance.",
      img: "/assets/images/services/shopping-online.png",
    },
    {
      title: "Implementation Guidance",
      text: "We assist in implementing the solutions with best practices and minimal disruption.",
      img: "/assets/images/services/analyzing.png",
    },
    {
      title: "Continuous Improvement",
      text: "We continuously evaluate and optimize your IT systems to ensure long-term growth and success.",
      img: "/assets/images/services/development-plan.png",
    },
  ];
  const optimizationData = [
    {
      img: "/assets/images/icon/icon-1.png",
      title: "Expert Guidance",
      desc: "Our experienced consultants provide strategic insights to help you make informed technology decisions.",
    },
    {
      img: "/assets/images/icon/icon-2.png",
      title: "Business-Focused Solutions",
      desc: "We align IT solutions with your business goals to maximize efficiency, productivity, and ROI.",
    },
    {
      img: "/assets/images/icon/icon-3.png",
      title: "Future-Ready Technology",
      desc: "We help you adopt modern, scalable, and future-proof technologies to stay ahead in a competitive market.",
    },
  ];
  const faqs = [
    {
      question: "What is IT consulting?",
      answer:
        "IT consulting involves providing expert advice to help businesses use technology effectively to achieve their goals.",
    },
    {
      question: "Why does my business need IT consulting?",
      answer:
        "IT consulting helps improve efficiency, reduce costs, enhance security, and ensure your technology aligns with business objectives.",
    },
    {
      question: "Do you help with digital transformation?",
      answer:
        "Yes, we guide businesses through digital transformation by implementing modern tools, automation, and scalable solutions.",
    },
    {
      question: "Do you provide ongoing consulting support?",
      answer:
        "Yes, we offer continuous consulting and support to help your business adapt and grow with evolving technologies.",
    },
  ];
  return (
    <>
     <PageBanner
  title="Expert IT Consulting for Smarter Business Decisions"
  image="/assets/images/website/it-consulting.jpg"
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Tech Services", link: "/OurService/tech" },
    {
      label: "IT Consulting",
      link: "/OurService/tech/it-consulting",
    },
  ]}
/>

   <ServiceSection
  containerclass="container"
  colClass="col-lg-4 col-md-6"
  title="Our IT Consulting Services"
  subtitle="Services"
  description="We provide strategic IT consulting services to help businesses leverage technology for growth, efficiency, and innovation."
  services={servicesData}
/>
      {/* Process */}
    <ProcessSection
  subtitle="Our Process"
  title="At Sevenunique, we follow a strategic IT consulting approach."
  steps={processSteps}
/>
      {/* Industries we serve */}
    <section className="fancy-text-block light-gray-bg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="text-wrapper mb-40 fadeInLeft">
          <div className="section-title mb-25">
            <span className="sub-title st-one">
              Benefits of IT Consulting
            </span>
            <h2>Benefits of IT Consulting</h2>
          </div>
          <ul className="list-style-one mb-35">
            <li>
              Strategic IT Planning aligned with your business goals.
            </li>
            <li>
              Improved Efficiency through optimized processes and systems.
            </li>
            <li>
              Cost Reduction by eliminating unnecessary technology expenses.
            </li>
            <li>
              Enhanced Security and risk management strategies.
            </li>
            <li>
              Access to Expert Knowledge and industry best practices.
            </li>
            <li>
              Scalable Solutions that grow with your business.
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-30">
              <div className="icon">
                <LuBadgeCheck size={40} />
              </div>
              <div className="text">
                <h3 style={{ fontSize: "18px" }}>
                  Proven Industry Expertise
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-30">
              <div className="icon">
                <MdOutlineSecurity size={40} />
              </div>
              <div className="text">
                <h3 style={{ fontSize: "18px" }}>
                  Secure & Reliable Solutions
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-30">
              <div className="icon">
                <MdSpeed size={40} />
              </div>
              <div className="text">
                <h3 style={{ fontSize: "18px" }}>
                  Optimized Performance
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-30">
              <div className="icon">
                <MdSupportAgent size={40} />
              </div>
              <div className="text">
                <h3 style={{ fontSize: "18px" }}>
                  Ongoing Expert Support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Tools We Use */}
   <section className="partners-area pt-125 pb-130 bg-white">
  <div className="container">
    <div className="section-title text-center mb-55">
      <h2>Technologies We Work With</h2>
      <p>We provide consulting across modern tools and platforms</p>
    </div>

    <div className="partners-wrapper">
      <div className="partner-item">
        <p>Cloud Platforms (AWS, Azure, GCP)</p>
      </div>
      <div className="partner-item">
        <p>Web & Mobile Technologies</p>
      </div>
      <div className="partner-item">
        <p>DevOps & Automation Tools</p>
      </div>
      <div className="partner-item">
        <p>Database Management Systems</p>
      </div>
      <div className="partner-item">
        <p>Cybersecurity Solutions</p>
      </div>
      <div className="partner-item">
        <p>AI & Emerging Technologies</p>
      </div>
    </div>
  </div>
</section>
    <Optimization
  services={optimizationData}
  subtitle="IT Consulting"
  title="IT Strategies That Drive Business Growth"
/>
    <FAQSection
  faqs={faqs}
  description="Here are some common questions about our IT consulting services."
/>
    </>
  );
}
