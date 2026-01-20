export default function ContactSection() {
  return (
    <section className="contact-area contact-area-v1 pt-70 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="text-wrapper mb-50 wow fadeInLeft">
              <h2>
                Have Any on <span className="fill-text">Project</span>
                <br />
                Mind! <span className="fill-text">Contact</span> Us
              </h2>

              <p>
                Share your ideas with us, and our team will help turn them into impactful <span>digital solutions</span> designed to grow your business.
               
              </p>

              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="information-style-one mb-40">
                    <div className="icon">
                      <span>
                        <i className="far fa-envelope-open"></i>Email Us
                      </span>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="mailto:support@gmail.com">
                           laxzenix@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="information-style-one mb-40">
                    <div className="icon">
                      <span>
                        <i className="far fa-phone"></i>Phone Us
                      </span>
                    </div>
                    <div className="info">
                      <h4>
                        <a href="tel:+0123456789">+91 7357444352</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
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

                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
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

          <div className="col-lg-4">
            <div className="img-holder mb-50 wow fadeInRight">
              <div className="shape shape-icon-one scene">
                <span data-depth="1">
                  <img
                    src="/assets/images/shape/shape-4.png"
                    alt=""
                  />
                </span>
              </div>

              <div className="shape shape-icon-two">
                <span></span>
              </div>

              <img
                src="/assets/images/contact/contact-1.jpg"
                alt="Contact Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
