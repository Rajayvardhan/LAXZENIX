export default function ContactAreaV2() {
    return (
        <section className="contact-area contact-area-v2 pt-80 pb-125">
            <div className="container-1350">
                <div className="contact-wrapper pt-70 pb-40">
                    <div className="row">

                        {/* Left Content */}
                        <div className="col-lg-6">
                            <div className="text-wrapper mb-40 wow fadeInLeft">
                                <h2>Have Any Project On Minds!</h2>
                                <p>
                                    On the other hand denounce righteous indigna tion and dislike
                                    men who are beguiled and demra charms of pleasure of the
                                    moment
                                </p>

                                <div className="information-style-two d-flex mb-20">
                                    <div className="icon">
                                        <i className="far fa-envelope-open"></i>
                                    </div>
                                    <div className="info">
                                        <h5 className="blue-dark">Email Us</h5>
                                        <h4>
                                            <a href="mailto:support@gmail.com">support@gmail.com</a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="information-style-two d-flex mb-20">
                                    <div className="icon">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="info">
                                        <h5 className="blue-dark">Phone Us</h5>
                                        <h4>
                                            <a href="tel:+012(345)6789">+012 (345) 6789</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-lg-6">
                            <div className="contact-form mb-40 wow fadeInRight">
                                <h2>Get Consultation Say Hello!</h2>
                                <form>
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <input
                                                    type="text"
                                                    className="form_control"
                                                    placeholder="Full Name"
                                                    name="name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
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

                                        <div className="col-lg-12">
                                            <div className="form_group">
                                                <select className="wide">
                                                    <option data-display="Subject">Subject</option>
                                                    <option value="01">Customer Support</option>
                                                    <option value="02">Customer Support</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
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
                                                <button className="main-btn arrow-btn">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
