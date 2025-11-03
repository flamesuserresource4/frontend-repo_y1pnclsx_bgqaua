import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkAndContact from './components/WorkAndContact';

function App() {
  return (
    <div className="scroll-smooth bg-slate-950 selection:bg-fuchsia-500/30 selection:text-white">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">IAK</a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-md hover:bg-white/20">Let’s talk</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <WorkAndContact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Ivan Admaja Kuncoro. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
