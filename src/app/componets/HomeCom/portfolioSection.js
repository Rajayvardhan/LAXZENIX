"use client";
import React, { useState } from "react";

const projectsData = [
  {
    title: "Fintech Platform",
    category: "Finance",
    image: "/assets/images/portfolio/Finuniques.png",
    link: "https://www.Finuniques.in/",
  },
  {
    title: "Fintech Admin Panel",
    category: "Dashboard",
    image: "/assets/images/portfolio/Finunique-admin.png",
    link: "https://utility.Finuniques.in/register",
  },
  {
    title: "Multi-Products E-commerce",
    category: "Website",
    image: "/assets/images/portfolio/digihub.png",
    link: "https://digihubtech.in/",
  },
  {
    title: "Table Booking System",
    category: "Web App",
    image: "/assets/images/portfolio/tablebooking.png",
    link: "https://www.sevenunique.com/",
  },
  {
    title: "Influencer Freelancing Platform",
    category: "Finance",
    image: "/assets/images/portfolio/ekero.png",
    link: "https://ekeropartnersempowerwealth.com/en",
  },
  {
    title: "Blogging Website",
    category: "Website",
    image: "/assets/images/portfolio/Blogging.png",
    link: "https://www.7uniqueverfiy.com/",
  },
];

const categories = ["All", "Website", "Web App", "Dashboard", "Finance"];

export default function PortfolioSection({ limit }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeTab);

  const finalProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="mb-4">
          <h2 className="fw-bold">
            Our <span className="text-primary">Tech Projects</span>
          </h2>
          <p className="text-muted">
            Explore our real-world work across multiple domains.
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(cat)}
              className={`btn ${activeTab === cat ? "btn-primary" : "btn-outline-dark"
                } mr-4 rounded-pill px-5`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {finalProjects.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-3" key={index}>
              <a href="/Our_portfolio_details" target="_blank" rel="noopener noreferrer">
                <div className="card border-0 shadow-sm h-100 portfolio-card">

                  <div className="position-relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100"
                      style={{ height: "220px", objectFit: "cover" }}
                    />


                  </div>
                  <div className="d-flex justify-content-between align-items-center">

                    <div className="p-3">
                      <h6 className="mb-1">{item.title}</h6>
                      <small className="text-muted">{item.category}</small>
                    </div>
                    <div className="overlay d-flex align-items-center justify-content-center">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-dark fw-bold px-3 py-2" style={{textDecoration:"underline", fontSize:"12px"}}>
                        View Project
                      </a>
                    </div>

                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .portfolio-card {
          transition: 0.3s;
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: 0.3s;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}