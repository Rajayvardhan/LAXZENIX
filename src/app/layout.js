import "../app/style/custom.css";
import "../app/style/res.css";
import Script from "next/script";
import Footer from "./componets/Footer";
import HeaderNewSection from "./componets/HeaderNew";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pixlab - Creative Agency</title>

        <link rel="icon" href="/assets/images/logo/lax-fav.png" />

        {/* CSS */}
        <link rel="stylesheet" href="/assets/vendor/animate.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>

      <body className="gradient-body">
        <div className="preloader">
          <div className="loader">
            <div className="pre-shadow"></div>
            <div className="pre-box"></div>
          </div>
        </div>
        <HeaderNewSection />
        {children}
        {/* ===== JS (ORDER IS CRITICAL) ===== */}
        <Script src="/assets/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/vendor/popper/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/slick/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/magnific-popup/dist/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/isotope.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/nice-select/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/wow.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/parallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/theme.js" strategy="afterInteractive" />
        <a href="#" className="back-to-top">
          <i className="far fa-angle-up"></i>
        </a> 
        <Footer />
      </body>
    </html >
  );
}
