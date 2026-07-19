"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const drinks = [
  {
    name: "Soft Drinks",
    image: "/drinks/soft-drink.png",
  },
  {
    name: "Energy Drinks",
    image: "/drinks/energy-drink.png",
  },
  {
    name: "Fruit Juices",
    image: "/drinks/juice.png",
  },
  {
    name: "Bottle Water",
    image: "/drinks/water.png",
  },
];

export default function Drinks() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900">
      <Container>
        <SectionTitle
          subtitle="Refreshment Spot"
          title="Stay Refreshed While We Work"
          description="Enjoy chilled drinks while waiting for your printing, design, typing, or computer services."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-950"
            >
              <div className="relative h-72">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">
                  {drink.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/drinks">
            View All Drinks
          </Button>
        </div>
      </Container>
    </section>
  );
}