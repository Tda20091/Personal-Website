"use client";

import { feature, skills } from "@/data/features";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[80px]" />

      <div className="mx-auto max-w-7xl">
        {/* About heading */}
        <div className="mb-8 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Get to know me
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A look into my development journey, technical interests, and
            approach to building meaningful digital experiences.
          </p>
        </div>

        {/* My journey */}
        <div className="relative my-16 overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 shadow-2xl shadow-purple-950/10 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                My Journey
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Turning ideas into
                <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  meaningful experiences.
                </span>
              </h3>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                With several years of experience in frontend and backend
                development, I focus on creating responsive, user-friendly web
                interfaces using React, TypeScript, and Tailwind CSS. I enjoy
                combining thoughtful design with reliable functionality and
                seamless API integration.
              </p>

              <p>
                Beyond web development, I enjoy exploring new technologies,
                experimenting with programming languages related to game
                development, and continuously refining my skills. I believe
                every project is an opportunity to learn, solve problems, and
                build something better.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="relative mt-14 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              What I Bring to the Table
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              The skills and mindset I bring to every project, from the first
              idea to the final implementation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {feature.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors duration-300 hover:border-purple-400/30 hover:bg-white/6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-linear-to-br from-purple-500/15 to-blue-500/15">
                  <item.icon
                    className="text-purple-300 transition-colors duration-300 group-hover:text-blue-300"
                    size={26}
                  />
                </div>

                <h4 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-7 text-slate-400">{item.desc}</p>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
