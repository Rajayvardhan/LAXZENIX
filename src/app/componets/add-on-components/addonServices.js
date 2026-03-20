
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AddOnServices() {
    const services = [
        {
            title: "Domain & Hosting services",
            icon: "🌐",
            desc: "Secure, reliable, and fast domain registration and hosting solutions to keep your website always accessible online.",
            link: "/services/add-on-services/domain-hosting",
        },
        {
            title: "Cloud Services (AWS)",
            icon: "☁️",
            desc: "Scalable and flexible cloud infrastructure using AWS to enhance performance, security, and business continuity.",
            link: "/services/add-on-services/cloud-services",
        },
        {
            title: "Maintenance & Support",
            icon: "🛠️",
            desc: "Regular website maintenance, updates, and technical support to ensure smooth, secure, and optimized operations.",
            link: "/services/add-on-services/maintenance-support",
        },
        {
            title: "IT Consulting",
            icon: "👨‍💻",
            desc: "Expert IT consulting to help businesses plan, implement, and optimize technology strategies for maximum efficiency.",
            link: "/services/add-on-services/it-consulting",
        },
        {
            title: "Website Redesigning",
            icon: "🎨",
            desc: "Revamp your website with modern, responsive designs to improve user experience, engagement, and conversions.",
            link: "/services/add-on-services/website-redesiging",
        },
        {
            title: "Website Maintenance",
            icon: "🔧",
            desc: "Ongoing updates, bug fixes, and optimizations to ensure your website performs reliably and stays up-to-date.",
            link: "/services/add-on-services/website-maintenance",
        },
    ];

    return (
        <div className="container my-5 text-center">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center mb-55 wow fadeInUp">
                        <span className="sub-title st-one">Add on Services</span>
                        <h2>Our Add-On Services</h2>
                        <p>Enhance your digital presence with our comprehensive add-on services designed to meet your unique business needs.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 g-4">
                {services.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="service-card position-relative p-4 text-start h-100  wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>

                            {/* Icon Circle */}
                            <div className="icon-circle">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h5 className="fw-semibold ms-5 pt-2" style={{ color: "#0f2f38" }}>
                                {item.title}
                            </h5>

                            {/* Description */}
                            <p className="text-muted mt-4 small">
                                {item.desc}
                            </p>

                            {/* Link */}
                            <Link
                                href={item.link}
                                className="d-inline-flex align-items-center gap-2 mt-3 fw-semibold text-decoration-underline"
                                style={{ color: "#5956e9" }}
                            >
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
