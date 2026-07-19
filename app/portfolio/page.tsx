import PageHeader from "@/components/ui/PageHeader";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Take a look at some of the projects and creative work we have delivered."
      />

      <Portfolio />

      <Testimonials />

      <CTA />
    </>
  );
}