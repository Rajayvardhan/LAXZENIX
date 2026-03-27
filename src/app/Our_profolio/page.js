import FAQSection from "../componets/Faq";
import BlogSection from "../componets/HomeCom/BlogSection";
import CTASection from "../componets/HomeCom/CTASection";
import PortfolioSection from "../componets/HomeCom/portfolioSection";
import PageBanner from "../componets/PageBanner";


const faqs = [
    {
        question: "What is SEO?",
        answer: "SEO helps your website rank higher on Google."
    },
    {
        question: "What is SMO?",
        answer: "SMO improves your social media presence."
    },
    {
        question: "Do you provide support?",
        answer: "Yes, we provide full support."
    },
    {
        question: "Do you provide support?",
        answer: "Yes, we provide full support."
    }
];
export default function OurPortfolioPage() {
  return (
    <>
      <PageBanner
        title="At LAXZENIX Tech Your Digital Growth Partner,"
        image="/assets/images/services/api/gradient-api-illustration.png"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Portfolio", link: "/Our_profolio" },
        ]}
      />
      <PortfolioSection />
      <CTASection />
      <BlogSection />
      <FAQSection faqs={faqs} />
    </>
  );
}
