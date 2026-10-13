"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { contactInfo } from "@/data/contacts";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  SendHorizontal,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <Sparkles size={15} />
            Let&apos;s Connect
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get In{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind or an opportunity to discuss? I&apos;d love
            to hear from you.
          </p>
        </motion.div>

        {/* Business card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 35, scale: 0.98 }
          }
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl shadow-purple-950/20"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px] transition-colors duration-500 group-hover:bg-purple-500/15" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
          {/* Top card strip */}
          <div className="relative flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-9">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                <BriefcaseBusiness size={16} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Digital Business Card
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/6 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-medium text-emerald-300 sm:text-xs">
                Available for opportunities
              </span>
            </div>
          </div>
          {/* Card body */}
          <div className="relative grid gap-4 md:grid-cols-[0.75fr_1.25fr] md:gap-6">
            {/* Portrait */}
            <div className="relative flex flex-col items-center justify-center p-2 sm:p-4 md:p-5">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[70px]" />
              <div className="group/portrait relative w-full max-w-70 overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-xl shadow-black/30 transition-all duration-500 hover:border-purple-400/30 hover:shadow-purple-950/30">
                <div className="relative aspect-5/7 overflow-hidden">
                  <Image
                    src="/about/FORMAL.jpg"
                    alt="Christopher Marajay"
                    width={400}
                    height={500}
                    sizes="(max-width: 767px) 65vw, 240px"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/portrait:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent opacity-90" />

                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[9px] font-medium tracking-wide text-slate-200">
                      Open to opportunities
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="h-px w-5 bg-purple-400" />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-purple-200">
                        Creative Portfolio
                      </span>
                    </div>

                    <p className="text-base font-semibold tracking-tight text-white">
                      Building ideas into reality.
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Design with purpose. Develop with passion.
                    </p>
                  </div>
                </div>

                <div className="h-0.5 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400" />
              </div>

              <div className="mt-3 flex items-center justify-center gap-2.5 text-[9px] font-medium uppercase tracking-[0.15em] text-slate-500">
                <span>Design</span>
                <span className="h-1 w-1 rounded-full bg-purple-400" />
                <span>Development</span>
                <span className="h-1 w-1 rounded-full bg-blue-400" />
                <span>Creativity</span>
              </div>
            </div>

            {/* Information */}
            <div className="flex min-w-0 flex-col justify-center p-3 sm:p-4 md:py-5 md:pl-1 md:pr-6">
              <div className="mb-4">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-purple-400/15 bg-purple-500/[0.07] px-2.5 py-1">
                  <Sparkles size={12} className="text-purple-300" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-200">
                    Hello, nice to meet you
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
                  Christopher{" "}
                  <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Marajay.
                  </span>
                </h3>

                <p className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  Creative Developer & Designer
                </p>

                <p className="mt-3 max-w-lg text-xs leading-6 text-slate-400 sm:text-sm sm:leading-6">
                  I create engaging digital experiences by combining thoughtful
                  design, modern technologies, and a passion for solving
                  problems.
                </p>
              </div>

              {/* Contact details */}
              <div className="mb-4 space-y-2">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: 12 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }
                    }
                    transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                    className="group/link flex min-w-0 items-center gap-2.5 rounded-lg border border-white/[0.07] bg-white/2.5 p-2.5 transition-all duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.06] hover:shadow-lg hover:shadow-purple-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple-400/15 bg-purple-500/8 text-purple-300 transition-all duration-300 group-hover/link:border-purple-400/30 group-hover/link:bg-purple-500/15 group-hover/link:text-purple-200">
                      <contact.icon size={15} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-slate-500">
                        {contact.label}
                      </p>
                      <p className="mt-0.5 wrap-break-word text-xs font-medium text-slate-300 transition-colors group-hover/link:text-white sm:text-sm">
                        {contact.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-slate-600 transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-purple-300"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Contact CTA */}
              <a
                href={
                  contactInfo.find((contact) =>
                    contact.href.startsWith("mailto:"),
                  )?.href ?? "mailto:"
                }
                className="group/cta relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-sm"
              >
                <span className="absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/cta:translate-x-[120%]" />
                <Mail size={15} />
                <span>Let&apos;s Work Together</span>
                <SendHorizontal
                  size={14}
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </a>

              <p className="mt-2.5 text-center text-[11px] text-slate-500">
                Have an idea? Let&apos;s make it happen.
              </p>
            </div>
          </div>
          {/* Bottom accent */}
          <div className="relative h-1 w-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-70" />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-center text-xs tracking-wide text-slate-500"
        >
          Thanks for stopping by. I look forward to connecting with you.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
