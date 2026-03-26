export default function Optimization({
    services = [],
    subtitle,
    title,
}) {
    return (
        <section className="service-area service-area-v2">
            <div className="container-1350">
                <div className="service-wrapper">
                    <div className="row">

                        {/* Section Title */}
                        {(subtitle || title) && (
                            <div className="section-title mb-25 col-lg-12">
                                {subtitle && (
                                    <span className="sub-title st-one">{subtitle}</span>
                                )}
                                {title && <h2 style={{fontSize:"25px"}}>{title}</h2>}
                            </div>
                        )}

                        {services.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div
                                    className="service-item service-style-three mb-30 wow fadeInUp h-100"
                                    data-wow-delay={`${0.15 + index * 0.05}s`}
                                >
                                    <div className="icon">
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    <div className="text">
                                        <h3 className="title">
                                            <a href={item.link || "/service-details"}>
                                                {item.title}
                                            </a>
                                        </h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}