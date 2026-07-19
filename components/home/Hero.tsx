"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950" />

      <Container>
        <div className="relative grid min-h-[90vh] items-center gap-12 py-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
              Since {COMPANY.founded}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Building Digital
              <span className="block text-orange-500">
                Experiences
              </span>
              That Drive Growth
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Website Development, Graphic Design, Computer Services,
              Printing, Branding and Drinks Sales all under one roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services">
                Explore Services
              </Button>

              <Button
                href="/contact"
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/hero.png"
              alt="BrightStack"
              width={650}
              height={650}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}