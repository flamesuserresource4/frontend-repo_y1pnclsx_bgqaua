import React from 'react';
import { motion } from 'framer-motion';

const bars = [
  { name: 'Python', value: 52, color: 'from-emerald-400 to-teal-500' },
  { name: 'PHP', value: 20, color: 'from-indigo-400 to-blue-500' },
  { name: 'C++', value: 30, color: 'from-fuchsia-400 to-pink-500' },
  { name: 'HTML', value: 25, color: 'from-amber-400 to-orange-500' },
  { name: 'CSS', value: 25, color: 'from-sky-400 to-cyan-500' },
  { name: 'JavaScript', value: 24, color: 'from-violet-400 to-purple-500' },
];

const softwares = ['MATLAB', 'Arduino IDE', 'Proteus', 'Canva', 'VS Code', 'MS Office'];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Programming Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">Programming</h3>
          <div className="mt-6 space-y-5">
            {bars.map((b) => (
              <div key={b.name}>
                <div className="mb-1 flex items-end justify-between text-sm">
                  <span className="text-white/90">{b.name}</span>
                  <span className="text-white/60">{b.value}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${b.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Software List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">Software</h3>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {softwares.map((s) => (
              <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/90 backdrop-blur-md">
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
