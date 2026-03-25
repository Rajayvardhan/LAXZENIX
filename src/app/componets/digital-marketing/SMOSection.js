import React from "react";
import "../../style/res.css";

export default function SMOSection() {
  return (
    <section className="smo-section pt-130 pb-70">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-12">
            <div className="smo-content">

              <span className="smo-tag">Social Media Optimization</span>

              <h2 className="smo-title">
                What is Social Media Optimization?
              </h2>

              <p className="smo-desc">
                Social Media Optimization means maximizing your presence across
                social networks to achieve higher reach and impact. A well-planned
                SMO strategy helps businesses build trust, improve brand
                recognition, and drive meaningful interactions.
              </p>

              <div className="smo-actions">
                <a href="/OurServices" className="btn btn-primary mr-3">
                  Explore Our Services
                </a>

                <a href="/contactUs" className="btn btn-outline-primary">
                  Contact Us
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}