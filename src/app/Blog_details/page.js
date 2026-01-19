"use client";

export default function BlogDatails() {
    return (
        <>
            <div className="offcanvas-panel">
                <div className="panel-overlay"></div>
                <div className="offcanvas-panel-inner">
                    <div className="panel-logo">
                        <a href="index.html">
                            <img src="assets/images/logo/logo-1.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="about-us">
                        <h5 className="panel-widget-title">About Us</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            ipsam alias quae cupiditate quas, neque eum magni impedit
                            asperiores.
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
                    <a href="blog-details.html#" className="panel-close">
                        <i className="fal fa-times"></i>
                    </a>
                </div>
            </div>
            {/* <header className="theme-header transparent-header">
                <div className="header-navigation navigation-style-v1">
                    <div className="nav-overlay"></div>
                    <div className="container-fluid">
                        <div className="primary-menu">
                            <div className="site-branding">
                                <a href="index.html" className="brand-logo">
                                    <img src="assets/images/logo/logo-1.png" alt="Site Logo" />
                                </a>
                            </div>
                            <div className="nav-menu">
                                <div className="navbar-close">
                                    <i className="far fa-times"></i>
                                </div>
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
                                <nav className="main-menu">
                                    <ul>
                                        <li className="menu-item has-children">
                                            <a href="blog-details.html#" className="nav-link">
                                                Demos
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="has-children">
                                                    <a href="blog-details.html#">Multipage</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="index.html">Creative Agency</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Digital Agency</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Design Studio</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3-dark.html">Design Studio Dark</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <a href="blog-details.html#">Onepage</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="onepage-index-1.html">Creative Agency</a>
                                                        </li>
                                                        <li>
                                                            <a href="onepage-index-2.html">Digital Agency</a>
                                                        </li>
                                                        <li>
                                                            <a href="onepage-index-3.html">Design Studio</a>
                                                        </li>
                                                        <li>
                                                            <a href="onepage-index-3-dark.html">
                                                                Design Studio Dark
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="blog-details.html#" className="nav-link">
                                                Services
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="services.html">Our Service</a>
                                                </li>
                                                <li>
                                                    <a href="service-details.html">Service Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="blog-details.html#" className="nav-link">
                                                Portfolio
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="projects.html">Our Portfolio</a>
                                                </li>
                                                <li>
                                                    <a href="project-details.html">Portfolio Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="blog-details.html#" className="nav-link">
                                                Pages
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="about.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="team.html">Our Team</a>
                                                </li>
                                                <li>
                                                    <a href="team-details.html">Team Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="blog-details.html#" className="active nav-link">
                                                Blog
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blogs.html">Our Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="contact.html" className="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right-nav">
                                <ul>
                                    <li className="bar-item">
                                        <a href="blog-details.html#">
                                            <img src="assets/images/dot.png" alt="dot" />
                                        </a>
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
            </header> */}
            <section className="page-banner bg_cover position-relative z-1">
                <div className="shape shape-one scene">
                    <span data-depth="1">
                        <img src="assets/images/shape/shape-1.png" alt="" />
                    </span>
                </div>
                <div className="shape shape-two scene">
                    <span data-depth="2">
                        <img src="assets/images/shape/shape-2.png" alt="" />
                    </span>
                </div>
                <div className="shape shape-three scene">
                    <span data-depth="3">
                        <img src="assets/images/shape/shape-3.png" alt="" />
                    </span>
                </div>
                <div className="shape shape-four scene">
                    <span data-depth="4">
                        <img src="assets/images/shape/shape-2.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="page-title text-center">
                                <h1>Blog Details</h1>
                                <ul className="breadcrumbs-link">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">Blog Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-details-section pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details-wrapper wow fadeInUp">
                                <div className="blog-post-item">
                                    <div className="post-thumbnail mb-30">
                                        <img src="assets/images/blog/blog-single-1.jpg" alt="" />
                                    </div>
                                    <div className="entry-content">
                                        <div className="post-meta">
                                            <ul>
                                                <li>
                                                    <span>
                                                        <a href="blog-details.html#" className="cat-link">
                                                            Web Design
                                                        </a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="far fa-calendar-alt"></i>
                                                        <a href="blog-details.html#">25 March 2022</a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="far fa-comments"></i>
                                                        <a href="blog-details.html#">Comment (5)</a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="title">
                                            Powerful Terminal And Command Line Seeny Tools Modern
                                            Designing Better Links For Websites
                                        </h3>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque lau dantium, totam rem
                                            aperiam, eaque ipsa quae ab illo inventore veritatis et
                                            quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                            enim ipsam voluptatem quia voluptas sit aspernate aut odit
                                            aut fugit, sed quia consequuntur magni dolores eosqui
                                            ratione voluptatem nesciunt. Neque porro quisquam est, qui
                                            dolorem ipsum quia dolor sit amet, consectetur adipise
                                            velit sed quia non numquam eius modi tempora incidunt ut
                                            labore et dolore magnam aliquam quaerat voluptatem. Ut
                                            enim ad minima veniam quis nostrum exercitationem ullam
                                            corporis suscipit laboriosam, nisi ut aliquid ex ea
                                            commodi consequatur.
                                        </p>
                                        <div className="content-img">
                                            <img src="assets/images/blog/blog-single-2.jpg" alt="" />
                                        </div>
                                        <h4>
                                            Designing Better Links For Websites And Emails Guideline
                                            Useful VS Code Extensions For Front-End Developers
                                        </h4>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernate
                                            odit aut fugit quia coquuntur magni dolores eosqui ratione
                                            voluptatem nesciunt eque porro quisquam est qui dolorem
                                            epsum quia dolor sit amet, consectetur adipise velit sed
                                            quia non numquam
                                        </p>
                                        <ul className="list-style-one mb-45">
                                            <li>Digital Creative Agency</li>
                                            <li>Professional Problem Solutions</li>
                                            <li>Web Design & Development</li>
                                        </ul>
                                        <blockquote className="mb-50">
                                            <div className="content">
                                                <h4>
                                                    Newly Supported Modern Pseudo-className Selectors Smashing
                                                    Podcast Episode Pauloag Conve Seen
                                                </h4>
                                                <h5>William K. Parker</h5>
                                            </div>
                                        </blockquote>
                                        <div className="post-share-tag mb-30">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="post-tag-cloud mb-30">
                                                        <ul>
                                                            <li className="item-heading">Tags :</li>
                                                            <li>
                                                                <a href="blog-details.html#">Graphics</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html#">Digital</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html#">Web UX/UI</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="social-share float-lg-right mb-30">
                                                        <ul className="social-link">
                                                            <li className="item-heading">Share :</li>
                                                            <li>
                                                                <a href="blog-details.html#">
                                                                    <i className="fab fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html#">
                                                                    <i className="fab fa-twitter"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html#">
                                                                    <i className="fab fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html#">
                                                                    <i className="fab fa-behance"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-author-box mb-70">
                                    <div className="author-thumb">
                                        <img
                                            src="assets/images/blog/author-1.jpg"
                                            alt="post author"
                                        />
                                    </div>
                                    <div className="author-content">
                                        <h4>Shawn B. Bailey</h4>
                                        <p>
                                            Quis autem vel eum iure reprehenderit qui in ea voluptate
                                            velit esse quam nihil molestiae consequatur, vel illum qui
                                            dolorem eum fugiat quo voluptas nulla pariatur
                                        </p>
                                        <ul className="social-link">
                                            <li>
                                                <a href="blog-details.html#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html#">
                                                    <i className="fab fa-behance"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html#">
                                                    <i className="fab fa-dribbble"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comments-area mb-70 wow fadeInUp">
                                    <h4 className="comments-title">Popular Comments</h4>
                                    <ul className="comments-list">
                                        <li className="comment mb-45">
                                            <div className="comment-avatar">
                                                <img
                                                    src="assets/images/blog/comment-1.jpg"
                                                    alt="comment author"
                                                />
                                            </div>
                                            <div className="comment-wrap">
                                                <div className="comment-author-content">
                                                    <span className="author-name">
                                                        Randal L. Tomas<span className="date">25 Feb 2022</span>
                                                    </span>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                        gravida. Risus commodo viverra maecenas accumsan
                                                        lacus vel facilisis.
                                                    </p>
                                                    <a
                                                        href="blog-details.html#comment-respond"
                                                        className="reply"
                                                    >
                                                        Reply<i className="far fa-long-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment mb-45">
                                            <div className="comment-avatar">
                                                <img
                                                    src="assets/images/blog/comment-2.jpg"
                                                    alt="comment author"
                                                />
                                            </div>
                                            <div className="comment-wrap">
                                                <div className="comment-author-content">
                                                    <span className="author-name">
                                                        Randal L. Tomas<span className="date">25 Feb 2022</span>
                                                    </span>
                                                    <p>
                                                        consectetur adipiscing elit, sed do eiusmod tempor
                                                        incididunt ut labore et dolore magna aliqua. Quis
                                                        ipsum suspendisse ultrices gravida. Risus commodo
                                                    </p>
                                                    <a
                                                        href="blog-details.html#comment-respond"
                                                        className="reply"
                                                    >
                                                        Reply<i className="far fa-long-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="comment mb-45">
                                            <div className="comment-avatar">
                                                <img
                                                    src="assets/images/blog/comment-3.jpg"
                                                    alt="comment author"
                                                />
                                            </div>
                                            <div className="comment-wrap">
                                                <div className="comment-author-content">
                                                    <span className="author-name">
                                                        Randal L. Tomas<span className="date">25 Feb 2022</span>
                                                    </span>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                        gravida. Risus commodo viverra maecenas accumsan
                                                        lacus vel facilisis.
                                                    </p>
                                                    <a
                                                        href="blog-details.html#comment-respond"
                                                        className="reply"
                                                    >
                                                        Reply<i className="far fa-long-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comments-respond mb-35" id="comment-respond">
                                    <h4 className="comments-heading">Leave A Message</h4>
                                    <form className="comment-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Your Full Name"
                                                        name="name"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <input
                                                        type="email"
                                                        className="form_control"
                                                        placeholder="Email Address"
                                                        name="email"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <select className="wide">
                                                        <option data-display="Subject :">Subject :</option>
                                                        <option value="01">Customer Support</option>
                                                        <option value="02">Server Support</option>
                                                        <option value="03">24/7 Support</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form_group">
                                                    <input
                                                        type="text"
                                                        className="form_control"
                                                        placeholder="Phone Number"
                                                        name="phone"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <textarea
                                                        name="message"
                                                        className="form_control"
                                                        placeholder="Comments"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form_group">
                                                    <button className="main-btn arrow-btn">
                                                        Send Us Message
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar-widget-area">
                                <div className="widget search-widget mb-30 wow fadeInUp">
                                    <form>
                                        <div className="form_group">
                                            <input
                                                type="email"
                                                className="form_control"
                                                placeholder="Search here"
                                                name="email"
                                                required
                                            />
                                            <button className="search-btn">
                                                <i className="far fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="widget category-widget mb-30 wow fadeInUp">
                                    <h4 className="widget-title">Category</h4>
                                    <ul className="category-nav">
                                        <li>
                                            <a href="blog-details.html#">
                                                Organic Vegetables
                                                <span>
                                                    <i className="far fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html#">
                                                Fresh Jack Fruits
                                                <span>
                                                    <i className="far fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html#">
                                                Chicken Meat & Eggs
                                                <span>
                                                    <i className="far fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html#">
                                                Organic Wheats
                                                <span>
                                                    <i className="far fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html#">
                                                Cow Meat & Milk
                                                <span>
                                                    <i className="far fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="widget contact-info-widget bg_cover mb-30 wow fadeInUp"
                                    style={{ backgroundImage: "url(assets/images/widget/contact-bg.jpg)" }}
                                >
                                    <div className="contact-info-box text-center">
                                        <div className="icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a href="tel:+01234567899">+0123 (456) 7899</a>
                                            </h4>
                                            <h5>
                                                <a href="mailto:support@gmail.com">support@gmail.com</a>
                                            </h5>
                                            <a
                                                href="blog-details.html#"
                                                className="main-btn bordered-btn"
                                            >
                                                Contact us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget recent-post-widget mb-30 wow fadeInUp">
                                    <h4 className="widget-title">Recent News</h4>
                                    <ul className="recent-post-list">
                                        <li className="post-thumbnail-content">
                                            <img
                                                src="assets/images/widget/news-1.jpg"
                                                alt="post image"
                                            />
                                            <div className="post-title-date">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Guide Modern CSS Colors HWB, LAB
                                                    </a>
                                                </h6>
                                                <span className="posted-on">
                                                    By
                                                    <a href="blog-details.html#">Somalia D. Silba</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content">
                                            <img
                                                src="assets/images/widget/news-2.jpg"
                                                alt="post image"
                                            />
                                            <div className="post-title-date">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Guide Modern CSS Colors HWB, LAB
                                                    </a>
                                                </h6>
                                                <span className="posted-on">
                                                    By
                                                    <a href="blog-details.html#">Somalia D. Silba</a>
                                                </span>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content">
                                            <img
                                                src="assets/images/widget/news-3.jpg"
                                                alt="post image"
                                            />
                                            <div className="post-title-date">
                                                <h6>
                                                    <a href="blog-details.html">
                                                        Guide Modern CSS Colors HWB, LAB
                                                    </a>
                                                </h6>
                                                <span className="posted-on">
                                                    By
                                                    <a href="blog-details.html#">Somalia D. Silba</a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget tag-cloud-widget mb-30 wow fadeInUp">
                                    <h4 className="widget-title">Popular Tags</h4>
                                    <a href="blog-details.html#">3D Creative</a>
                                    <a href="blog-details.html#">Agency</a>
                                    <a href="blog-details.html#">Digital</a>
                                    <a href="blog-details.html#">Web Design</a>
                                    <a href="blog-details.html#">Strategy</a>
                                    <a href="blog-details.html#">UX/UI</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
