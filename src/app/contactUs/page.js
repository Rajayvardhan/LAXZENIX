"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
      const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_oqrsv4v",
      "template_sr4txg7",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      "vSaSvfRkrLvVQ4-Ez"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

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
                            We are a team of designers and developers that create high quality HTML5 templates and
                            web design resources for the creative community.
                        </p>
                    </div>
                    <div className="contact-us">
                        <h5 className="panel-widget-title">Contact Us</h5>
                        <ul>
                            <li>
                                <i className="fal fa-map-marker-alt"></i>
                                 Sunny square,Jagatpura, Jaipur,Rajasthan 302033
                            </li>
                            <li>
                                <i className="fal fa-envelope-open"></i>
                                <a href="mailto:laxzenix@gmail.com">laxzenix@gmail.com</a>
                                
                            </li>
                            <li>
                                <i className="fal fa-phone"></i>
                                <a href="+917357444352">(312) 895-9800</a>
                                <a href="tel:+917357444352">(+91)7357444352</a>
                            </li>   
                        </ul>
                    </div>
                    <a href="contact.html#" className="panel-close">
                        <i className="fal fa-times"></i>
                    </a>
                </div>
            </div>
            
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
                                <h1>Contact Us</h1>
                                <ul className="breadcrumbs-link">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-info-v1 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title mb-60">
                                <span className="sub-title st-one">Get In Touch</span>
                                <h2>Have Any Project on Mind? Work Together</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div
                                        className="information-item info-item-one mb-30 wow fadeInUp"
                                        data-wow-delay=".15s"
                                    >
                                        <div className="icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info">
                                            <h4>Locations</h4>
                                            <p>Sunny group Sunny square, near IHMR, Budhsinghpura, Sheopur, Jagatpura, Jaipur, Rajasthan 302033</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div
                                        className="information-item info-item-two mb-30 wow fadeInUp"
                                        data-wow-delay=".20s"
                                    >
                                        <div className="icon">
                                            <i className="far fa-envelope-open-text"></i>
                                        </div>
                                        <div className="info">
                                            <h4>Email Address</h4>
                                            <p>
                                                <a href="https://wpriverthemes.com/HTML/pixlab/mailto;hotlinein@gmail.com">
                                                    laxzenix@gmail.com
                                                </a>
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div
                                        className="information-item info-item-three mb-30 wow fadeInUp"
                                        data-wow-delay=".25s"
                                    >
                                        <div className="icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="info">
                                            <h4>Phone Number</h4>
                                            <p>
                                                <a href="tel:+917357444352">+91 7357444352</a>
                                            </p>
                                            <p>
                                                <a href="tel:+917357444352">+0123456</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div
                                        className="information-item info-item-four mb-30 wow fadeInUp"
                                        data-wow-delay=".30s"
                                    >
                                        <div className="icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <div className="info">
                                            <h4>Working Hours</h4>
                                            <p>
                                                <span>Sunday - Monday</span>
                                                <span>09 am - 05 pm</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="map-box mb-30">
                                <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area contact-area-v3 pt-130 pb-130">
                <div className="container-1350">
                    <div className="contact-wrapper light-gray-bg pt-80 pb-80 wow fadeInUp">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="section-title text-center mb-55">
                                        <span className="sub-title st-one">Message Us</span>
                                        <h2>Get Any Consultations ? Contact With Us</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="form_group">
                                                        <input
                                                            type="text"
                                                            className="form_control"
                                                            placeholder="Full Name"
                                                            name="name"
                                                                                          value={formData.name}
                              onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form_group">
                                                        <input
                                                            type="email"
                                                            className="form_control"
                                                            placeholder="Email Address "
                                                            name="email"
                                                                                          value={formData.email}
                              onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form_group">
                                                        <input
                                                            type="text"
                                                            className="form_control"
                                                            placeholder="Phone Number"
                                                            name="phone"
                                                                                          value={formData.phone}
                              onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form_group">
                                                        <textarea
                                                            className="form_control"
                                                            placeholder="Write Message"
                                                            name="message"
                                                                                          value={formData.message}
                              onChange={handleChange}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form_group text-center">
                                                        <button className="main-btn" type="submit">Send Us Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}