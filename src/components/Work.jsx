const samples = [
  {
    title: "Brand Launch",
    url: "https://cdn.coverr.co/videos/coverr-midnight-streets-7802/1080p.mp4",
    poster: "/poster1.jpg",
  },
  {
    title: "Product Reel",
    url: "https://cdn.coverr.co/videos/coverr-pouring-coffee-5466/1080p.mp4",
    poster: "/poster2.jpg",
  },
  {
    title: "Creator Edit",
    url: "https://cdn.coverr.co/videos/coverr-colors-of-the-night-8063/1080p.mp4",
    poster: "/poster3.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-400">A few recent pieces showing different styles and pacing.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {samples.map((s) => (
            <div key={s.title} className="group">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
                <video className="w-full h-full group-hover:scale-105 transition-transform duration-500" autoPlay muted loop playsInline poster={s.poster}>
                  <source src={s.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
              <div className="mt-2 text-slate-200 text-sm">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
