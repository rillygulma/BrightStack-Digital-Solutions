import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6 text-center dark:bg-slate-950">
      <h1 className="text-8xl font-black text-orange-500">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Back to Home
      </Link>
    </main>
  );
}