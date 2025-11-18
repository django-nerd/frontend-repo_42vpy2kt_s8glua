const tiers = [
  {
    name: "Starter",
    price: "$299",
    desc: "Perfect for a single social cut or short promo.",
    features: ["Up to 60s edit", "Royalty-free music", "Basic color + sound", "1 revision"],
    cta: "Choose Starter",
  },
  {
    name: "Growth",
    price: "$799",
    desc: "Great for campaigns and small businesses.",
    features: ["Up to 3 mins", "Motion graphics", "Advanced color + mix", "2 revisions"],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$1,499",
    desc: "For agencies and brands needing premium polish.",
    features: ["Up to 8 mins", "Custom graphics", "Sound design", "3 revisions"],
    cta: "Choose Pro",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-400">Pick a package that fits your goals. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 ${t.highlighted ? 'bg-gradient-to-b from-blue-600/20 to-white/5 ring-blue-500/40' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <div className="text-3xl font-extrabold text-white">{t.price}</div>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 font-semibold text-white hover:bg-blue-600 transition">
                {t.cta}
              </a>
              <p className="mt-2 text-xs text-slate-400 text-center">Turnaround varies by scope; rush available.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
