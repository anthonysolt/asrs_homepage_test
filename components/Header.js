import Link from "next/link";

// Top header: logo, mission statement, sign in + donate actions.
export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" aria-label="ASRS home" className="shrink-0">
          <img src="ASRS_LOGO.png" alt="ASRS logo" className="h-32 w-auto" />
        </Link>

        {/* Mission statement */}
        <p className="max-w-md text-lg italic leading-relaxed tracking-wide text-asrs-ink/70">
          Providing enrichment and resource opportunities to students
          who attend schools in underfunded zip codes.
        </p>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/signin"
            className="rounded-full border border-asrs-ink/30 px-6 py-3 text-sm font-semibold tracking-wide text-asrs-ink transition hover:bg-asrs-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-asrs-ink"
          >
            Sign In
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-asrs-orange px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-sm transition hover:bg-asrs-orangeDark focus:outline-none focus-visible:ring-2 focus-visible:ring-asrs-orangeDark"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
