import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Counter from "@/components/home/Counter";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Drinks from "@/components/home/Drinks";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Counter />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Drinks />
      <FAQ />
      <CTA />
    </>
  );
}