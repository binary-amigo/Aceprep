import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-28 text-center">
      <p className="font-display text-7xl font-extrabold text-blue-600">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">This page skipped the interview</h1>
      <p className="mt-3 max-w-md text-slate-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button to="/" size="lg" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
