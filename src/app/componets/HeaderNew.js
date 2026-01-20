"use client";
import { useEffect, useState } from "react";
import Link from "next/link";



export default function Header() {
   const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
     {/* <div className="top-header">
        <div className="top-header-inner">

          <div className="top-left">
            <span>👤 24x7 Technical Support</span>
            <span className="divider">-</span>
            <span>✉ laxenix@tech.in</span>
            <span className="divider">|</span>
            <span>📞 +91 73574 44352</span>
          </div>

          <div className="top-right">
            <a href="/contactUs" className="top-contact-btn">
              👤 Contact
            </a>
          </div>

        </div>
      </div> */}
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
       <div className="site-header-inner">

        {/* Logo */}
        <Link href="/" className="brand-box">
          <img src="/assets/images/logo/lax-logo.png" alt="Logo" />
        </Link>

        {/* Navigation */}
        <nav className="site-nav">
          <ul className="site-menu">

            <li><a href="/">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>

            <li className="has-dropdown">
              <a href="#">Services</a>
              <ul className="submenu">
                <li><a href="/OurService">Our Services</a></li>
                <li><a href="/Service_details">Services Detail</a></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#">Portfolio</a>
              <ul className="submenu">
                <li><a href="/Our_profolio">Our Portfolio</a></li>
                <li><a href="/Our_portfolio_details">Portfolio Detail</a></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#">Blog</a>
              <ul className="submenu">
                <li><a href="/Our_blog">Our Blog</a></li>
                <li><a href="/Blog_details">Blog Detail</a></li>
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
