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
              <li className="has-dropdown">
                <a onClick={() => toggleMenu("services")}>Services ▾</a>
                <ul className={`submenu rh-sub ${openMenu === "services" ? "rh-show" : ""}`}>
                  <li><a href="/OurService">Our Services</a></li>
                  <li><a href="/Service_details">Services Detail</a></li>
                </ul>
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
