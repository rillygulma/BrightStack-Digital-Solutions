"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "Do you build business websites?",
    answer:
      "Yes. We develop responsive websites for businesses, schools, organizations and individuals.",
  },
  {
    question: "Do you offer graphic design services?",
    answer:
      "Absolutely. We design logos, flyers, business cards, banners, social media graphics and branding materials.",
  },
  {
    question: "Can I print documents in your office?",
    answer:
      "Yes. We provide printing, photocopying, scanning and document finishing services.",
  },
  {
    question: "Do you repair computers?",
    answer:
      "Yes. We diagnose, repair and upgrade desktops and laptops.",
  },
  {
    question: "Do you sell cold drinks?",
    answer:
      "Yes. We sell soft drinks, bottled water, energy drinks and fruit juices.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24">
      <Container>

        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="mx-auto max-w-4xl">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 rounded-xl border dark:border-slate-700"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    active === index
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}