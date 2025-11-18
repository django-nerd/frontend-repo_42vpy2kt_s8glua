export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Crisp, compelling edits that make your story stand out
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              We craft scroll-stopping video content for brands, creators, and agencies — from rough cut to color, sound, and delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white shadow hover:bg-blue-600 transition">View Packages</a>
              <a href="#work" className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition">See Our Work</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-400 text-sm">
              <div>
                <span className="text-white font-semibold">300+</span> projects delivered
              </div>
              <div>
                <span className="text-white font-semibold">48h</span> express options
              </div>
              <div>
                <span className="text-white font-semibold">5.0</span> client rating
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <video className="w-full h-full" autoPlay muted loop playsInline poster="/poster.jpg">
                <source src="https://cdn.coverr.co/videos/coverr-aerial-of-a-modern-city-6610/1080p.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
            <p className="mt-3 text-xs text-slate-400">Sample reel footage for demonstration only.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
