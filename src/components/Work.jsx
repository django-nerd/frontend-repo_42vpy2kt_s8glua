import { motion } from "framer-motion";

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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const card = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.3 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-slate-400">A few recent pieces showing different styles and pacing.</motion.p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
          {samples.map((s) => (
            <motion.div key={s.title} variants={card} className="group">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
                <motion.video whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }} className="w-full h-full" autoPlay muted loop playsInline poster={s.poster}>
                  <source src={s.url} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
              <div className="mt-2 text-slate-200 text-sm">{s.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
