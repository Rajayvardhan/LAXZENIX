import AboutAreaV2 from "../componets/DigitalAgencyComp/DigiAboutSection";
import StudioPricing from "../componets/StudioComp/pricing";
import StudioAboutV4 from "../componets/StudioComp/studioAboutV4";
import StudioServicesV3 from "../componets/StudioComp/studioServicesV3";

export default function AboutUsPage() {
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
                    <a href="about.html#" className="panel-close">
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
                                            <a href="about.html#" className="nav-link">
                                                Demos
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="has-children">
                                                    <a href="about.html#">Multipage</a>
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
                                                    <a href="about.html#">Onepage</a>
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
                                            <a href="about.html#" className="nav-link">
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
                                            <a href="about.html#" className="nav-link">
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
                                            <a href="about.html#" className="active nav-link">
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
                                            <a href="about.html#" className="nav-link">
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
                                        <a href="about.html#">
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
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="page-title">
                                <h1>About Us</h1>
                                <ul className="breadcrumbs-link">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">About Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-banner-img">
                                <img src="assets/images/breadcrumb/img-1.jpg" alt="" />
                                <div className="play-content">
                                    <a
                                        href="https://www.youtube.com/watch?v=AT6oSIDbGkw"
                                        className="video-popup"
                                    >
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area about-area-v3 pt-210 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="img-holder mb-50 wow fadeInLeft">
                                <img src="assets/images/about/about-4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-wrapper mb-50 wow fadeInRight">
                                <div className="section-title mb-25">
                                    <span className="sub-title st-one">About Us</span>
                                    <h2>Best Digital Solutiuon Provider Agency</h2>
                                    <p className="blue-dark">
                                        Professional Design Agency to provide solutions
                                    </p>
                                </div>
                                <p>
                                    On the other hand denounce with righteous and dislike men who
                                    beguile and demoralizes by the charms of pleasure thes moment,
                                    so blinded by desire that they cannot
                                </p>
                                <ul className="list-style-one mb-35">
                                    <li>Digital Creative Agency</li>
                                    <li>Professional Problem Solutions</li>
                                    <li>Web Design & Development</li>
                                </ul>
                                <a
                                    href="about.html"
                                    className="main-btn bordered-btn btn-blue arrow-btn"
                                >
                                    Learn More Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-area bototm-minus-200">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-three mb-40 wow fadeInUp"
                                data-wow-delay=".15s"
                            >
                                <div className="icon">
                                    <i className="flaticon-strategy"></i>
                                </div>
                                <div className="text">
                                    <h3 className="title">
                                        <a href="service-details.html">Strategy</a>
                                    </h3>
                                    <ul className="list-style-two">
                                        <li>Product Management</li>
                                        <li>MVP Definition</li>
                                        <li>Product Strategy</li>
                                    </ul>
                                    <a href="services.html" className="btn-link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-three mb-40 wow fadeInUp"
                                data-wow-delay=".20s"
                            >
                                <div className="icon">
                                    <i className="flaticon-design"></i>
                                </div>
                                <div className="text">
                                    <h3 className="title">
                                        <a href="service-details.html">Product Design</a>
                                    </h3>
                                    <ul className="list-style-two">
                                        <li>Product Management</li>
                                        <li>MVP Definition</li>
                                        <li>Product Strategy</li>
                                    </ul>
                                    <a href="services.html" className="btn-link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div
                                className="service-item service-style-three mb-40 wow fadeInUp"
                                data-wow-delay=".25s"
                            >
                                <div className="icon">
                                    <i className="flaticon-source-code"></i>
                                </div>
                                <div className="text">
                                    <h3 className="title">
                                        <a href="service-details.html">Development</a>
                                    </h3>
                                    <ul className="list-style-two">
                                        <li>Product Management</li>
                                        <li>MVP Definition</li>
                                        <li>Product Strategy</li>
                                    </ul>
                                    <a href="services.html" className="btn-link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fancy-text-block light-gray-bg pb-90 fancy-text-block-v1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-wrapper mb-40 fadeInLeft">
                                <div className="section-title mb-25">
                                    <span className="sub-title st-one">How We Are</span>
                                    <h2>Build Grow & Manage Your Brand Identitys</h2>
                                    <p className="blue-dark">
                                        Professional Design Agency to provide solutions
                                    </p>
                                </div>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto
                                    beatae vitae dicta sunt explicabo. Nemo enimpsam luptatem quia
                                    voluptas aspernatur aut fugitdolor sit amet
                                </p>
                                <a href="about.html" className="main-btn arrow-btn">
                                    Discover More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-holder position-relative z-1 mb-40 wow fadeInRight">
                                <div className="shape shape-one">
                                    <span>
                                        <img src="assets/images/shape/circle-logo-2.png" alt="" />
                                    </span>
                                </div>
                                <div className="shape shape-two">
                                    <span>
                                        <img src="assets/images/shape/shape-6.png" alt="" />
                                    </span>
                                </div>
                                <img src="assets/images/about/img-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutAreaV2 />
            <StudioServicesV3 />
            <StudioAboutV4 />
            <StudioPricing />


            <section className="team-area team-area-v2 pt-130 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <span className="sub-title st-one">Meet Our Team</span>
                                <h2>Experience Team Members</h2>
                                <p>Professional Design Agency to provide solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-item mb-55 wow fadeInUp" data-wow-delay=".2s">
                                <div className="img-holder">
                                    <img src="assets/images/team/img-1.jpg" alt="" />
                                </div>
                                <div className="text text-center">
                                    <ul className="social-link">
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="team.html">Douglas J. Bleau</a>
                                    </h4>
                                    <p className="position">UX/UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-item mb-55 wow fadeInUp" data-wow-delay=".3s">
                                <div className="img-holder">
                                    <img src="assets/images/team/img-2.jpg" alt="" />
                                </div>
                                <div className="text text-center">
                                    <ul className="social-link">
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="team.html">Thomas M. Wilso</a>
                                    </h4>
                                    <p className="position">Web Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-item mb-55 wow fadeInUp" data-wow-delay=".4s">
                                <div className="img-holder">
                                    <img src="assets/images/team/img-3.jpg" alt="" />
                                </div>
                                <div className="text text-center">
                                    <ul className="social-link">
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <h4>Robert J. Ryan</h4>
                                    <p className="position">SEO Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-item mb-55 wow fadeInUp" data-wow-delay=".5s">
                                <div className="img-holder">
                                    <img src="assets/images/team/img-4.jpg" alt="" />
                                </div>
                                <div className="text text-center">
                                    <ul className="social-link">
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <h4>
                                        <a href="team.html">Kenneth K. Joiner</a>
                                    </h4>
                                    <p className="position">UX/UI Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-area testimonial-area-v3 pattern-bg dark-blue-bg pt-130 pb-135">
                <div className="shape shape-one">
                    <span>
                        <img src="assets/images/shape/circle-logo-2.png" alt="" />
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title section-title-white mb-55 wow fadeInLeft">
                                <span className="sub-title st-one">Testimonials</span>
                                <h2>What Our Client’s About Us</h2>
                                <p>Professional Design Agency to provide solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider-three">
                        <div className="testimonial-item mb-55 wow fadeInUp">
                            <div className="author-thumb">
                                <img src="assets/images/testimonial/thumb-1.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    Sit amet consectetur adipiscing elit sed do eiusmod
                                    temporincdes idunt ut labore et dolore magnase aliqua. Quis
                                    ipsum suspendisseyc sltrices gravida. Risus commodo verra
                                    maecenas lacusvel.
                                </p>
                                <div className="author-quote-title d-flex">
                                    <div className="quote">
                                        <i className="flaticon-quotation"></i>
                                    </div>
                                    <div className="author-title">
                                        <h4>Dustin A. Pherson</h4>
                                        <p className="position">Senior Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mb-55 wow fadeInUp">
                            <div className="author-thumb">
                                <img src="assets/images/testimonial/thumb-2.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    Sit amet consectetur adipiscing elit sed do eiusmod
                                    temporincdes idunt ut labore et dolore magnase aliqua. Quis
                                    ipsum suspendisseyc sltrices gravida. Risus commodo verra
                                    maecenas lacusvel.
                                </p>
                                <div className="author-quote-title d-flex">
                                    <div className="quote">
                                        <i className="flaticon-quotation"></i>
                                    </div>
                                    <div className="author-title">
                                        <h4>David M. Carter</h4>
                                        <p className="position">Senior Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mb-55 wow fadeInUp">
                            <div className="author-thumb">
                                <img src="assets/images/testimonial/thumb-1.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    Sit amet consectetur adipiscing elit sed do eiusmod
                                    temporincdes idunt ut labore et dolore magnase aliqua. Quis
                                    ipsum suspendisseyc sltrices gravida. Risus commodo verra
                                    maecenas lacusvel.
                                </p>
                                <div className="author-quote-title d-flex">
                                    <div className="quote">
                                        <i className="flaticon-quotation"></i>
                                    </div>
                                    <div className="author-title">
                                        <h4>Dustin A. Pherson</h4>
                                        <p className="position">Senior Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item mb-55 wow fadeInUp">
                            <div className="author-thumb">
                                <img src="assets/images/testimonial/thumb-2.jpg" alt="" />
                            </div>
                            <div className="testimonial-content">
                                <p>
                                    Sit amet consectetur adipiscing elit sed do eiusmod
                                    temporincdes idunt ut labore et dolore magnase aliqua. Quis
                                    ipsum suspendisseyc sltrices gravida. Risus commodo verra
                                    maecenas lacusvel.
                                </p>
                                <div className="author-quote-title d-flex">
                                    <div className="quote">
                                        <i className="flaticon-quotation"></i>
                                    </div>
                                    <div className="author-title">
                                        <h4>David M. Carter</h4>
                                        <p className="position">Senior Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-55 wow fadeInUp">
                                <h2>We’ve 1534+ Global Partners</h2>
                                <p>Professional Design Agency to provide solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="partners-wrapper wow fadeInUp">
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-1.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-2.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-3.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-4.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-5.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-6.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-7.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-8.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-9.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="img-holder">
                                <a href="about.html#">
                                    <img src="assets/images/partners/img-10.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-area page-footer light-gray-bg">
                <div className="container">
                    <div className="footer-top pt-75 pb-40">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="footer-logo mb-40 wow fadeInLeft">
                                    <img
                                        src="assets/images/logo/footer-logo-1.png"
                                        alt="Brand Logo"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-wrapper mb-40 wow fadeInRight">
                                    <h3>
                                        Modern Solutionsd For
                                        <span className="blue-dark">Creative Agency</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget pt-70 pb-40">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div
                                    className="widget footer-nav-widget mb-40 wow fadeInUp"
                                    data-wow-delay=".15s"
                                >
                                    <h4 className="widget-title">Services</h4>
                                    <ul className="widget-nav">
                                        <li>
                                            <a href="services.html">UX/UI Design</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="services.html">SEO Optimization</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Product Design</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Logo Design</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Brand Design</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div
                                    className="widget footer-nav-widget mb-40 wow fadeInUp"
                                    data-wow-delay=".20s"
                                >
                                    <h4 className="widget-title">Links</h4>
                                    <ul className="widget-nav">
                                        <li>
                                            <a href="services.html">About Agency</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Latest News & Blog</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Meet The Team</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Popular Services</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Testimonials</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Need a Career?</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div
                                    className="widget social-widget mb-40 wow fadeInUp"
                                    data-wow-delay=".25s"
                                >
                                    <h4 className="widget-title">Follow</h4>
                                    <ul className="social-nav">
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-dribbble"></i>Dribbble
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-instagram"></i>Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-twitter"></i>Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-behance"></i>Behance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-facebook-f"></i>Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html#">
                                                <i className="fab fa-medium-m"></i>Medium
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div
                                    className="widget newsletter-widget mb-40 wow fadeInUp"
                                    data-wow-delay=".30s"
                                >
                                    <div className="newsletter-content">
                                        <h3>Subscribe Our Newsletter</h3>
                                        <p>
                                            Natus errorsit voluptatem accusa dolore mque quae
                                            <a href="about.html#">abillo inventore verita</a> achitec
                                            beatae vitae dicta sunt explicabo.
                                        </p>
                                        <form>
                                            <div className="form_group">
                                                <input
                                                    type="email"
                                                    className="form_control"
                                                    placeholder="Email Address"
                                                    name="email"
                                                    required
                                                />
                                                <button className="main-btn">Sign Up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright-text">
                                    <p>&copy; 2022. All rights reserved design by Webtend</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-nav float-lg-right">
                                    <ul>
                                        <li>
                                            <a href="services.html">Setting & Privacy </a>
                                        </li>
                                        <li>
                                            <a href="services.html">Faqs</a>
                                        </li>
                                        <li>
                                            <a href="services.html">Services</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
