import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="offcanvas-panel">
        <div className="panel-overlay"></div>
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <a href="index.html"><img src="assets/images/logo/logo-1.png" alt="Logo" /></a>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Us</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores.
            </p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Contact Us</h5>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt"></i>
                121 King St, Melbourne VIC 3000, Australia.
              </li>
              <li>
                <i className="fal fa-envelope-open"></i>
                <a href="mailto:hello@barky.com"> hello@barky.com</a>
                <a href="mailto:info@barky.com">info@barky.com</a>
              </li>
              <li>
                <i className="fal fa-phone"></i>
                <a href="tel:(312)-895-9800">(312) 895-9800</a>
                <a href="tel:(312)-895-9888">(312) 895-9888</a>
              </li>
            </ul>
          </div>
          <a href="index.html#" className="panel-close"><i className="fal fa-times"></i></a>
        </div>
      </div>


      <header className="theme-header transparent-header">
        {/* header Navigation */}
        <div className="header-navigation navigation-style-v1">
          <div className="nav-overlay"></div>

          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <Link href="/" className="brand-logo">
                  <img
                    src="assets/images/logo/logo-1.png"
                    alt="Site Logo"
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

              <div className="header-right-nav">
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
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
