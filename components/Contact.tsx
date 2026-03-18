'use client';

import { useState, FormEvent } from 'react';
import FadeIn from './FadeIn';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mreyrrjn', {
        // ↑ Replace YOUR_FORM_ID with your Formspree form ID.
        //   Get one free at https://formspree.io — create a form and copy the endpoint ID.
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-dark-200 border border-dark-border rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors font-body text-sm';

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-accent mb-12 rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-accent uppercase tracking-wider mb-2">
                  Name
                </label>
                <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-accent uppercase tracking-wider mb-2">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-accent uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} placeholder="Your message..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-8 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 font-mono text-sm mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 font-mono text-sm mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </FadeIn>

          {/* Social links */}
          <FadeIn delay={200}>
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed text-lg">
                Have a question or want to collaborate? Feel free to reach out
                through the form or connect with me on social media.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'ankush.tarafdar06@gmail.com', href: 'mailto:ankush.tarafdar06@gmail.com' },
                  { label: 'Institute Email', value: 'mc25bt011@iitdh.ac.in', href: 'mailto:mc25bt011@iitdh.ac.in' },
                  { label: 'GitHub', value: 'cyberaionics', href: 'https://github.com/cyberaionics' },
                  { label: 'LinkedIn', value: 'atcysec', href: 'https://linkedin.com/in/atcysec' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="font-mono text-xs text-accent uppercase tracking-wider min-w-[100px]">
                      {link.label}
                    </span>
                    <span className="text-gray-300 group-hover:text-accent transition-colors duration-200">
                      {link.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
