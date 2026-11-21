'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageSquare, User, AtSign } from 'lucide-react';
import { AUTHOR_INFO } from '@/data/portfolioData';

// Social SVG Icons
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FacebookIcon = (props: any) => (
  <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InstagramIcon = (props: any) => (
  <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const socialCards = [
  {
    icon: InstagramIcon,
    name: 'Instagram',
    handle: AUTHOR_INFO.instagramHandle,
    url: AUTHOR_INFO.instagram,
    color: '#E1306C',
    bgColor: '#FDE8F0',
    description: 'Daily musings, book quotes, and moments from life.',
  },
  {
    icon: FacebookIcon,
    name: 'Facebook',
    handle: AUTHOR_INFO.facebookHandle,
    url: AUTHOR_INFO.facebook,
    color: '#1877F2',
    bgColor: '#E7F0FF',
    description: 'Community updates, long-form reflections, and events.',
  },
  {
    icon: Mail,
    name: 'Direct Email',
    handle: AUTHOR_INFO.email,
    url: `mailto:${AUTHOR_INFO.email}`,
    color: '#C9A96E',
    bgColor: '#FDF3E5',
    description: 'For speaking, mentorship, press, and reader letters.',
  },
];

export default function ConnectPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and create mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Also open pre-filled mail client as helpful convenience
      const mailtoUrl = `mailto:${AUTHOR_INFO.email}?subject=Note from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Hi Rajani,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <div className="pt-20">
      {/* Header Banner - light theme elegant style */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F4] via-[#FBF2EC] to-[#FDF8F4] border-b border-[#E8B4B8]/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] px-4 py-1.5 bg-white rounded-full border border-[#E8B4B8]/30 shadow-sm"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Get In Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            Connect with Rajani
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#2D2D2D]/70 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Whether you want to share how a chapter touched you, invite Rajani to speak, or just say hello — the door is always open.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Social Channels & Warm Note */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeIn>
                <div className="bg-white rounded-3xl p-8 border border-[#E8B4B8]/30 shadow-sm">
                  <h2
                    className="text-2xl font-bold text-[#2D2D2D] mb-3"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                  >
                    Social Hangouts
                  </h2>
                  <p
                    className="text-sm text-[#2D2D2D]/70 leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                  >
                    Follow along for ongoing conversations, behind-the-scenes glimpses of writing life, and thoughtful reflections.
                  </p>

                  <div className="space-y-4">
                    {socialCards.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.a
                          key={item.name}
                          href={item.url}
                          target={item.url.startsWith('mailto') ? undefined : '_blank'}
                          rel={item.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-4 p-4 rounded-2xl border border-[#E8B4B8]/20 hover:border-[#C9A96E]/50 hover:bg-[#FDF8F4]/50 transition-all group"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                            style={{ backgroundColor: item.bgColor, color: item.color }}
                          >
                            <Icon size={22} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3
                              className="font-bold text-[#2D2D2D] text-sm group-hover:text-[#C9A96E] transition-colors"
                              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                            >
                              {item.name}
                            </h3>
                            <p
                              className="text-xs text-[#2D2D2D]/60 truncate"
                              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                            >
                              {item.handle}
                            </p>
                          </div>
                          <span className="text-xs text-[#C9A96E] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            Visit →
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              {/* Quote Card */}
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-[#FFF9F5] to-[#FDECEE]/40 rounded-3xl p-8 border border-[#E8B4B8]/30 shadow-sm text-center">
                  <div className="w-8 h-0.5 bg-[#C9A96E] mx-auto mb-4" />
                  <blockquote
                    className="text-base italic text-[#2D2D2D] leading-relaxed mb-3"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                  >
                    "Every story is a thread. And every conversation a chance to find common ground."
                  </blockquote>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E]"
                    style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                  >
                    — Rajani Tewari (Ms. Zen)
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Get In Touch Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8B4B8]/30 shadow-sm relative overflow-hidden">
                  <div className="mb-8">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-2 block"
                      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                    >
                      Send a Message
                    </span>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#2D2D2D]"
                      style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    >
                      Get in Touch
                    </h2>
                    <p
                      className="text-sm text-[#2D2D2D]/70 mt-2"
                      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                    >
                      Fill out the form below and your message will be forwarded directly to Rajani.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-12 text-center flex flex-col items-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#E8B4B8]/20 text-[#C9A96E] flex items-center justify-center mb-4">
                          <CheckCircle2 size={36} />
                        </div>
                        <h3
                          className="text-2xl font-bold text-[#2D2D2D] mb-2"
                          style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                        >
                          Message Prepared!
                        </h3>
                        <p
                          className="text-sm text-[#2D2D2D]/70 max-w-md mx-auto mb-6 leading-relaxed"
                          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                          Thank you for reaching out, {formData.name}. We&apos;ve initiated your email client to send this directly to <span className="text-[#C9A96E] font-medium">{AUTHOR_INFO.email}</span>.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: '', email: '', message: '' });
                          }}
                          className="px-6 py-2.5 bg-[#FDF8F4] border border-[#C9A96E] text-[#C9A96E] text-xs font-semibold rounded-full hover:bg-[#C9A96E] hover:text-white transition-all uppercase tracking-wider"
                          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        {/* Name Field */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/80 mb-2"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                          >
                            Your Name *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D2D2D]/35">
                              <User size={18} />
                            </span>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              placeholder="e.g. Radhika Sharma"
                              className="w-full pl-11 pr-4 py-3.5 bg-[#FDF8F4]/70 border border-[#E8B4B8]/30 rounded-2xl text-[#2D2D2D] placeholder-[#2D2D2D]/35 focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-all text-sm"
                              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/80 mb-2"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                          >
                            Email Address *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D2D2D]/35">
                              <AtSign size={18} />
                            </span>
                            <input
                              type="email"
                              id="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="you@example.com"
                              className="w-full pl-11 pr-4 py-3.5 bg-[#FDF8F4]/70 border border-[#E8B4B8]/30 rounded-2xl text-[#2D2D2D] placeholder-[#2D2D2D]/35 focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-all text-sm"
                              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                            />
                          </div>
                        </div>

                        {/* Message Field */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/80 mb-2"
                            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                          >
                            Message *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-4 text-[#2D2D2D]/35">
                              <MessageSquare size={18} />
                            </span>
                            <textarea
                              id="message"
                              required
                              rows={5}
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              placeholder="Share your thoughts, questions, or just send a warm note..."
                              className="w-full pl-11 pr-4 py-3.5 bg-[#FDF8F4]/70 border border-[#E8B4B8]/30 rounded-2xl text-[#2D2D2D] placeholder-[#2D2D2D]/35 focus:outline-none focus:border-[#C9A96E] focus:bg-white transition-all text-sm resize-none"
                              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                            />
                          </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full py-4 bg-[#C9A96E] hover:bg-[#b8955c] text-white font-semibold rounded-2xl transition-all shadow-md shadow-[#C9A96E]/25 flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                        >
                          {isSubmitting ? (
                            'Sending Message...'
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message to Rajani
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
