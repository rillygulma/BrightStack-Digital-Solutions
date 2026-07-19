import PageHeader from "@/components/ui/PageHeader";
import About from "@/components/home/About";
import Counter from "@/components/home/Counter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn more about BrightStack Digital Solutions and our commitment to innovation, quality, and customer satisfaction."
      />

      <About />

      <Counter />

      <WhyChooseUs />

      <CTA />
    </>
  );
}