import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // In this demo, we simply wait and show a success message.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      (e.target).reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get a quote</h2>
          <p className="mt-3 text-slate-400">Tell us about your project and we'll follow up within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Name" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" required type="email" placeholder="Email" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" required rows={5} placeholder="Project details, timelines, references..." className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button disabled={status === 'loading'} className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 font-semibold text-white hover:bg-blue-600 transition disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'success' && <p className="text-green-400 text-sm">Thanks! We'll be in touch shortly.</p>}
            {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold">Contact</h3>
              <p className="mt-2 text-slate-300 text-sm">hello@bluecut.studio</p>
              <p className="mt-1 text-slate-300 text-sm">+1 (555) 012-3456</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold">Location</h3>
              <p className="mt-2 text-slate-300 text-sm">Remote-first team working worldwide</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold">Hours</h3>
              <p className="mt-2 text-slate-300 text-sm">Mon–Fri, 9am–6pm (EST)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
