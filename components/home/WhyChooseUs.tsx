"use client";

import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [

  {
    title: "Reliable & Fast Service",

    description:
      "We deliver projects on time without compromising quality.",

    icon: Clock3,
  },

  {
    title: "Creative Solutions",

    description:
      "Modern designs and innovative digital solutions tailored to your needs.",

    icon: BadgeCheck,
  },

  {
    title: "Customer Satisfaction",

    description:
      "Our clients are at the center of everything we do.",

    icon: CheckCircle2,
  },

  {
    title: "Trusted Business",

    description:
      "Registered business with CAC and TIN committed to professionalism.",

    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          subtitle="Why Choose Us"
          title="We Deliver More Than Just Services"
          description="BrightStack combines creativity, technology and excellent customer service to help businesses grow."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="mb-3 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>

                </div>

              </motion.div>

            );
          })}

        </div>

      </Container>

    </section>
  );
}