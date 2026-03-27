import React from "react";
import PageBanner from "../../../componets/PageBanner";
import LinkBuildingSection from "../../../componets/digital-marketing/LinkBuildingSection";
import ProcessSection from "../../../componets/ProcessSection";
import WhyChooseUs from "../../../componets/WhyChooseUs";
import StepsOne from "../../../componets/digital-marketing/StepsOne";
import LinkBenefits from "../../../componets/digital-marketing/LinkBenefits";
import LinkUs from "../../../componets/digital-marketing/LinkUs";
import FAQSection from "../../../componets/Faq";
import ContactSection from "../../../componets/HomeCom/ContactSection";
import BlogSection from "../../../componets/HomeCom/BlogSection";

export default function page() {
  const processSteps = [
    {
      title: "Website Audit & Analysis",
      text: "We evaluate your current website’s design, performance, UX, and identify areas for improvement.",
      img: "/assets/images/services/analytics.png",
    },
    {
      title: "Strategy & Planning",
      text: "We create a redesign strategy focused on improving user experience, performance, and business goals.",
      img: "/assets/images/services/database.png",
    },
    {
      title: "UI/UX Redesign",
      text: "We design modern, visually appealing, and user-friendly interfaces that enhance engagement and conversions.",
      img: "/assets/images/services/shopping-online.png",
    },
    {
      title: "Development & Optimization",
      text: "We rebuild your website with clean code, fast performance, mobile responsiveness, and SEO optimization.",
      img: "/assets/images/website/analyzing.png",
    },
    {
      title: "Launch & Ongoing Support",
      text: "We deploy your redesigned website smoothly and provide continuous updates, monitoring, and support.",
      img: "/assets/images/services/development-plan.png",
    },
  ];
  const stepsData = [
    {
      title: "Startups & Small Businesses",
      desc: "Refresh your website with a modern design to attract more customers and build a strong online presence.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Improve user experience, navigation, and checkout flow to increase conversions and sales.",
    },
    {
      title: "Corporate Websites",
      desc: "Upgrade outdated designs with a professional, responsive, and brand-aligned website experience.",
    },
    {
      title: "Bloggers & Personal Brands",
      desc: "Enhance your personal brand with a visually appealing and easy-to-manage website redesign.",
    },
    {
      title: "Agencies & Businesses",
      desc: "Showcase your services with a high-performing, modern, and conversion-focused website.",
    },
    {
      title: "Educational Platforms",
      desc: "Improve accessibility, user engagement, and performance for e-learning platforms and portals.",
    },
  ];
  const faqs = [
    {
      question: "What is website redesign?",
      answer:
        "Website redesign is the process of improving your website’s design, structure, performance, and user experience to make it more effective.",
    },
    {
      question: "Why should I redesign my website?",
      answer:
        "A redesign helps improve user experience, increase conversions, enhance performance, and keep your website modern and competitive.",
    },
    {
      question: "Will my website be SEO-friendly after redesign?",
      answer:
        "Yes, we ensure your redesigned website is optimized for search engines with proper structure, speed, and content.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing support, maintenance, and updates to keep your website running smoothly.",
    },
  ];
  return (
    <>
   <PageBanner
  title="Transform Your Website with Modern Redesign Solutions"
  image="/assets/images/website/redesign.png"
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Tech Services", link: "/OurService/tech" },
    {
      label: "Website Redesign",
      link: "/OurService/tech/website-redesign",
    },
  ]}
/>

    <ProcessSection
  subtitle="Our Process"
  title="At Sevenunique, we follow a strategic approach to website redesign."
  steps={processSteps}
/>
      {/* Whuy Choose Us */}
    <WhyChooseUs
  image="/Digital/digi-1.png"
  title="Why"
  highlight="Choose Us"
  upperdescription="Creative, performance-driven redesign solutions"
  description="We specialize in transforming outdated websites into modern, high-performing digital experiences. Our redesign approach focuses on user experience, speed, responsiveness, and conversion optimization to help your business grow online."
  points={[
    { text: "Modern, user-friendly, and visually appealing designs" },
    { text: "Mobile-responsive and SEO-optimized websites", wide: true },
    { text: "Improved speed and performance optimization" },
    { text: "Conversion-focused UI/UX for better engagement" },
    {
      text: "Ongoing support, updates, and scalability",
      wide: true,
    },
  ]}
/>

    <FAQSection
  faqs={faqs}
  description="Here are some common questions about our website redesign services."
/>
      <ContactSection />
      <BlogSection />
    </>
  );
}
