export default function WhyChooseUs({ image, title, highlight, description, points, upperdescription }) {
    return (
        <div style={{ backgroundColor: "#e2ebf8" }} className="py-5">
            <div className="container py-5">

                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-lg-start">
                        <div className="text-wrapper mb-40 fadeInLeft">
                            <div className="section-title mb-25">
                                <span className="sub-title st-one">{title}{" "} {highlight} Us?</span>
                                <p className="blue-dark mt-4">
                                    {upperdescription}
                                </p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <ul className="custom-list">
                            {points?.map((item, index) => (
                                <li key={index} className="list-item">

                                    <div className="circle">
                                        {index + 1}
                                    </div>
                                    <p className="text">
                                        {item.text}
                                    </p>

                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}