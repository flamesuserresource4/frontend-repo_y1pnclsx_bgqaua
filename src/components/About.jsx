import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h2 className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          About
        </h2>
        <p className="mt-4 text-white/80">
          I am an active 5th semester Electrical Engineering student at Diponegoro University with a strong
          interest in Information Technology. Proficient in Python and C++, I am committed to system development
          across software and embedded domains, focusing on clean architecture, reliability, and performance.
        </p>
      </motion.div>
    </section>
  );
}
