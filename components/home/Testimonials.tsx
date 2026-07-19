"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Muhammad Bello",
    company: "Business Owner",
    image: "/icons/avatar1.png",
    review:
      "BrightStack built an outstanding website for my company. Their professionalism and attention to detail exceeded my expectations.",
  },

  {
    name: "Fatima Usman",
    company: "Entrepreneur",
    image: "/icons/avatar2.png",
    review:
      "Their graphic design services are exceptional. I highly recommend BrightStack for branding projects.",
  },

  {
    name: "Ibrahim Aliyu",
    company: "School Administrator",
    image: "/icons/avatar3.png",
    review:
      "Reliable, professional and affordable. Their computer services saved our office valuable time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Our clients trust us to deliver outstanding digital solutions."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((client) => (
            <SwiperSlide key={client.name}>
              <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">

                <div className="flex gap-4">

                  <Image
                    src={client.image}
                    alt={client.name}
                    width={70}
                    height={70}
                    className="rounded-full"
                  />

                  <div>

                    <h3 className="font-bold text-xl">
                      {client.name}
                    </h3>

                    <p className="text-orange-500">
                      {client.company}
                    </p>

                  </div>

                </div>

                <div className="my-5 flex gap-1">

                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      fill="orange"
                      className="text-orange-500"
                      size={18}
                    />
                  ))}

                </div>

                <p className="leading-8 text-slate-600 dark:text-slate-300">
                  &ldquo;{client.review}&rdquo;
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  );
}