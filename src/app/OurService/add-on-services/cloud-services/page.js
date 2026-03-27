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
      title: "Cloud Infrastructure Setup",
      description:
        "We design and deploy scalable cloud infrastructure tailored to your business needs for maximum performance and reliability.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/cloud-infrastructure",
      delay: ".3s",
    },
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your applications, data, and systems to the cloud with zero downtime and full security.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/cloud-migration",
      delay: ".5s",
    },
    {
      title: "Cloud Security",
      description:
        "Protect your cloud environment with advanced security solutions including firewalls, encryption, and monitoring.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/cloud-security",
      delay: ".7s",
    },
    {
      title: "Cloud Storage Solutions",
      description:
        "Store, manage, and access your data securely with flexible and scalable cloud storage systems.",
      icon: "/assets/image/strategy-icon.jpg",
      link: "/OurService/tech/cloud-storage",
      delay: ".3s",
    },
    {
      title: "DevOps & Automation",
      description:
        "Streamline deployment processes with CI/CD pipelines and automation tools for faster delivery.",
      icon: "/assets/image/product-design-icon.png",
      link: "/OurService/tech/devops",
      delay: ".5s",
    },
    {
      title: "Monitoring & Support",
      description:
        "24/7 monitoring, maintenance, and optimization to ensure your cloud systems run smoothly without downtime.",
      icon: "/assets/image/dev-icon.png",
      link: "/OurService/tech/cloud-support",
      delay: ".7s",
    },
  ];
  const processSteps = [
    {
      title: "Assessment & Planning",
      text: "We analyze your current infrastructure and define a cloud strategy based on your business requirements.",
      img: "/assets/images/services/analytics.png",
    },
    {
      title: "Architecture Design",
      text: "We design a secure, scalable, and high-performance cloud architecture.",
      img: "/assets/images/services/database.png",
    },
    {
      title: "Implementation",
      text: "We deploy cloud infrastructure, applications, and services using best practices.",
      img: "/assets/images/services/shopping-online.png",
    },
    {
      title: "Monitoring",
      text: "We continuously monitor performance, uptime, and security of your cloud environment.",
      img: "/assets/images/services/analyzing.png",
    },
    {
      title: "Optimization",
      text: "We optimize resources, cost, and performance to ensure maximum efficiency and scalability.",
      img: "/assets/images/services/development-plan.png",
    },
  ];
  const optimizationData = [
    {
      img: "/assets/images/icon/icon-1.png",
      title: "Scalable Infrastructure",
      desc: "Our cloud solutions scale with your business, allowing you to handle growth without performance issues or infrastructure limitations.",
    },
    {
      img: "/assets/images/icon/icon-2.png",
      title: "High Security Standards",
      desc: "We implement advanced security measures including encryption, firewalls, and real-time monitoring to keep your data safe.",
    },
    {
      img: "/assets/images/icon/icon-3.png",
      title: "Cost Efficiency",
      desc: "Reduce operational costs with pay-as-you-go models and optimized resource usage in the cloud environment.",
    },
  ];
  const faqs = [
    {
      question: "What are cloud services?",
      answer:
        "Cloud services provide computing resources like servers, storage, and applications over the internet instead of local systems.",
    },
    {
      question: "Is cloud computing secure?",
      answer:
        "Yes, with proper configurations, cloud platforms offer high-level security including encryption, access control, and monitoring.",
    },
    {
      question: "Can you migrate my existing system to the cloud?",
      answer:
        "Yes, we provide seamless cloud migration services with minimal downtime and complete data security.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer 24/7 monitoring, maintenance, and technical support for all cloud solutions.",
    },
  ];
  return (
    <>
     <PageBanner
  title="Scalable Cloud Services for Modern Businesses"
  image="/assets/images/website/cloud.jpg"
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Tech Services", link: "/OurService/tech" },
    {
      label: "Cloud Services",
      link: "/OurService/tech/cloud-services",
    },
  ]}
/>

     <ServiceSection
  containerclass="container"
  colClass="col-lg-4 col-md-6"
  title="Our Cloud Services"
  subtitle="Services"
  description="We provide secure, scalable, and high-performance cloud solutions to help businesses grow efficiently."
  services={servicesData}
/>
      {/* Process */}
     <ProcessSection
  subtitle="Our Process"
  title="At Sevenunique, we follow a structured cloud implementation process."
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
              Benefits of Cloud Services
            </span>
            <h2>Benefits of Cloud Services</h2>
          </div>
          <ul className="list-style-one mb-35">
            <li>Scalable Infrastructure to grow with your business needs.</li>
            <li>High Availability & Uptime ensuring uninterrupted operations.</li>
            <li>Cost Efficiency with pay-as-you-go pricing models.</li>
            <li>Advanced Security with encryption and monitoring.</li>
            <li>Remote Accessibility from anywhere, anytime.</li>
            <li>Automatic Backups & Disaster Recovery solutions.</li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="row">

          <div className="col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-30">
              <div className="icon">
               <LuBadgeCheck size={40}/>

              </div>
              <div className="text">
                <h3 style={{ fontSize: "18px" }}>
                  99.9% Uptime Guarantee
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
                  Enterprise-Level Security
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
                  High-Speed Performance
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
                  24/7 Technical Support
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
      <h2>Cloud Platforms We Use</h2>
      <p>We leverage industry-leading cloud technologies</p>
    </div>

    <div className="partners-wrapper">

      <div className="partner-item"><p>AWS (Amazon Web Services)</p></div>
      <div className="partner-item"><p>Microsoft Azure</p></div>
      <div className="partner-item"><p>Google Cloud Platform</p></div>
      <div className="partner-item"><p>Docker</p></div>
      <div className="partner-item"><p>Kubernetes</p></div>
      <div className="partner-item"><p>Firebase</p></div>

    </div>
  </div>
</section>
    <Optimization
  services={optimizationData}
  subtitle="Cloud Services"
  title="Cloud Solutions That Drive Performance & Growth"
/>
     <FAQSection
  faqs={faqs}
  description="Here are some common questions about our cloud services."
/>
    </>
  );
}
