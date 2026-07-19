interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <span className="font-semibold uppercase tracking-widest text-orange-500">
          {subtitle}
        </span>
      )}

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}