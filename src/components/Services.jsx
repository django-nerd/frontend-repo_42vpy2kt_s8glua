import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};
const card = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

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
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.3 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-slate-400">Editing, sound, color, motion, delivery — we cover it all.</motion.p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} variants={card} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-slate-400 text-sm list-disc pl-4">
                <li>Up to 4K delivery</li>
                <li>Color + sound polish</li>
                <li>2-3 revisions included</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
