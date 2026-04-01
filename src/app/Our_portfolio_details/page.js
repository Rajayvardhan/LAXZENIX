export default function Our_profolio_Details() {
    return (
        <>
            <section className="page-banner bg_cover position-relative z-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-title">
                                <h1>Fintech Admin Panel</h1>
                                <ul className="breadcrumbs-link">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">Project Details</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="page-banner-img">
                                <img src="assets/images/portfolio/Finunique-admin.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="portfolio-details-section pt-210 pb-130">
                <div className="container">
                    <div className="portfolio-details-wrapper wow fadeInUp">
                        <div className="portfolio-item">
                            <div className="text">
                                <div className="row">

                                    {/* LEFT CONTENT */}
                                    <div className="col-lg-8">
                                        <div className="content">
                                            <h3 className="title">Fintech Admin Panel</h3>
                                            <p>
                                                Fintech Admin Panel is a powerful dashboard designed
                                                to manage multiple financial services such as mobile
                                                recharge, DTH, electricity bills, and payment gateway
                                                operations. The system provides a clean UI for handling
                                                users, transactions, reports, and analytics efficiently.
                                            </p>
                                        </div>

                                        <div className="content">
                                            <h3 className="title">Project Benefit</h3>
                                            <p>
                                                This admin panel simplifies business operations by
                                                providing centralized control, real-time data tracking,
                                                and smooth navigation. It improves productivity,
                                                reduces manual work, and ensures better user
                                                management with secure access.
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT INFO */}
                                    <div className="col-lg-4">
                                        <div className="portfolio-info mb-45">
                                            <ul>
                                                <li>
                                                    <h4>Category</h4>
                                                    <p>Admin Dashboard, Finunique</p>
                                                </li>
                                                <li>
                                                    <h4>Client</h4>
                                                    <p>Finunique</p>
                                                </li>
                                                <li>
                                                    <h4>Date</h4>
                                                    <p>2025</p>
                                                </li>
                                                <li>
                                                    <h4>Technologies</h4>
                                                    <p>React.js, Bootstrap, Laravel</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* IMAGE + SUMMARY */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="content">
                                            <img
                                                src="assets/images/portfolio/Finunique-admin.png"
                                                alt=""
                                            />
                                            <h3 className="title">Summary</h3>
                                            <p>
                                                The Fintech Admin Panel is designed with a focus on
                                                user experience and performance. It includes features
                                                like dashboard analytics, transaction tracking,
                                                multi-service management, and responsive design,
                                                making it suitable for modern Fintech platforms.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* NAVIGATION SAME RAKHA */}
                        <div className="post-nav-tag pt-80">
                            <div className="row align-items-center">

                                {/* PREVIOUS PROJECT */}
                                <div className="col-lg-5">
                                    <div className="post-nav-item prev-post">
                                        <div className="thumb">
                                            <img src="assets/images/portfolio/Finuniques.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>
                                                <a href="#">Fintech Admin Panel</a>
                                            </h4>
                                            <p>Admin Dashboard, Fintech</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CENTER ICON */}
                                <div className="col-lg-2 text-center">
                                    <img src="assets/images/portfolio/icon-1.png" alt="" />
                                </div>

                                {/* NEXT PROJECT */}
                                <div className="col-lg-5">
                                    <div className="post-nav-item next-post">
                                        <div className="thumb">
                                            <img src="assets/images/portfolio/digihub.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>
                                                <a href="#">DigiHub Website</a>
                                            </h4>
                                            <p>Web Design & Development</p>
                                        </div>
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