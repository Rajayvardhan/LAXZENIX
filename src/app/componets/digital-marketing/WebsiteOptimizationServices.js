import React from "react";

const WebsiteOptimizationServices = () => {
  const services = [
    {
      title: "Speed Optimization",
      icon: "fa-gauge-high",
      isPopular: true,
      description:
        "Boost your site’s loading times with caching, image compression, and code optimisation.",
      features: [
        "Core Web Vitals Optimisation",
        "CDN Setup",
        "Image Compression",
        "Code Minification",
      ],
    },
    {
      title: "SEO Enhancement",
      icon: "fa-magnifying-glass-chart",
      description:
        "Optimize your website to rank higher on Google and attract organic traffic.",
      features: [
        "Technical SEO",
        "Meta Tags & Schema Markup",
        "Site Structure Optimization",
        "Content SEO",
      ],
    },
    {
      title: "Mobile Optimization",
      icon: "fa-mobile-screen",
      description:
        "Ensure your website works perfectly on all devices with responsive design.",
      features: [
        "Responsive Design",
        "Mobile Speed Optimization",
        "Touch-Friendly Navigation",
        "App-Like Experience",
      ],
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      icon: "fa-chart-line",
      isPopular: true,
      description:
        "Turn more visitors into customers with A/B testing and UX improvements.",
      features: [
        "A/B Testing",
        "UX Analysis",
        "Funnel Optimization",
        "CTA Enhancements",
      ],
    },
    {
      title: "Analytics & Performance Tracking",
      icon: "fa-chart-pie",
      description:
        "Measure performance with analytics and data insights.",
      features: [
        "Google Analytics Setup",
        "Heat Mapping",
        "User Behavior Tracking",
        "Performance Reports",
      ],
    },
    {
      title: "Technical Optimization",
      icon: "fa-shield-halved",
      description:
        "Ensure your website is secure, fast, and scalable.",
      features: [
        "Code Cleanup",
        "Database Optimization",
        "Security Enhancements",
        "Continuous Monitoring",
      ],
    },
  ];

  return (
    <section className="web-services py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-start mb-5">
          <h2 className="main-heading">
            Our <span>Website Optimization Services</span>
          </h2>
          <p className="desc w-75">
            At Sevenunique, we help businesses transform their websites into powerful growth engines with speed, SEO, mobile experience, and conversion optimization.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="service-card h-100">

                {service.isPopular && (
                  <span className="badge-popular">Popular</span>
                )}

                {/* Icon */}
                <div className="Webicon-box">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>

                <h5>{service.title}</h5>
                <p className="card-desc">{service.description}</p>

                <ul>
                  {service.features.map((item, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-check"></i> {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebsiteOptimizationServices;