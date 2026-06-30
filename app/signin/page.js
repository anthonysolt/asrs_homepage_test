export const metadata = { title: "Sign In — ASRS" };

export default function SignInPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-16">
      <h1 className="text-3xl font-black tracking-tight text-asrs-ink">
        Sign In
      </h1>
      <p className="mt-2 text-asrs-ink/70">
        Access your ASRS account.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-asrs-ink">
          Email
          <input
            type="email"
            autoComplete="email"
            className="rounded-sm border border-asrs-ink/20 px-3 py-2 focus:border-asrs-orange focus:outline-none focus:ring-1 focus:ring-asrs-orange"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-asrs-ink">
          Password
          <input
            type="password"
            autoComplete="current-password"
            className="rounded-sm border border-asrs-ink/20 px-3 py-2 focus:border-asrs-orange focus:outline-none focus:ring-1 focus:ring-asrs-orange"
            placeholder="••••••••"
          />
        </label>

        <button
          type="button"
          className="mt-2 rounded-full bg-asrs-orange px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-asrs-orangeDark focus:outline-none focus-visible:ring-2 focus-visible:ring-asrs-orangeDark"
        >
          Sign In
        </button>
      </div>
    </section>
  );
}
