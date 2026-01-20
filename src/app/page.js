import Footer from "./componets/Footer";
import AboutSection from "./componets/HomeCom/aboutSection";
import BlogSection from "./componets/HomeCom/BlogSection";
import ContactSection from "./componets/HomeCom/ContactSection";
import CounterSection from "./componets/HomeCom/CounterSection";
import CTASection from "./componets/HomeCom/CTASection";
import HeroBanner from "./componets/HomeCom/heroSection";
import PortfolioSection from "./componets/HomeCom/portfolioSection";
import ServiceSection from "./componets/HomeCom/serviceSection";
import TeamSection from "./componets/HomeCom/TeamSection";
import TestimonialSection from "./componets/HomeCom/TestimonialSection";

export default function Home() {
  return (
    <>
      
      <HeroBanner />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <CTASection />
      <CounterSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <BlogSection />
    </>
  );
}
