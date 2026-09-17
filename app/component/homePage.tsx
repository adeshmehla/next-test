import ContactForm from "./form";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Section 1: Hero */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
          Build fast, modern web applications with Next.js and Tailwind CSS.
        </p>
      </section>

      {/* Section 2: Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Fast Performance</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Optimized for speed out of the box using the App Router.
            </p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Clean Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Easily customizable styles powered by Tailwind utility classes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Contact form */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Contact form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <ContactForm/>
        </div>
      </section>
    </div>
  );
}