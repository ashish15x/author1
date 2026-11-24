'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageSquare, User, AtSign } from 'lucide-react';
import { AUTHOR_INFO } from '@/data/portfolioData';
import FadeIn from '@/components/FadeIn';
import PageHeader from '@/components/PageHeader';

const FacebookIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialCards = [
  {
    icon: InstagramIcon,
    name: 'Instagram',
    handle: AUTHOR_INFO.instagramHandle,
    url: AUTHOR_INFO.instagram,
    color: '#E1306C',
    bgColor: '#FDE8F0',
  },
  {
    icon: FacebookIcon,
    name: 'Facebook',
    handle: AUTHOR_INFO.facebookHandle,
    url: AUTHOR_INFO.facebook,
    color: '#1877F2',
    bgColor: '#E7F0FF',
  },
  {
    icon: Mail,
    name: 'Direct Email',
    handle: AUTHOR_INFO.email,
    url: `mailto:${AUTHOR_INFO.email}`,
    color: '#C9A96E',
    bgColor: '#FDF3E5',
  },
];

export default function ConnectPageClient() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:${AUTHOR_INFO.email}?subject=Note from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Rajani,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  const fieldClass =
    'w-full rounded-2xl border border-blush/30 bg-cream/70 py-3.5 pl-11 pr-4 text-sm text-charcoal placeholder-charcoal/35 transition-all focus:border-gold focus:bg-white focus:outline-none';

  return (
    <div>
      <PageHeader
        eyebrow="Get in touch"
        title="Connect with Rajani"
        description="Whether you want to share how a chapter touched you, invite Rajani to speak, or just say hello — the door is always open."
      />

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <FadeIn>
                <div className="rounded-[1.75rem] border border-blush/30 bg-white p-8 shadow-sm">
                  <h2 className="font-display mb-3 text-2xl font-bold">Social hangouts</h2>
                  <p className="mb-6 text-sm leading-relaxed text-charcoal/70">
                    Follow along for conversations, behind-the-scenes glimpses of writing life, and
                    thoughtful reflections.
                  </p>
                  <div className="space-y-3">
                    {socialCards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.a
                          key={item.name}
                          href={item.url}
                          target={item.url.startsWith('mailto') ? undefined : '_blank'}
                          rel={item.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                          whileHover={{ x: 6 }}
                          className="group flex items-center gap-4 rounded-2xl border border-blush/20 p-4 transition-colors hover:border-gold/50 hover:bg-cream/60"
                        >
                          <div
                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
                            style={{ backgroundColor: item.bgColor, color: item.color }}
                          >
                            <Icon size={22} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-sm font-bold text-charcoal group-hover:text-gold">
                              {item.name}
                            </h3>
                            <p className="truncate text-xs text-charcoal/60">{item.handle}</p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.12}>
                <div className="rounded-[1.75rem] border border-blush/30 bg-gradient-to-br from-[#FFF9F5] to-[#FDECEE]/40 p-8 text-center shadow-sm">
                  <div className="mx-auto mb-4 h-0.5 w-8 bg-gold" />
                  <blockquote className="font-display mb-3 text-base leading-relaxed text-charcoal italic">
                    “Every story is a thread. And every conversation a chance to find common ground.”
                  </blockquote>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    — Rajani Tewari (Ms. Zen)
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.08}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-blush/30 bg-white p-8 shadow-sm md:p-10">
                  <div className="blob right-[-20%] top-[-30%] h-48 w-48 bg-gold/20" />
                  <div className="relative mb-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blush">
                      Send a message
                    </p>
                    <h2 className="font-display text-2xl font-bold md:text-3xl">Get in touch</h2>
                    <p className="mt-2 text-sm text-charcoal/70">
                      Fill out the form below and your message will be forwarded directly to Rajani.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center py-12 text-center"
                      >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blush/20 text-gold">
                          <CheckCircle2 size={36} />
                        </div>
                        <h3 className="font-display mb-2 text-2xl font-bold">Message prepared</h3>
                        <p className="mb-6 max-w-md text-sm leading-relaxed text-charcoal/70">
                          Thank you, {formData.name}. Your email client should open a note to{' '}
                          <span className="font-medium text-gold">{AUTHOR_INFO.email}</span>.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', message: '' });
                          }}
                          className="btn-outline px-6 py-2.5 text-xs uppercase tracking-wider"
                        >
                          Send another
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} className="relative space-y-5">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                            Your name *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/35">
                              <User size={18} />
                            </span>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="e.g. Radhika Sharma"
                              className={fieldClass}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                            Email address *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/35">
                              <AtSign size={18} />
                            </span>
                            <input
                              type="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="you@example.com"
                              className={fieldClass}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-charcoal/80">
                            Message *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-4 text-charcoal/35">
                              <MessageSquare size={18} />
                            </span>
                            <textarea
                              id="message"
                              required
                              rows={5}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              placeholder="Share your thoughts, questions, or a warm note..."
                              className={`${fieldClass} resize-none`}
                            />
                          </div>
                        </div>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="btn-gold w-full cursor-pointer py-4 text-sm uppercase tracking-wider disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            'Sending…'
                          ) : (
                            <>
                              <Send size={16} />
                              Send message
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
