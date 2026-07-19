import PageHeader from "@/components/ui/PageHeader";
import Services from "@/components/home/Services";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="From web development to graphic design, printing, computer repairs, and business solutions."
      />

      <Services />

      <FAQ />

      <CTA />
    </>
  );
}