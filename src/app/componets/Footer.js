import Link from "next/link";
export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-top pt-75 pb-40">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="footer-logo mb-40 wow fadeInLeft">
                                <img
                                    src="/assets/images/logo/lax-logo.png"
                                    alt="Brand Logo"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="text-wrapper mb-40 wow fadeInRight">
                                <h3>
                                    Modern Solutionsd For{" "}
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
                                    <li><a href="/services">UX/UI Design</a></li>
                                    <li><a href="/services">Web Development</a></li>
                                    <li><a href="/services">SEO Optimization</a></li>
                                    <li><a href="/services">Product Design</a></li>
                                    <li><a href="/services">Logo Design</a></li>
                                    <li><a href="/services">Brand Design</a></li>
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
                                    <li><Link href="/AboutUs">About Us</Link></li>
                                    <li><Link href="/OurService">Our Services</Link></li>
                                    <li><Link href="/Our_profolio">Our Portfolio Page</Link></li>
                                    <li><Link href="/Our_blog">Blogs</Link></li>
                                    <li><Link href="/contactUs">Contact</Link></li>
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
                                        <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a>
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
                                    <h3>
                                        Subscribe Our <br />
                                        Newsletter
                                    </h3>
                                    <p>
                                      We build innovative digital solutions that empower businesses to grow, scale, and succeed in a rapidly evolving technological world. 
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
                                <p>© 2022. All rights reserved design by Webtend</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="footer-nav float-lg-right">
                                <ul>
                                    <li><a href="/service-details">Setting & Privacy</a></li>
                                    <li><a href="/faqs">Faqs</a></li>
                                    <li><a href="/services">Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
