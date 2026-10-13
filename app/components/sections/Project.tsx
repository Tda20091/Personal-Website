"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { project } from "@/data/features";
import { ArrowUpRight, ChevronDown, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Project = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hasMultipleProjects = project.length > 1;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            My Portfolio
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of projects showcasing my development skills,
            creativity, and passion for building useful digital experiences.
          </p>
        </motion.div>

        <div
          className={`grid grid-cols-1 gap-7 ${
            hasMultipleProjects ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-3xl"
          }`}
        >
          {project.map((item, index) => {
            const isFeatured = hasMultipleProjects && index === 0;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.12,
                }}
                whileHover={{ y: -5 }}
                className={`group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/3 shadow-xl shadow-black/10 backdrop-blur-sm transition-colors duration-300 hover:border-purple-400/40 hover:bg-white/5 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    isFeatured ? "aspect-16/5" : "aspect-16/6"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                  <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium tracking-wider text-white backdrop-blur-md">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>

                  {isFeatured && (
                    <span className="absolute left-5 top-5 rounded-full border border-purple-300/30 bg-purple-500/20 px-3 py-1.5 text-xs font-medium text-purple-200 backdrop-blur-md">
                      Featured Project
                    </span>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <h3
                      className={`font-bold text-white ${
                        isFeatured
                          ? "text-2xl sm:text-3xl lg:text-4xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="mb-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-purple-400/15 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors hover:border-purple-400/30 hover:bg-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    {item.repo.length > 0 && (
                      <div className="group/source relative">
                        <button
                          type="button"
                          aria-label={`View ${item.title} source code repositories`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                        >
                          <Github size={17} />
                          Source Code
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-200 group-hover/source:rotate-180"
                          />
                        </button>

                        <div className="invisible absolute bottom-full left-0 z-50 w-48 translate-y-2 pb-2 opacity-0 transition-all duration-200 group-hover/source:visible group-hover/source:translate-y-0 group-hover/source:opacity-100 group-focus-within/source:visible group-focus-within/source:translate-y-0 group-focus-within/source:opacity-100">
                          <div className="rounded-xl border border-white/10 bg-slate-950 p-1.5 shadow-xl shadow-black/30">
                            {item.repo.map((repository) => (
                              <a
                                key={repository.url}
                                href={repository.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                              >
                                <span>{repository.label}</span>
                                <ArrowUpRight
                                  size={14}
                                  className="shrink-0 text-slate-500"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {item.live_url && (
                      <a
                        href={item.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${item.title}`}
                        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>

        {project.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/2 px-6 py-16 text-center">
            <h3 className="text-xl font-semibold text-white">
              Projects coming soon
            </h3>
            <p className="mt-3 text-slate-400">
              New projects are currently in the works. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
