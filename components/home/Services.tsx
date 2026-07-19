"use client";

import {
  Monitor,
  Globe,
  Printer,
  PenTool,
  FileText,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies.",
    icon: Globe,
  },

  {
    title: "Computer Services",
    description:
      "Computer repairs, software installation, upgrades, maintenance and troubleshooting.",
    icon: Monitor,
  },

  {
    title: "Graphic Design",
    description:
      "Professional logos, flyers, business cards, banners and branding materials.",
    icon: PenTool,
  },

  {
    title: "Printing & Photocopy",
    description:
      "High-quality printing, photocopying, scanning and document finishing.",
    icon: Printer,
  },

  {
    title: "Typing & Documentation",
    description:
      "Fast and accurate typing of reports, CVs, proposals, assignments and projects.",
    icon: FileText,
  },

  {
    title: "Technical Support",
    description:
      "Reliable IT consultation, maintenance and support for homes and businesses.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">

      <Container>

        <SectionTitle
          subtitle="Our Services"
          title="Everything You Need In One Place"
          description="Professional digital and computer services delivered with quality and reliability."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950"
              >
                <div className="mb-6 inline-flex rounded-xl bg-orange-100 p-4 text-orange-500">
                  <Icon size={32} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

              </motion.div>

            );
          })}

        </div>

      </Container>

    </section>
  );
}