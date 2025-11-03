import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const CV_LINK = 'https://drive.google.com/file/d/1iTtYhQxSample/view?usp=sharing';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Spline 3D scene as immersive background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and glass overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pb-24 pt-36 md:flex-row md:gap-16 md:pt-40">
        {/* Profile + Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-2 mt-6 flex-shrink-0 md:order-1 md:mt-0"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-40 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop"
            alt="Ivan Admaja Kuncoro"
            className="relative z-10 h-40 w-40 rounded-2xl object-cover ring-1 ring-white/10 md:h-56 md:w-56"
          />
        </motion.div>

        {/* Copy + Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative order-1 max-w-2xl md:order-2"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to opportunities & collaborations
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ivan Admaja Kuncoro
          </h1>
          <p className="mt-3 text-lg text-white/80 md:text-xl">
            Undergraduate Electrical Engineering Student at Diponegoro University
          </p>
          <p className="mt-5 max-w-xl text-white/70">
            Passionate about IT, embedded systems, and crafting reliable software. Blending
            engineering fundamentals with modern development to build useful, elegant solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              See More
              <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </a>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110"
            >
              CV ATS
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
