import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to us for inquiries, support, or project discussions."
      />

      <ContactForm />

      <Map />
    </>
  );
}