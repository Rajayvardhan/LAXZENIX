"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const servicesData = [
  {
    title: "Digital Marketing Services",
    link: "/OurService/digital-marketing",
    icon: "📈",
    items: [
      { name: "SEO", link: "/OurService/digital-marketing/seo" },
      { name: "Social Media Optimization", link: "/OurService/digital-marketing/social-media-optimization" },
      { name: "Local SEO OurService", link: "/OurService/digital-marketing/local-seo-services" },
      { name: "Content Marketing OurService", link: "/OurService/digital-marketing/content-marketing-services" },
      { name: "Website Optimization", link: "/OurService/digital-marketing/website-optimization" },
      { name: "Link Building OurService", link: "/OurService/digital-marketing/link-building-services" },
    ],
  },
  {
    title: "API OurService",
    link: "/Ourservice/api",
    icon: "🔌",
    items: [
      { name: "API Development", link: "/Ourservice/api/api-development" },
      { name: "API Integration", link: "/Ourservice/api/api-integration" },
    ],
  },
  {
    title: "Website Design And Development",
    link: "/OurService/website-design-and-development",
    icon: "🖥️",
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
    icon: "🚀",
    items: [],
  },
  {
    title: "Finunique Solutions",
    link: "/OurService/Finunique-solutions",
    icon: "💳",
    items: [
      { name: "Digital Banking Solutions", link: "/OurService/Finunique-solutions/digital-banking-solution" },
      { name: "Payment Gateway Integration", link: "/OurService/Finunique-solutions/payment-gateway-integration" },
      { name: "Wallet & UPI Integration", link: "/OurService/Finunique-solutions/wallet-and-upi-integration" },
      { name: "Fraud Detection & Risk Management", link: "/OurService/Finunique-solutions/fraud-detection-and-risk-management" },
      { name: "KYC & Compliance Solutions", link: "/OurService/Finunique-solutions/kyc-compliance-solution" },
    ],
  },
  {
    title: "Mobile Application",
    link: "/OurService/mobile-application",
    icon: "📱",
    items: [],
  },
  {
    title: "Add On Service",
    link: "/OurService/add-on-services",
    icon: "⚙️",
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileExpandedService, setMobileExpandedService] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMenu = (name) => setOpenMenu(openMenu === name ? null : name);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --hdr-bg: rgba(4, 8, 20, 0.96);
          --hdr-scrolled: #fefffffa;
          --accent: #00f0ff;
          --accent2: #7b61ff;
          --text-main: #f0f4ff;
          --text-muted: #8a94b0;
          --border: rgba(255,255,255,0.07);
          --mega-bg: #ffffff;
          --font-head: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        /* ===== BASE ===== */
        body {
          padding-top: 80px;
        }
        .hero-section, 
          main {
            margin-top: 80px;
          }
        .lax-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .lax-header.scrolled {
          background: var(--hdr-scrolled);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }

        /* top ticker bar */
        .lax-topbar {
          background: linear-gradient(90deg, var(--accent2), var(--accent));
          height: 2px;
          width: 100%;
        }

        .lax-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          font-family: var(--font-body);
        }

        /* ===== LOGO ===== */
        .lax-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .lax-logo img {
          height: 38px;
          width: auto;
          object-fit: contain;
          filter: brightness(1.1);
        }

        /* ===== DESKTOP NAV ===== */
        .lax-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .lax-nav > li {
          position: relative;
        }
        .lax-nav > li > a,
        .lax-nav > li > button {
          font-family: var(--font-head);
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .lax-nav > li > a:hover,
        .lax-nav > li > button:hover,
        .lax-nav > li.active > a {
          color: #000 !important;
          background: rgba(255,255,255,0.05);
        }
        .lax-nav > li > a.active-link {
          color: var(--accent);
        }

        /* chevron icon */
        .lax-chev {
          display: inline-block;
          font-size: 10px;
          transition: transform 0.25s;
          opacity: 0.6;
        }
        .lax-nav > li:hover .lax-chev,
        .lax-chev.open {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* ===== SIMPLE DROPDOWN ===== */
        .lax-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          background: var(--mega-bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          min-width: 200px;
          padding: 8px;
          list-style: none;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        }
        .lax-nav > li:hover .lax-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .lax-dropdown li a {
          display: block;
          padding: 9px 14px;
          border-radius: 8px;
          color: var(--text-muted);
          font-size: 13px;
          text-decoration: none;
          font-family: var(--font-body);
          transition: all 0.2s;
        }
        .lax-dropdown li a:hover {
          color: var(--accent);
          background: rgba(0,240,255,0.06);
          padding-left: 18px;
        }

        /* ===== MEGA MENU ===== */
        .lax-mega-wrap {
          position: fixed;
          top: 66px;
          left: 0; right: 0;
          z-index: 9998;
          display: flex;
          justify-content: center;
          padding: 0 24px;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.28s cubic-bezier(0.4,0,0.2,1);
          transform: translateY(10px);
        }
        .lax-mega-parent:hover .lax-mega-wrap {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          transform: translateY(0);
        }
        .lax-mega-box {
          max-width: 1100px;
          width: 100%;
          background: var(--mega-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 0px 11px 0 rgb(144 142 246);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .lax-mega-col h6 {
          font-family: var(--font-head);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          margin: 0 0 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }
        .lax-mega-col h6 a {
          color: inherit;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .lax-mega-col h6 a:hover { opacity: 0.7; }
        .lax-mega-col h6.mt { margin-top: 20px; }
        .lax-mega-col ul {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .lax-mega-col ul li a {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 7px;
          color: var(--text-muted);
          font-size: 13px;
          font-family: var(--font-body);
          text-decoration: none;
          transition: all 0.2s;
        }
        .lax-mega-col ul li a::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--accent2);
          flex-shrink: 0;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .lax-mega-col ul li a:hover {
          color: #000 !important;
          background: rgba(255,255,255,0.04);
        }
        .lax-mega-col ul li a:hover::before { opacity: 1; }

        /* ===== CTA BUTTON ===== */
        .lax-cta {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lax-btn {
          font-family: var(--font-head);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 10px 22px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .lax-btn-outline {
          color: black !important;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .lax-btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .lax-btn-solid {
          background: linear-gradient(135deg, var(--accent2), var(--accent));
          color: #fff;
          box-shadow: 0 4px 20px rgba(0,240,255,0.2);
        }
        .lax-btn-solid:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(0,240,255,0.35);
        }

        /* ===== HAMBURGER ===== */
        .lax-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          transition: background 0.2s;
          z-index: 10001;
          flex-shrink: 0;
        }
        .lax-hamburger:hover { background: rgba(255,255,255,0.1); }
        .lax-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-main);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .lax-hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .lax-hamburger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .lax-hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ===== MOBILE OVERLAY ===== */
        .lax-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 9997;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .lax-overlay.show {
          opacity: 1;
        }

        /* ===== MOBILE DRAWER ===== */
        .lax-mobile-nav {
          position: fixed;
          top: 0; right: 0;
          width: 320px;
          max-width: 100vw;
          height: 100vh;
          background: var(--mega-bg);
          border-left: 1px solid var(--border);
          z-index: 9998;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .lax-mobile-nav.is-open {
          transform: translateX(0);
        }
        .lax-mob-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .lax-mob-head .lax-logo img { height: 32px; }
        .lax-mob-close {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          color: var(--text-main);
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .lax-mob-close:hover {
          background: rgba(255,0,80,0.12);
          border-color: rgba(255,0,80,0.3);
          color: #ff4060;
        }
        .lax-mob-body {
          overflow-y: auto;
          flex: 1;
          padding: 12px 0;
        }
        .lax-mob-body::-webkit-scrollbar { width: 3px; }
        .lax-mob-body::-webkit-scrollbar-track { background: transparent; }
        .lax-mob-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .lax-mob-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 24px;
          color: var(--text-muted);
          text-decoration: none;
          font-family: var(--font-head);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.03em;
          transition: all 0.2s;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
        }
        .lax-mob-link:hover,
        .lax-mob-link.active {
          color: var(--text-main);
          background: rgba(255,255,255,0.03);
        }
        .lax-mob-link .mob-chev {
          font-size: 11px;
          transition: transform 0.25s;
          opacity: 0.5;
        }
        .lax-mob-link .mob-chev.open { transform: rotate(180deg); opacity: 1; }

        /* Mobile simple submenu */
        .lax-mob-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
          background: rgba(255,255,255,0.02);
          border-top: 1px solid transparent;
          border-bottom: 1px solid transparent;
        }
        .lax-mob-sub.open {
          max-height: 300px;
          border-color: var(--border);
        }
        .lax-mob-sub a {
          display: block;
          padding: 10px 24px 10px 38px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 13px;
          text-decoration: none;
          transition: all 0.2s;
          position: relative;
        }
        .lax-mob-sub a::before {
          content: '›';
          position: absolute;
          left: 24px;
          color: var(--accent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .lax-mob-sub a:hover {
          color: var(--text-main);
          padding-left: 44px;
        }
        .lax-mob-sub a:hover::before { opacity: 1; }

        /* Mobile Services Accordion */
        .lax-mob-services {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s cubic-bezier(0.4,0,0.2,1);
        }
        .lax-mob-services.open {
          max-height: 1200px;
        }
        .lax-mob-svc-item {
          border-top: 1px solid var(--border);
        }
        .lax-mob-svc-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 24px 11px 36px;
          color: var(--accent);
          font-family: var(--font-head);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          transition: background 0.2s;
        }
        .lax-mob-svc-title a {
          color: inherit;
          text-decoration: none;
          flex: 1;
        }
        .lax-mob-svc-title:hover { background: rgba(0,240,255,0.04); }
        .lax-mob-svc-links {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }
        .lax-mob-svc-links.open { max-height: 400px; }
        .lax-mob-svc-links a {
          display: block;
          padding: 9px 24px 9px 48px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 12.5px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .lax-mob-svc-links a:hover { color: var(--text-main); }

        /* Mobile Footer CTA */
        .lax-mob-footer {
          padding: 16px 24px 24px;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }
        .lax-mob-footer .lax-btn-solid {
          width: 100%;
          justify-content: center;
          padding: 13px;
          font-size: 14px;
          border-radius: 12px;
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */
        @media (max-width: 1024px) {
          .lax-nav, .lax-cta .lax-btn-outline {
            display: none;
          }
          .lax-hamburger {
            display: flex;
          }
          .lax-overlay {
            display: block;
          }
        }

        @media (min-width: 1025px) {
          .lax-mobile-nav,
          .lax-overlay {
            display: none !important;
          }
        }

        /* Active glow dot */
        .lax-nav > li.current > a {
          color: var(--accent);
        }
        .lax-nav > li.current > a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
      `}</style>

      {/* Top accent bar */}
      <div className="lax-topbar" />

      {/* ===== HEADER ===== */}
      <header className={`lax-header ${scrolled ? "scrolled" : ""}`}>
        <div className="lax-inner">

          {/* Logo */}
          <Link href="/" className="lax-logo">
            <img src="/assets/images/logo/lax-logo.png" alt="Logo" />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <ul className="lax-nav">
            <li><Link href="/" className="lax-nav-link">Home</Link></li>
            <li><Link href="/AboutUs" className="lax-nav-link">About Us</Link></li>

            {/* Services Mega */}
            <li className="lax-mega-parent">
              <button>
                Services <span className="lax-chev">▾</span>
              </button>
              <div className="lax-mega-wrap">
                <div className="lax-mega-box">
                  {chunkedServices.map((column, colIndex) => (
                    <div className="lax-mega-col" key={colIndex}>
                      {column.map((section, secIndex) => (
                        <div key={secIndex}>
                          <h6 className={secIndex !== 0 ? "mt" : ""}>
                            <Link href={section.link}>
                              {section.icon} {section.title}
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
            <li className="has-dd">
              <button>
                Portfolio <span className="lax-chev">▾</span>
              </button>
              <ul className="lax-dropdown">
                <li><Link href="/Our_profolio">Our Portfolio</Link></li>
                <li><Link href="/Project_details">Project Details</Link></li>
              </ul>
            </li>

            {/* Blog */}
            <li className="has-dd">
              <button>
                Blog <span className="lax-chev">▾</span>
              </button>
              <ul className="lax-dropdown">
                <li><Link href="/Our_blog">Our Blog</Link></li>
                <li><Link href="/Blog_details">Blog Details</Link></li>
              </ul>
            </li>

            <li><Link href="/contactUs">Contact</Link></li>
          </ul>

          {/* Hamburger */}
          <div
            className={`lax-hamburger ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`lax-overlay ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ===== MOBILE DRAWER ===== */}
      <nav ref={navRef} className={`lax-mobile-nav ${mobileOpen ? "is-open" : ""}`}>
        {/* Header */}
        <div className="lax-mob-head">
          <Link href="/" className="lax-logo" onClick={() => setMobileOpen(false)}>
            <img src="/assets/images/logo/lax-logo.png" alt="Logo" />
          </Link>
          <button className="lax-mob-close" onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        {/* Body */}
        <div className="lax-mob-body">
          <Link href="/" className="lax-mob-link" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/AboutUs" className="lax-mob-link" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>

          {/* Services accordion */}
          <button
            className={`lax-mob-link ${openMenu === "services" ? "active" : ""}`}
            onClick={() => toggleMenu("services")}
          >
            Services
            <span className={`mob-chev ${openMenu === "services" ? "open" : ""}`}>▾</span>
          </button>
          <div className={`lax-mob-services ${openMenu === "services" ? "open" : ""}`}>
            {servicesData.map((section, i) => (
              <div className="lax-mob-svc-item" key={i}>
                <button
                  className="lax-mob-svc-title"
                  onClick={() => setMobileExpandedService(mobileExpandedService === i ? null : i)}
                >
                  <Link href={section.link} onClick={(e) => e.stopPropagation()}>
                    {section.icon} {section.title}
                  </Link>
                  {section.items.length > 0 && (
                    <span style={{ marginLeft: 8, opacity: 0.6, fontSize: 10 }}>
                      {mobileExpandedService === i ? "▲" : "▼"}
                    </span>
                  )}
                </button>
                {section.items.length > 0 && (
                  <div className={`lax-mob-svc-links ${mobileExpandedService === i ? "open" : ""}`}>
                    {section.items.map((item, j) => (
                      <Link key={j} href={item.link} onClick={() => setMobileOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Portfolio */}
          <button
            className={`lax-mob-link ${openMenu === "portfolio" ? "active" : ""}`}
            onClick={() => toggleMenu("portfolio")}
          >
            Portfolio
            <span className={`mob-chev ${openMenu === "portfolio" ? "open" : ""}`}>▾</span>
          </button>
          <div className={`lax-mob-sub ${openMenu === "portfolio" ? "open" : ""}`}>
            <Link href="/Our_profolio" onClick={() => setMobileOpen(false)}>Our Portfolio</Link>
            <Link href="/Project_details" onClick={() => setMobileOpen(false)}>Project Details</Link>
          </div>

          {/* Blog */}
          <button
            className={`lax-mob-link ${openMenu === "blog" ? "active" : ""}`}
            onClick={() => toggleMenu("blog")}
          >
            Blog
            <span className={`mob-chev ${openMenu === "blog" ? "open" : ""}`}>▾</span>
          </button>
          <div className={`lax-mob-sub ${openMenu === "blog" ? "open" : ""}`}>
            <Link href="/Our_blog" onClick={() => setMobileOpen(false)}>Our Blog</Link>
            <Link href="/Blog_details" onClick={() => setMobileOpen(false)}>Blog Details</Link>
          </div>

          <Link href="/contactUs" className="lax-mob-link" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Footer CTA */}
        <div className="lax-mob-footer">
          <Link href="/contactUs" className="lax-btn lax-btn-solid" onClick={() => setMobileOpen(false)}>
            Let's Talk →
          </Link>
        </div>
      </nav>
    </>
  );
}