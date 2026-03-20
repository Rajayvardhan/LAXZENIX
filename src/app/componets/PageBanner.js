import React from "react";

const PageBanner = ({
  title,
  breadcrumbs = [],
  image = "/assets/images/services/digital-marketing.jpg",
}) => {
  return (
    <section className="page-banner bg_cover position-relative z-1">
      <div className="shape shape-one scene">
        <span data-depth="1">
          <img src="/assets/images/shape/shape-1.png" alt="" />
        </span>
      </div>

      <div className="shape shape-two scene">
        <span data-depth="2">
          <img src="/assets/images/shape/shape-2.png" alt="" />
        </span>
      </div>

      <div className="shape shape-three scene">
        <span data-depth="3">
          <img src="/assets/images/shape/shape-3.png" alt="" />
        </span>
      </div>

      <div className="shape shape-four scene">
        <span data-depth="4">
          <img src="/assets/images/shape/shape-2.png" alt="" />
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="page-title">
              <h1>{title}</h1>

              <ul className="breadcrumbs-link">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={index}
                    className={index === breadcrumbs.length - 1 ? "active" : ""}
                  >
                    {item.link ? (
                      <a href={item.link}>{item.label}</a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="page-banner-img">
              <img src={image} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;