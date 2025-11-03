import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Home Monitor',
    desc: 'Prototype using Arduino + sensors with web dashboard for real-time status.',
    link: '#',
  },
  {
    title: 'Data Analysis Toolkit',
    desc: 'Python utilities for data wrangling and simple ML experimentation.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern, animated single-page portfolio with 3D hero section.',
    link: '#',
  },
];

const experiences = [
  'PMB 2024 Evaluation',
  'LKMM Facilitator',
  'Internship at PT Lentera Bumi Nusantara',
];

const achievements = [
  '1st Place Table Tennis POR FT 2025',
  '3rd Place Band Competition Engineering Festival 2023',
];

const socials = {
  email: 'mailto:ivan.ak@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  instagram: 'https://www.instagram.com/',
};

export default function WorkAndContact() {
  const handleSend = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const composed = `From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:ivan.ak@example.com?subject=${encodeURIComponent(subject)}&body=${composed}`;
    window.location.href = mailto;
  };

  const Card = useMemo(() => ({ children, className = '' }) => (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl ${className}`}>
      {children}
    </div>
  ), []);

  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 text-white">
      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="transition hover:brightness-110">
              <Card>
                <div className="flex h-full flex-col">
                  <div className="mb-4 h-32 w-full rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30" />
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Experience & Achievements */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <ul className="mt-4 space-y-3 text-white/85">
              {experiences.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                  {e}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <Card>
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <ul className="mt-4 space-y-3 text-white/85">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                  {a}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>

      {/* Contact */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        <Card>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-white/70">Feel free to reach out through any platform below.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={socials.email} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">Email</a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">LinkedIn</a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">GitHub</a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">Instagram</a>
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form onSubmit={handleSend} className="mt-4 grid grid-cols-1 gap-3">
            <div className="grid gap-1">
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-indigo-500/40" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-white/70">Subject</label>
              <input name="subject" required placeholder="Subject" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-indigo-500/40" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-indigo-500/40" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" rows={4} required placeholder="Write your message..." className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none backdrop-blur-md focus:ring-2 focus:ring-indigo-500/40" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 px-5 py-3 font-medium text-white transition hover:brightness-110">
              Send Message
            </button>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}
