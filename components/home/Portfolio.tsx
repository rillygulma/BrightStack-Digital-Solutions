"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const portfolio = [
  {
    title: "BrightStack Company Website",
    category: "Web Development",
    image: "/portfolio/website.png",
  },
  {
    title: "Business Flyer Design",
    category: "Graphic Design",
    image: "/portfolio/flyer.png",
  },
  {
    title: "Restaurant Branding",
    category: "Branding",
    image: "/portfolio/branding.png",
  },
  {
    title: "School Management System",
    category: "Web Application",
    image: "/portfolio/school.png",
  },
  {
    title: "Business Card Design",
    category: "Print Design",
    image: "/portfolio/card.png",
  },
  {
    title: "Computer Maintenance",
    category: "Computer Services",
    image: "/portfolio/computer.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <Container>

        <SectionTitle
          subtitle="Portfolio"
          title="Some of Our Recent Work"
          description="A collection of projects showcasing our expertise in web development, branding, graphic design and IT solutions."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-950"
            >
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 transition group-hover:opacity-100" />

                <ArrowUpRight
                  className="absolute right-5 top-5 rounded-full bg-orange-500 p-2 text-white opacity-0 transition group-hover:opacity-100"
                  size={42}
                />

              </div>

              <div className="p-6">

                <span className="text-sm font-semibold text-orange-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
}