import PageHeader from "@/components/ui/PageHeader";
import Drinks from "@/components/home/Drinks";
import CTA from "@/components/home/CTA";

export default function DrinksPage() {
  return (
    <>
      <PageHeader
        title="Drinks & Refreshments"
        subtitle="Stay refreshed while we take care of your digital and printing needs."
      />

      <Drinks />

      <CTA />
    </>
  );
}