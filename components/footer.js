import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-asrs-ink">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo + name */}
          <Link href="/" aria-label="ASRS home" className="flex items-center gap-3">
            <img src="/ASRS_LOGO.png" alt="ASRS logo" className="h-8 w-auto" />
            <span className="text-xl font-black text-white">ASRS</span>
          </Link>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 text-m text-gray-400">
            <li>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/initiatives" className="transition hover:text-white">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="transition hover:text-white">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/10" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © 2026 ASRS Inc. - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

