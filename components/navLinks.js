// Single source of truth for the primary navigation tabs.
export const navLinks = [
  { label: "Home", href: "/" },

   {
    label: "About Us", href: "/about",
    // Rendered as a dropdown menu in the navbar.
    children: [
      { label: "Our Mission", href: "/about" },
      { label: "Board & Committee", href: "/about/board" },
    ],
  },

  {
    label: "Initiatives",
    href: "/initiatives",
    // Rendered as a dropdown menu in the navbar.
    children: [
      { label: "Soapbox Derby", href: "/initiatives/soapbox-derby" },
      { label: "Academic Support", href: "/initiatives/academic-support" },
      { label: "Mentorship", href: "/initiatives/mentorship" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Visual Data", href: "/visual-data" },
  { label: "Partners", href: "/partners" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];
