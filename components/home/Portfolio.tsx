"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const portfolio = [
  {
    title: "TalentFlow – Learning Management System",
    category: "Web Application",
    image: "/portfolio/talentflow.png",
    link: "https://talentflow-eight-weld.vercel.app/",
  },
  {
    title: "Bright Stack – Shop Management System",
    category: "Web Application",
    image: "/portfolio/shop-management.png",
    link: "https://shop-manager-sable.vercel.app/",
  },
  {
    title: "FUBK Library Website & Management System",
    category: "Web Development",
    image: "/portfolio/fubk-library.png",
    link: "https://library-fubk.vercel.app/",
  },
  {
    title: "Food Ordering App",
    category: "Mobile App",
    image: "/portfolio/food-ordering.png",
    link: "https://chuks-kitchen-food-ordering.netlify.app/",
  },
  {
    title: "El-Caaz Hotel Website & Management System",
    category: "Web Application",
    image: "/portfolio/hotel-management.png",
    link: "https://el-caaz-hotel-management-system.vercel.app/",
  },
  {
    title: "BrightStack Company Website",
    category: "Web Development",
    image: "/portfolio/website.png",
    link: "#",
  },
  {
    title: "Business Flyer Design",
    category: "Graphic Design",
    image: "/portfolio/flyer.png",
    link: "#",
  },
  {
    title: "Restaurant Branding",
    category: "Branding",
    image: "/portfolio/branding.png",
    link: "#",
  },
  {
    title: "School Management System",
    category: "Web Application",
    image: "/portfolio/school.png",
    link: "#",
  },
  {
    title: "Business Card Design",
    category: "Print Design",
    image: "/portfolio/card.png",
    link: "#",
  },
  {
    title: "Computer Maintenance",
    category: "Computer Services",
    image: "/portfolio/computer.png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Top Right Arrow */}
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white opacity-0 transition-all duration-300 hover:bg-orange-600 group-hover:opacity-100"
                  >
                    <ArrowUpRight size={24} />
                  </a>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6">
                <span className="text-sm font-semibold text-orange-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Visible Project Link */}
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                  >
                    View Live Project
                    <ExternalLink size={17} />
                  </a>
                ) : (
                  <span className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Project Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
