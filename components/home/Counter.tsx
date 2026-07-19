"use client";

import CountUp from "react-countup";
import Container from "@/components/ui/Container";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 200,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Core Services",
  },
  {
    value: 99,
    suffix: "%",
    label: "Customer Satisfaction",
  },
];

export default function Counter() {
  return (
    <section className="bg-orange-500 py-20 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h3 className="text-5xl font-extrabold">
                <CountUp
                  end={stat.value}
                  duration={3}
                />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}