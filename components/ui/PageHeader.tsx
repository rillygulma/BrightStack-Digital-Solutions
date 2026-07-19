import Container from "./Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-orange-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}