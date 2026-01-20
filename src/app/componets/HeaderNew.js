"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
          <header className="theme-header transparent-header">
        {/* header Navigation */}
        <div className="header-navigation navigation-style-v1">
          <div className="nav-overlay"></div>

          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/" className="brand-logo">
                    <Image
                        src="/assets/images/logo/lax-logo.png"
                        alt="Lax Logo"
                        width={150}
                        height={50}
                    />

                </Link>
              </div>

              <div className="nav-menu">
                {/* Navbar Close */}
                <div className="navbar-close">
                  <i className="far fa-times"></i>
                </div>

                {/* Nav Search */}
                <div className="nav-search">
                  <form>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Main Menu */}
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item children1">
                      <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="menu-item children1">
                      <Link href="/AboutUs" className="nav-link">AboutUs</Link>
                    </li>
                    <li className="menu-item has-children">
                      <Link href="" className="nav-link">Services</Link>
                      <ul className="sub-menu">
                        <li><Link href="/OurService">Our Service</Link></li>
                        <li><Link href="/Service_details">Service Details</Link></li>
                      </ul>
                    </li>

                    <li className="menu-item has-children">
                      <Link href="#" className="nav-link">Portfolio</Link>
                      <ul className="sub-menu">
                        <li><Link href="/Our_profolio">Our Portfolio</Link></li>
                        <li><Link href="/Our_portfolio_details">Portfolio Details</Link></li>
                      </ul>
                    </li>

                    {/* <li className="menu-item has-children">
                      <Link href="#" className="nav-link">Pages</Link>
                      <ul className="sub-menu">
                        <li><Link href="/AboutUs">About Us</Link></li>
                        <li><Link href="/Our_team">Our Team</Link></li>
                        <li><Link href="/Our_Team_details">Team Details</Link></li>
                      </ul>
                    </li> */}

                    <li className="menu-item has-children">
                      <a href="#" className="nav-link">Blog</a>
                      <ul className="sub-menu">
                        <li><Link href="/Our_blog">Our Blog</Link></li>
                        <li><Link href="/Blog_details">Blog Details</Link></li>
                      </ul>
                    </li>
                    {/* <li className="menu-item childrenCustom">
                      <a href="/Digital_Agency" className="nav-link">Custom</a>
                    </li> */}

                    <li className="menu-item">
                      <Link href="/contactUs" className="nav-link">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* <div className="header-right-nav">
                <ul>
                  <li className="bar-item">
                    <Link href="">
                      <img src="assets/images/dot.png" alt="dot" />
                    </Link>
                  </li>

                  <li className="navbar-toggle-btn">
                    <div className="navbar-toggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </li>
                </ul>
              </div> */}

            </div>
          </div>
        </div>
      </header>
    );
}
