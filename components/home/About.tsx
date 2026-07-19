import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          subtitle="About Us"
          title="BrightStack Digital Solutions"
          description="A trusted technology and business solutions company serving individuals, students, organizations and businesses."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <h3 className="text-2xl font-bold">
              Who We Are
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              BrightStack Digital Solutions is a modern technology company
              dedicated to delivering innovative digital services,
              branding solutions, printing services, and computer support.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Our mission is to help businesses and individuals leverage
              technology to improve productivity, visibility and growth.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-8 dark:bg-slate-900">
            <h3 className="mb-6 text-2xl font-bold">
              Company Information
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Founded</span>
                <span>{COMPANY.founded}</span>
              </div>

              <div className="flex justify-between">
                <span>CAC Number</span>
                <span>{COMPANY.cac}</span>
              </div>

              <div className="flex justify-between">
                <span>TIN</span>
                <span>{COMPANY.tin}</span>
              </div>

              <div className="flex justify-between">
                <span>Email</span>
                <span>{COMPANY.email}</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}