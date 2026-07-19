import Container from "@/components/ui/Container";

export default function Map() {
  return (
    <section className="pb-24">
      <Container>

        <div className="overflow-hidden rounded-3xl shadow-xl">

          <iframe
            src="https://www.google.com/maps?q=Opposite+Bola+Ahmed+Tinubu+Ultra-Modern+State+Secretariat+Birnin+Kebbi&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{
              border: 0,
            }}
          />

        </div>

      </Container>
    </section>
  );
}