import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-orange-900 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-5xl font-extrabold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Let BrightStack Digital Solutions help you build a strong online
            presence, create stunning designs, and provide reliable technology
            solutions for your business.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Button href="/contact">
              Get Started
            </Button>

            <Button
              href="/portfolio"
              variant="outline"
            >
              View Portfolio
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}