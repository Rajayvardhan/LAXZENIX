"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };
  const servicesData = [
    {
      title: "Digital Marketing Services",
      link: "/OurService/digital-marketing",
      items: [
        { name: "SEO", link: "/OurService/digital-marketing/seo" },
        { name: "Social Media Optimization", link: "/OurService/digital-marketing/smo" },
        { name: "Local SEO OurService", link: "/OurService/digital-marketing/local-seo-services" },
        { name: "Content Marketing OurService", link: "/OurService/digital-marketing/content-marketing-services" },
        { name: "Website Optimization", link: "/OurService/digital-marketing/website-optimization" },
        { name: "Link Building OurService", link: "/OurService/digital-marketing/link-building-services" },
      ],
    },
    {
      title: "API OurService",
      link: "/Ourservice/api",
      items: [
        { name: "API Development", link: "/Ourservice/api/api-development" },
        { name: "API Integration", link: "/Ourservice/api/api-integration" },
      ],
    },
    {
      title: "Website Design And Development",
      link: "/OurService/website-design-and-development",
      items: [
        { name: "Modern & Responsive Website Design", link: "/OurService/website-design-and-development/web-design" },
        { name: "E-Commerce Website Development", link: "/OurService/website-design-and-development/ecommerce-development" },
        { name: "Custom CRM Solutions", link: "/OurService/website-design-and-development/crm-solutions" },
        { name: "On Demand Software", link: "/OurService/website-design-and-development/software-development" },
      ],
    },
    {
      title: "Performance Marketing",
      link: "/OurService/performance-marketing",
      items: [
        // { name: "Performance Marketing", link: "/OurService/performance-marketing" },
      ],
    },
    {
      title: "Fintech Solutions",
      link: "/OurService/fintech-solutions",
      items: [
        { name: "Digital Banking Solutions", link: "/OurService/fintech-solutions/digital-banking-solution" },
        { name: "Payment Gateway Integration", link: "/OurService/fintech-solutions/payment-gateway-integration" },
        { name: "Wallet & UPI Integration", link: "/OurService/fintech-solutions/wallet-and-upi-integration" },
        { name: "Fraud Detection & Risk Management", link: "/OurService/fintech-solutions/fraud-detection-and-risk-management" },
        { name: "KYC & Compliance Solutions", link: "/OurService/fintech-solutions/kyc-compliance-solution" },
      ],
    },
    {
      title: "Mobile Application",
      link: "/OurService/mobile-application",
      items: [
        // { name: "Mobile App Development", link: "/OurService/mobile-app-development" },
      ],
    },
    {
      title: "Add On Service",
      link: "/OurService/add-on-services",
      items: [
        { name: "Domain & Hosting Services", link: "/OurService/add-on-services/domain-hosting" },
        { name: "Cloud Services (AWS)", link: "/OurService/add-on-services/cloud-services" },
        { name: "Maintenance & Support", link: "/OurService/add-on-services/maintenance-support" },
        { name: "IT Consulting", link: "/OurService/add-on-services/it-consulting" },
        { name: "Website Redesigning", link: "/OurService/add-on-services/website-redesign" },
        { name: "Website Maintenance", link: "/OurService/add-on-services/website-maintenance" },
      ],
    },
  ];
  const chunkedServices = [
    servicesData.slice(0, 2),
    servicesData.slice(2, 4),
    servicesData.slice(4, 6),
    servicesData.slice(6),
  ];

  return (
    <>
      {/* ========== PAGE ONLY RESPONSIVE CSS ========== */}
      <style>{`
        /* ---------- MOBILE TOGGLE ---------- */
        .rh-toggle {
          display: none;
          font-size: 30px;
          cursor: pointer;
          user-select: none;
        }

        /* ---------- MOBILE MODE ---------- */
        @media (max-width: 991px) {

          .rh-toggle {
            display: block;
          }

          .site-header-inner {
            grid-template-columns: auto auto;
          }

          .site-nav.rh-mobile {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: #fff;
            padding: 90px 22px 30px;
            box-shadow: -10px 0 30px rgba(0,0,0,0.12);
            transition: 0.35s ease;
            z-index: 99999;
          }

          .site-nav.rh-mobile.rh-open {
            right: 0;
          }

          .site-menu {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .site-menu li {
            width: 100%;
            border-bottom: 1px solid #eee;
          }

          .site-menu > li > a {
            width: 100%;
            padding: 14px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* kill hover dropdown */
          .has-dropdown:hover > .submenu {
            opacity: 0;
            visibility: hidden;
          }

          /* mobile dropdown */
          .rh-sub {
            display: none;
            position: static;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            box-shadow: none;
            background: transparent;
            padding-left: 12px;
          }

          .rh-sub.rh-show {
            display: block;
          }
        }
      `}</style>

      {/* ========== HEADER ========== */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">

          {/* Logo */}
          <Link href="/" className="brand-box">
            <img src="/assets/images/logo/lax-logo.png" alt="Logo" />
          </Link>

          {/* Mobile toggle */}
          <div className="rh-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </div>

          {/* Nav */}
          <nav className={`site-nav rh-mobile ${mobileOpen ? "rh-open" : ""}`}>
            <ul className="site-menu">

              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">About Us</a></li>

              {/* Services */}
              <li className="has-dropdown mega-parent">
                <a onClick={() => toggleMenu("services")}>
                  Services ▾
                </a>

                <div
                  className={`mega-menu ${openMenu === "services" ? "rh-show" : ""
                    }`}
                >
                  <div className="mega-grid">
                    {chunkedServices.map((column, colIndex) => (
                      <div className="mega-col" key={colIndex}>
                        {column.map((section, secIndex) => (
                          <div key={secIndex}>
                            <h6 className={secIndex !== 0 ? "mt-4" : ""}>
                              <Link href={section.link}>
                                {section.title}
                              </Link>
                            </h6>

                            <ul>
                              {section.items.map((item, i) => (
                                <li key={i}>
                                  <Link href={item.link}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Portfolio */}
              <li className="has-dropdown">
                <a onClick={() => toggleMenu("portfolio")}>Portfolio ▾</a>
                <ul className={`submenu rh-sub ${openMenu === "portfolio" ? "rh-show" : ""}`}>
                  <li><a href="/Our_profolio">Our Portfolio</a></li>
                  <li><a href="/Project_details">Project Details</a></li>
                </ul>
              </li>

              {/* Blog */}
              <li className="has-dropdown">
                <a onClick={() => toggleMenu("blog")}>Blog ▾</a>
                <ul className={`submenu rh-sub ${openMenu === "blog" ? "rh-show" : ""}`}>
                  <li><a href="/Our_blog">Our Blog</a></li>
                  <li><a href="/Blog_details">Blog Details</a></li>
                </ul>
              </li>

              <li><a href="/contactUs">Contact</a></li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
