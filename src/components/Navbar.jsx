import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded bg-blue-500/20 border border-blue-400/40" />
            <span className="text-white font-semibold tracking-tight">BlueCut Studio</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-300 hover:text-white transition">Services</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <a href="#work" className="text-slate-300 hover:text-white transition">Work</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-medium text-white shadow hover:bg-blue-600 transition">Get a Quote</a>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#services" className="block rounded px-3 py-2 text-slate-200 hover:bg-white/5">Services</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block rounded px-3 py-2 text-slate-200 hover:bg-white/5">Pricing</a>
            <a onClick={() => setOpen(false)} href="#work" className="block rounded px-3 py-2 text-slate-200 hover:bg-white/5">Work</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block rounded px-3 py-2 text-slate-200 hover:bg-white/5">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
