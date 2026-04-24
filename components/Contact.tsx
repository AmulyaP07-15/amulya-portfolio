'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactLinks = [
  {
    label: 'Email',
    value: 'penikalapati.a@northeastern.edu',
    href: 'mailto:penikalapati.a@northeastern.edu',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'AmulyaP07-15',
    href: 'https://github.com/AmulyaP07-15',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amulya-penikalapati',
    href: 'https://www.linkedin.com/in/amulya-penikalapati-6174121ab/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mailtoHref = `mailto:penikalapati.a@northeastern.edu?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E6EDF3] placeholder-[#8B949E]/60 text-base focus:outline-none focus:border-[#6E40C9]/60 focus:bg-[#6E40C9]/5 transition-all duration-200';

  return (
    <section id="contact" className="py-24 border-t border-[#30363D] scroll-mt-20">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-3">
            <p className="font-mono text-xs text-[#8B949E] uppercase tracking-[0.15em] whitespace-nowrap">
              04 / Contact
            </p>
            <div className="flex-1 h-px bg-[#30363D]" />
          </div>
          <h2 className="font-mono font-bold text-[#E6EDF3]" style={{ fontSize: '32px' }}>
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-base leading-[1.7] text-[#8B949E]">
              I&apos;m always open to interesting conversations, whether it&apos;s research
              collaborations, internship opportunities, or just a chat about AI. Feel free to reach out.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[#30363D] bg-[#161B22] hover:border-[#6E40C9]/60 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#6E40C9]/10 text-[#6E40C9]">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#8B949E] mb-0.5">{link.label}</p>
                    <p className="text-sm text-[#E6EDF3] group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-[#8B949E] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-5 rounded-xl border border-[#30363D] bg-[#161B22]">
              <h3 className="font-mono text-[#E6EDF3] font-bold text-sm mb-5">Send a message</h3>
              <div className="space-y-3">
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} />
                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} className={inputClass} />
                <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} rows={5} className={`${inputClass} resize-none`} />
                <a
                  href={mailtoHref}
                  className="block w-full text-center px-6 py-3 rounded-lg font-mono font-bold text-sm bg-[#6E40C9] text-white hover:bg-[#7c4fd4] transition-colors duration-200"
                >
                  Send Message
                </a>
                <p className="text-center font-mono text-xs text-[#8B949E]/60">
                  Opens your email client with the message pre-filled.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
