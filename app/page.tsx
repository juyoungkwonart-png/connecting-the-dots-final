export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <p className="font-mono text-caption uppercase tracking-[0.2em] text-footerMuted">
        Next.js is building
      </p>
      <h1 className="mt-6 max-w-2xl text-center font-serif text-4xl font-medium leading-tight text-navy sm:text-5xl">
        Connecting the dots
      </h1>
      <p className="mt-6 max-w-md text-center text-sm text-primary/80 lg:text-body-lg">
        Add your constellation story, beats, and motion here — this scaffold ships a
        working App Router layout so deployments succeed.
      </p>
      <div
        className="mt-12 h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_rgba(57,255,20,0.45)]"
        aria-hidden
      />
    </main>
  );
}
