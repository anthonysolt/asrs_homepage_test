import Link from "next/link";

// Hero: large image area on the left (carousel placeholder) with an
// orange "We support" panel on the right, matching the screenshot.
export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 ">
      <div className="grid grid-cols-1 overflow-hidden rounded-xl md:grid-cols-[1.6fr_1fr]">
        {/* Image / carousel area */}
        <div className="relative flex min-h-[360px] items-end bg-asrs-ink/80 md:min-h-[460px]">
          {/* Replace with real <Image> carousel slides */}
          <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-widest text-white/40">
            Hero image
          </div>

          {/* Prev / next arrows */}
          <button
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl text-white/80 transition hover:text-white"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl text-white/80 transition hover:text-white"
          >
            ›
          </button>

          {/* Carousel dots */}
          <div className="relative mx-auto mb-5 flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Support panel */}
        <div className="flex flex-col items-center justify-center gap-6 bg-asrs-orange px-6 py-10 text-center">
          <h2 className="text-xl font-semibold text-white">We support</h2>

          {/* Partner / sponsor logo placeholder */}
          <div className="flex h-44 w-44 items-center justify-center bg-asrs-gold text-xs uppercase tracking-widest text-white/70">
            Logo
          </div>

          <Link
            href="/about"
            className="rounded-sm border border-white px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-asrs-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Hero description */}
      <div className="mx-auto max-w-3xl py-10 text-center">
        <p className="text-lg leading-relaxed text-asrs-ink/80">
          ASRS connects students in underfunded communities with enrichment
          programs, mentors, and resources that open doors beyond the classroom.
          From the annual soapbox derby to year-round academic support, we
          invest in the potential of every student we reach.
        </p>
      </div>
    </section>
  );
}
