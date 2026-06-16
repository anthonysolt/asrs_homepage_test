"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";

// Primary nav. The tab matching the current route is highlighted dark,
// mirroring the screenshot where HOME sits on a black tab.
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-y border-asrs-ink/10 bg-white">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-stretch px-4">
        {navLinks.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`block px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-asrs-orange ${
                  active
                    ? "bg-asrs-ink text-white"
                    : "text-asrs-ink hover:text-asrs-orange"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
