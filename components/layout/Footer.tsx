import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  BadgeCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { navigation } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="BrightStack"
              width={220}
              height={80}
              className="mb-6"
            />

            <p className="leading-7">
              {COMPANY.description}
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-orange-500">
              Innovate • Create • Solve
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone className="mt-1 text-orange-500" size={18} />

                <span>{COMPANY.phone}</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-orange-500" size={18} />

                <span>{COMPANY.email}</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-orange-500" size={18} />

                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Business Info
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock className="text-orange-500" size={18} />

                <div>
                  <p className="font-semibold text-white">
                    Business Hours
                  </p>

                  <p>Monday – Saturday</p>

                  <p>8:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Building2 className="text-orange-500" size={18} />

                <div>
                  <p className="font-semibold text-white">
                    CAC Number
                  </p>

                  <p>9662842</p>
                </div>
              </div>

              <div className="flex gap-3">
                <BadgeCheck className="text-orange-500" size={18} />

                <div>
                  <p className="font-semibold text-white">
                    TIN Number
                  </p>

                  <p>2622170814429</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 py-8 lg:flex-row">
          <p className="text-center text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              BrightStack Digital Solutions
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/2348035504017"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 p-3 transition hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}