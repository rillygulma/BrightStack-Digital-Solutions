"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7),
  subject: z.string().min(3),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

    alert("Message sent successfully!");
  };

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h2 className="mb-8 text-4xl font-bold">
              Let&apos;s Talk
            </h2>

            <p className="mb-10 text-slate-600 dark:text-slate-300">
              Have a project or need any of our services?
              We&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <Phone className="text-orange-500" />

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p>08035504017</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-orange-500" />

                <div>
                  <h4>Email</h4>

                  <p>rillygulma@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-orange-500" />

                <div>
                  <h4>Location</h4>

                  <p>
                    Opposite Bola Ahmed Tinubu
                    Ultra-Modern State Secretariat,
                    Birnin Kebbi.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="text-orange-500" />

                <div>
                  <h4>Business Hours</h4>

                  <p>Monday - Saturday</p>

                  <p>8:00AM - 7:00PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-2xl bg-slate-100 p-8 dark:bg-slate-900"
          >
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full rounded-lg border p-4"
            />

            <p className="text-red-500">
              {errors.name?.message}
            </p>

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full rounded-lg border p-4"
            />

            <p className="text-red-500">
              {errors.email?.message}
            </p>

            <input
              {...register("phone")}
              placeholder="Phone"
              className="w-full rounded-lg border p-4"
            />

            <input
              {...register("subject")}
              placeholder="Subject"
              className="w-full rounded-lg border p-4"
            />

            <textarea
              rows={6}
              {...register("message")}
              placeholder="Your Message"
              className="w-full rounded-lg border p-4"
            />

            <Button type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}