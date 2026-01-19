import AboutAreaV2 from "../componets/DigitalAgencyComp/DigiAboutSection";
import DigiHeroBannerV2 from "../componets/DigitalAgencyComp/digiHero";
import DigiNavBar from "../componets/DigitalAgencyComp/DigiNavBar";
import PortfolioAreaV2 from "../componets/DigitalAgencyComp/DigiPortfolio";
import ServiceAreaV1 from "../componets/DigitalAgencyComp/DigiServiceSection";
import BlogSection from "../componets/HomeCom/BlogSection";
import ContactSection from "../componets/HomeCom/ContactSection";
import CounterSection from "../componets/HomeCom/CounterSection";
import TeamSection from "../componets/HomeCom/TeamSection";
import TestimonialSection from "../componets/HomeCom/TestimonialSection";
import StudioHeroV3 from "../componets/StudioComp/studiohero";

export default function Header() {
    return (
        <>
            {/* <DigiNavBar /> */}
            <DigiHeroBannerV2 />
            <StudioHeroV3 />
            {/* <ServiceAreaV1 /> */}
            {/* <AboutAreaV2 /> */}
            <CounterSection />
            {/* <TestimonialSection /> */}
            {/* <TeamSection /> */}
            {/* <ContactSection /> */}
            {/* <BlogSection /> */}
        </>
    )
}