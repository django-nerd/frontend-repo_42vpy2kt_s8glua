import { motion } from "framer-motion";

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

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.3 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-slate-400">Pick a package that fits your goals. No hidden fees.</motion.p>
        </div>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} variants={item} className={`rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 ${t.highlighted ? 'bg-gradient-to-b from-blue-600/20 to-white/5 ring-blue-500/40' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }} className="text-3xl font-extrabold text-white">{t.price}</motion.div>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-slate-200 text-sm">
                {t.features.map((f) => (
                  <motion.li key={f} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400/80" /> {f}
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 font-semibold text-white hover:bg-blue-600 transition">
                {t.cta}
              </a>
              <p className="mt-2 text-xs text-slate-400 text-center">Turnaround varies by scope; rush available.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
