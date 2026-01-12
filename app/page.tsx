import About from "./components/layout/About";
import Hero from "./components/layout/Hero";
import Navigation from "./components/layout/Navigation";
import Project from "./components/layout/Project";
import Skills from "./components/layout/Skills";
import Contact from "./components/layout/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>

s
    </div>
  );
}
