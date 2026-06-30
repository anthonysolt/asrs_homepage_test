"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";
import NavDropdown from "./NavDropdown";

// Primary nav. The tab matching the current route is highlighted dark,
// mirroring the screenshot where HOME sits on a black tab.
// Tabs with `children` render a Headless UI dropdown.
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-y border-asrs-ink/10 bg-white">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-stretch justify-center px-4">
        {navLinks.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          if (link.children) {
            return (
              <li key={link.href}>
                <NavDropdown
                  label={link.label}
                  items={link.children}
                  active={active}
                />
              </li>
            );
          }

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
