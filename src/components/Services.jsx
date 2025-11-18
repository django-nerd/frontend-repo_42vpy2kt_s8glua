const services = [
  {
    title: "Social Cuts",
    desc: "Short-form edits for TikTok, Reels, and Shorts with hooks, captions, and kinetic typography.",
  },
  {
    title: "Commercial Edits",
    desc: "Brand films, promos, and ads with sound design, color, and motion graphics.",
  },
  {
    title: "Long-form",
    desc: "Podcasts, explainers, documentaries, and YouTube — end-to-end post production.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-400">Editing, sound, color, motion, delivery — we cover it all.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-slate-400 text-sm list-disc pl-4">
                <li>Up to 4K delivery</li>
                <li>Color + sound polish</li>
                <li>2-3 revisions included</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
