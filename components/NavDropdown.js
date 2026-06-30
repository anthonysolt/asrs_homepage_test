"use client";

import { useState, useRef } from "react"
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function NavDropdown({ label, items, active }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const openMenu = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    timer.current = setTimeout(() => setOpen(false), 30);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
        <MenuButton
          className={`inline-flex items-center gap-x-1 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-asrs-orange ${
            active ? "bg-asrs-ink text-white" : "text-asrs-ink hover:text-asrs-orange"
          }`}
        >
          {label}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-4" />
        </MenuButton>

        {open && (
          <MenuItems
            static
            className="absolute left-0 z-10 w-fit origin-top-left rounded-md bg-white pt-1 font-semibold shadow-lg outline-1 outline-black/5"
          >
            <div className="py-1">
              {items.map((item) => (
                <MenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className=" whitespace-nowrap block px-4 py-2 text-sm font-semibold text-asrs-ink hover:bg-asrs-orange/10 hover:text-asrs-orange data-focus:bg-asrs-orange/10 data-focus:text-asrs-orange data-focus:outline-hidden"
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        )}
      </div>
    </Menu>
  );
}
