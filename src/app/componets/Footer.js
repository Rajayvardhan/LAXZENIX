export default function Footer() {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="footer-top pt-75 pb-40">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="footer-logo mb-40 wow fadeInLeft">
                                <img
                                    src="/assets/images/logo/footer-logo-1.png"
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
                                    <li><a href="/services">About Agency</a></li>
                                    <li><a href="/blogs">Latest News & Blog</a></li>
                                    <li><a href="/team">Meet The Team</a></li>
                                    <li><a href="/services">Popular Services</a></li>
                                    <li><a href="/testimonials">Testimonials</a></li>
                                    <li><a href="#">Need a Career?</a></li>
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
                                        <a href="#"><i className="fab fa-dribbble"></i>Dribbble</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-behance"></i>Behance</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-medium-m"></i>Medium</a>
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
                                        Natus errorsit voluptatem accusa dolore mque quae{" "}
                                        <a href="#">abillo inventore verita</a> achitec beatae vitae
                                        dicta sunt explicabo.
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
