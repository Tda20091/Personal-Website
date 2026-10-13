import { skillCategories } from "@/data/features";
import { Code2, Palette, Wrench, Sparkles, ArrowUpRight } from "lucide-react";

const categoryIcons = [Code2, Palette, Wrench, Sparkles];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative mb-20 overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <Sparkles size={15} />
            My Tech stack
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A growing collection of technologies and tools I use to create
            modern, functional, and engaging digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((categoryInfo, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex % categoryIcons.length];

            return (
              <article
                key={categoryInfo.category}
                className="group relative flex h-full min-h-87.5 flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/1.5 p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-colors duration-200 hover:border-purple-400/30 sm:p-7"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/8 blur-3xl group-hover:bg-purple-500/15" />

                <div className="relative mb-7 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-linear-to-br from-purple-500/20 to-blue-500/10 text-purple-300 shadow-inner shadow-purple-500/5">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {categoryInfo.category}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {String(categoryIndex + 1).padStart(2, "0")} /{" "}
                        {categoryInfo.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="mt-1 shrink-0 text-slate-600 group-hover:text-purple-300"
                  />
                </div>

                <div className="relative mb-6 h-px bg-linear-to-r from-purple-400/30 via-white/10 to-transparent" />

                <div className="relative grid flex-1 grid-cols-2 content-start gap-3">
                  {categoryInfo.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex min-h-14.5 items-center gap-2.5 rounded-xl border border-white/[0.07] bg-slate-950/40 px-3 py-3 transition-colors duration-200 hover:border-purple-400/30 hover:bg-purple-500/8 sm:px-3.5"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-purple-400 to-cyan-400 shadow-sm shadow-purple-400/30" />
                      <span className="text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Skill collection
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/40" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
