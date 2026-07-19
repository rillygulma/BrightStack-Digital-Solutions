export default function Loading() {
  return (
    <main className="flex h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-5">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Loading BrightStack...
        </p>
      </div>
    </main>
  );
}