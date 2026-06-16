# ASRS Homepage Skeleton

Next.js (App Router) + React + Tailwind CSS skeleton recreating the ASRS homepage.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `components/Header.js` — logo, mission statement, **Sign In** + **Donate** buttons
- `components/Navbar.js` — primary tabs; active tab highlighted (client component, uses `usePathname`)
- `components/navLinks.js` — single source of truth for nav tabs
- `components/Hero.js` — image/carousel area, "We support" panel, description
- `app/layout.js` — wraps every page with Header + Navbar
- `app/page.js` — Home
- `app/{about,initiatives,news,visual-data,partners,volunteer,contact}/page.js` — nav routes
- `app/signin/page.js` — sign in form
- `app/donate/page.js` — donate landing

Brand colors live in `tailwind.config.js` under `theme.extend.colors.asrs`.
